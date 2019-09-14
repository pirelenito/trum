interface Instrument {
  id: number
  label: string
  symbols: string[]
}

const instruments = [
  {
    id: 0,
    label: 'hi-hat',
    symbols: ['hh', 'h'],
  },
  {
    id: 1,
    label: 'ride cymbal',
    symbols: ['rd', 'r'],
  },
  {
    id: 2,
    label: 'snare drum',
    symbols: ['sn', 's'],
  },
  {
    id: 3,
    label: 'high tom',
    symbols: ['t1', 't'],
  },
  {
    id: 4,
    label: 'bass drum',
    symbols: ['db', 'b'],
  },
  {
    id: 5,
    label: 'low tom',
    symbols: ['t2'],
  },
  {
    id: 6,
    label: 'floor tom',
    symbols: ['ft', 'f'],
  },
  {
    id: 7,
    label: 'crash cymbal',
    symbols: ['cc', 'c'],
  },
]

export default instruments

export const findInstrumentBySymbol = (symbol: string): Instrument | undefined =>
  instruments.find(({ symbols }) => symbols.includes(symbol))
