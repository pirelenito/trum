const instruments = [
  { midiNote: 46, icon: 'HiHat', color: '#f7a59c', label: 'hi-hat', symbols: ['hh', 'h'] },
  { midiNote: 49, icon: 'Cymbal', color: '#fa9846', label: 'ride cymbal', symbols: ['rd', 'r'] },
  { midiNote: 38, icon: 'Snare', color: '#5b9193', label: 'snare drum', symbols: ['sn', 's'] },
  { midiNote: 48, icon: 'Tom', color: '#8ac8da', label: 'high tom', symbols: ['t1', 't'] },
  { midiNote: 36, icon: 'BassDrum', color: '#613846', label: 'bass drum', symbols: ['db', 'b'] },
  { midiNote: 47, icon: 'Tom', color: '#8ac8da', label: 'low tom', symbols: ['t2'] },
  { midiNote: 43, icon: 'Tom', color: '#8ac8da', label: 'floor tom', symbols: ['ft', 'f'] },
  { midiNote: 51, icon: 'Cymbal', color: '#fa9846', label: 'crash cymbal', symbols: ['cc', 'c'] },
]

export default instruments

export const findInstrumentBySymbol = symbol => instruments.find(({ symbols }) => symbols.includes(symbol))
