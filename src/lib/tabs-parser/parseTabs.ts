import { identity, sortBy, prop, uniq, sort } from 'ramda'

export interface Track {
  instrument: string
  notes: number[]
  length: number
}

export interface Section {
  length: number
  tracks: Track[]
}

export interface Tabs {
  length: number
  tracks: Track[]
  instruments: string[]
}

const parseTrack = (line: string): Track | null => {
  const match = line.match(/^(.{1,3})\|(.+)/)

  if (!match) {
    // invalid
    return null
  }

  const instrument = match[1].trim()
  const notes = match[2].split('').filter(note => note !== '|' && note !== ' ')

  const noteIndexes = notes
    .map((code, index) => [code, index])
    .filter(([code]) => code !== '-')
    .map(([code, index]) => index as number)

  return {
    instrument,
    notes: noteIndexes,
    length: notes.length,
  }
}

const parseSection = (source: string, instruments: string[]): Section => {
  const tracks = source
    .split('\n')
    .filter(line => line.trim().length > 0)
    .map(parseTrack)
    .filter(identity) as Track[]

  const length = tracks[0].length

  const songInstruments = tracks.map(({ instrument }) => instrument)

  const remainingInstruments = instruments
    .filter(instrument => !songInstruments.includes(instrument))
    .map(instrument => ({ instrument, notes: [], length }))

  const allTracks = sortBy(prop('instrument'))([...tracks, ...remainingInstruments])

  return {
    length,
    tracks: allTracks,
  }
}

const collectInstruments = (source: string) => {
  const instruments: string[] = []
  const regexp = /^(.{1,3})\|\S/gm

  let result: RegExpExecArray | null
  while ((result = regexp.exec(source)) !== null) {
    instruments.push(result[1].trim())
  }

  return sort((a, b) => (a > b ? 1 : -1), uniq(instruments))
}

const joinSections = (sections: Section[], instruments: string[]): Tabs => {
  return sections
    .filter(section => section.length > 0)
    .reduce<Tabs>(
      (tab: Tabs, section: Section) => {
        return {
          instruments: instruments,
          length: tab.length + section.length,
          tracks: section.tracks.map((sectionTrack, sectionTrackIndex) => {
            const tabTrack = tab.tracks[sectionTrackIndex] || {
              length: 0,
              notes: [],
              instrument: sectionTrack.instrument,
            }

            if (sectionTrack.instrument !== tabTrack.instrument)
              throw new Error(`missmatch instrument, ${sectionTrack.instrument}, ${tabTrack.instrument}`)

            const mergedTrack: Track = {
              instrument: sectionTrack.instrument,
              notes: [...tabTrack.notes, ...sectionTrack.notes.map(note => note + tabTrack.length)],
              length: sectionTrack.length + tabTrack.length,
            }

            return mergedTrack
          }),
        }
      },
      {
        instruments: instruments,
        length: 0,
        tracks: [],
      },
    )
}

export default (source: string): Tabs => {
  const instruments = collectInstruments(source)

  const sectionSources = source.split(/\r?\n\r?\n/)

  const sections = sectionSources.map(section => parseSection(section, instruments))

  return joinSections(sections, instruments)
}
