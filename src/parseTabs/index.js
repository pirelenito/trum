import { identity, sortBy, prop } from 'ramda'
import instruments, { findInstrumentBySymbol } from './instruments'

const parseInstrument = line => {
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
    .map(([code, index]) => index)

  return {
    instrumentId: instrument.id,
    notes: noteIndexes,
    length: notes.length,
  }
}

export default source => {
  const songInstruments = source
    .split('\n')
    .filter(line => line.trim().length > 0)
    .map(parseInstrument)
    .filter(identity)

  const length = songInstruments[0].length

  const songInstrumentIds = songInstruments.map(({ instrumentId }) => instrumentId)
  const remainingInstruments = instruments
    .filter(instrument => !songInstrumentIds.includes(instrument.id))
    .map(instrument => ({ instrumentId: instrument.id, notes: [], length }))

  const allInstruments = sortBy(prop('instrumentId'))([...songInstruments, ...remainingInstruments])

  return {
    length,
    source,
    instruments: allInstruments,
  }
}
