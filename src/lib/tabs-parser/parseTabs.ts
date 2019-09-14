import { identity, sortBy, prop, uniqBy } from 'ramda'
import instruments, { findInstrumentBySymbol } from './instruments'

interface Track {
  instrumentId: number
  notes: number[]
  length: number
}

const parseTrack = (line: string): Track | null => {
  const match = line.match(/^(.{1,3})\|(.+)/)

  if (!match) {
    // invalid
    return null
  }

  const symbol = match[1].trim().toLowerCase()
  const notes = match[2].split('').filter(note => note !== '|' && note !== ' ')

  const instrument = findInstrumentBySymbol(symbol)

  if (!instrument) {
    return null
  }

  const noteIndexes = notes
    .map((code, index) => [code, index])
    .filter(([code]) => code !== '-')
    .map(([code, index]) => index as number)

  return {
    instrumentId: instrument.id,
    notes: noteIndexes,
    length: notes.length,
  }
}

export default (source: string) => {
  const songTracks: Track[] = uniqBy(prop('instrumentId'), source
    .split('\n')
    .filter(line => line.trim().length > 0)
    .map(parseTrack)
    .filter(identity) as Track[])

  const length = songTracks[0].length

  const songInstrumentIds = songTracks.map(({ instrumentId }) => instrumentId)

  const remainingInstruments = instruments
    .filter(instrument => !songInstrumentIds.includes(instrument.id))
    .map(instrument => ({ instrumentId: instrument.id, notes: [], length }))

  const allInstruments = sortBy(prop('instrumentId'))([...songTracks, ...remainingInstruments])

  return {
    length,
    source,
    instruments: allInstruments,
  }
}
