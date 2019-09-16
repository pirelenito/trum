import { identity, sortBy, prop, uniq, sort } from 'ramda'

export interface Track {
  instrument: string
  notes: Note[]
  length: number
}

type Note = string | null

export interface Tabs {
  length: number
  notes: Note[][]
  instruments: string[]
}

export type Section = Tabs

const parseTrack = (line: string): Track | null => {
  const match = line.match(/^(.{1,3})\|([\w|-]+)/)

  if (!match) {
    // invalid
    return null
  }

  const instrument = match[1].trim()
  const notes = match[2]
    .split('')
    .filter(note => note !== '|' && note !== ' ')
    .map(note => (note === '-' ? null : note))

  return {
    instrument,
    notes,
    length: notes.length,
  }
}

const parseSection = (source: string, instruments: string[]): Section => {
  const tracks = source
    .split('\n')
    .filter(line => line.trim().length > 0)
    .map(parseTrack)
    .filter(identity) as Track[]

  const length = tracks.length > 0 ? tracks[0].length : 0

  const sectionInstruments = tracks.map(({ instrument }) => instrument)

  const emptyInstrumentNotes = Array.from(Array(length).keys()).map(() => null)

  const remainingInstruments = instruments
    .filter(instrument => !sectionInstruments.includes(instrument))
    .map(instrument => ({ instrument, notes: emptyInstrumentNotes, length }))

  const allTracks = sortBy(prop('instrument'))([...tracks, ...remainingInstruments])
  const firstTrack = allTracks[0]

  const beat = firstTrack.notes.map((_, index) => allTracks.map(track => track.notes[index]))

  return {
    instruments,
    length,
    notes: beat,
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
  const beat = sections.reduce((beat, section) => [...beat, ...section.notes], [] as Note[][])
  const length = sections.reduce((length, section) => length + section.length, 0)

  return {
    instruments,
    notes: beat,
    length,
  }
}

const trimLines = (source: string) =>
  source
    .split('\n')
    .map(line => line.trim())
    .join('\n')

export default (source: string): Tabs => {
  const trimedSource = trimLines(source)

  const instruments = collectInstruments(trimedSource)

  const sectionSources = trimedSource.split(/\r?\n\r?\n/)

  const sections = sectionSources.map(section => parseSection(section, instruments))

  return joinSections(sections, instruments)
}
