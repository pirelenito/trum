const fixture = [
  'INTRODUCTION                        ',
  'C|----------------|x---------------|----------------|----------------|------------x---|',
  'R|----------------|----x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x-------|',
  'S|--------------f-|----o-------o---|----o-------o---|----o-------o---|----o-------o---|',
  'B|----------------|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|',
  '                  ',
  'C|x---------------|----------------|----------------|----x-----------|',
  'R|----x---x---x---|x---x---x---x---|x---x---x---x---|x---------------|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o-------o-oo|',
  't|----------------|----------------|----------------|----------oo----|',
  'T|----------------|----------------|----------------|--------oo------|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---------|',
  '',
  '1st VERSE (hit high hat gently)',
  'C|x---------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|x---------------|',
  'H|--x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-X-X---|--x-x-x-x-x-B---|',
  'S|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-o---|----o-----o-----|',
  'B|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|',
  '',
  'C|----------------|----------------|----------------|x---------------|----------------|',
  'H|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|--x-x-x-x-x-B---|x-x-x-x-x-X-----|',
  'S|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-f---|',
  'B|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|',
  '',
  'BRIDGE ( have a loose hi hat )',
  'C|x---------------|--------x-------|',
  'H|----x---x---x---|x---x-----------|',
  'S|----o-------o---|----o-----ooo-oo|',
  'B|o-o-----o-o-----|o-o-----o-------|',
  '',
  '1st CHORUS',
  'C|x---------------|------------x---|x---------------|------------x---|',
  'R|----x---x---x---|x---x---x-------|----x---x---x---|x---x---x-------|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o-------o-oo|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o-----|',
  '',
  'C|x---------------|----------------|x---------------|--------x-------|',
  'R|----x---x---x---|x---x---x---x---|----x---x---x---|x---x---------x-|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o-----ooo---|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-o---o-o-----o-|',
  '',
  'C|x---------------|------------x---|x---------------|----------------|',
  'R|----x---x---x---|x---x---x-------|----x---x---x---|x---x-----------|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o---f---f---|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-o---o---o---o-|',
  '',
  'C|x---------------|x---------------|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|',
  'H|----x---x---x---|----x---x-------|----------------|----------------|----------------|----------------|',
  'S|----o-------o---|----o-----oooooo|----o-------o---|----o-------o---|----o-------o---|----o-------o-oo|',
  'B|o-------o-------|o-------o-------|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-o---o---o-----|',
  '',
  'C|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x-----------|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o-------o-oo|',
  't|----------------|----------------|----------------|----------oo----|',
  'T|----------------|----------------|----------------|--------oo------|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-o---o---------|',
  '',
  '2nd VERSE (hit hi hat softly)',
  'C|x---------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|x---------------|',
  'H|--x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-----x-|--x-x-x-x-x-B---|',
  'S|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-----|----o-----o-----|----o-----f-f---|----o-----o-----|',
  'B|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|',
  '',
  'C|----------------|----------------|----------------|x---------------|----------------|',
  'H|x-x-x-x-x-x-B---|x-x-x-x-x-x-B---|x-x-x-x-x-X-X---|--x-x-x-x-x-B---|x-x-x-x-x-X-X---|',
  'S|----o-----o-----|----o-----o-----|----o-----o-o---|----o-----o-----|----o-----o-o-oo|',
  'B|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-------|',
  '',
  'BRIDGE ( have a loose hi hat )',
  'C|x---------------|--------x-------|',
  'H|----x---x---x---|x---x-----------|',
  'S|----o-------o---|----o-----ooo-oo|',
  'B|o-o-----o-o-----|o-o-----o-------|',
  '',
  '2nd CHORUS',
  'C|x---------------|------------x---|x---------------|------------x---|',
  'R|----x---x---x---|x---x---x-------|----x---x---x---|x---x---x-------|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o-------o-oo|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o-----|',
  '',
  'C|x---------------|----------------|x---------------|----------------|',
  'R|----x---x---x---|x---x---x---x---|----x---x---x---|x---------------|',
  'S|----o-------o---|----o-------o---|----o-------o---|--oooo----oooo--|',
  't|----------------|----------------|----------------|------ooo-----oo|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o---------------|',
  '',
  'C|x---------------|------------x---|x---------------|----------------|',
  'R|----x---x---x---|x---x---x-------|----x---x---x---|x---x-----------|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o---f---f---|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-o---o---o---o-|',
  '',
  'C|x---------------|x-----------x---|x---------------|x---------------|',
  'H|----x---x---x---|----x---x-------|----x-----------|----x---x---x---|',
  'S|----o-------o---|----o-------o-oo|----o-o-----oo--|----o-------o---|',
  't|----------------|----------------|--------oo------|----------------|',
  'T|----------------|----------------|----------o---oo|----------------|',
  'B|o-------o-o-----|o-------o-o-----|o-o-------------|o-o-----o-------|',
  '',
  'C|s-x-x-x-x-x-----|',
  'S|------------f---|',
  'B|o-o-o-o-o-o---o-|',
  '',
  'C|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x-----------|x---x---x---x---|x---------------|',
  'H|----------------|----------------|----------------|----------------|----------------|------X---X-----|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o---f-------|----o-------o---|--oooo--oo--oo--|',
  't|----------------|----------------|----------------|----------------|----------------|--------------oo|',
  'F|----------------|----------------|----------------|------------o---|----------------|----------------|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-o-----o-------|o-----o---o-----|',
  '',
  'C|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x-----------|x---x---x---x---|x-x-x-x-x-x-----|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o---f-------|----o-------o---|------------f---|',
  'F|----------------|----------------|----------------|------------o---|----------------|o-o-o-o-o-o-----|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-------o-------|o-o-o-o-o-o---o-|',
  '',
  '3rd CHORUS',
  'C|x---------------|------------x---|x---------------|------------x---|',
  'R|----x---x---x---|x---x---x-------|----x---x---x---|x---x---x-------|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o-------o-oo|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o-----|',
  '',
  'C|x---------------|----------------|----------------|--x-----x-------|',
  'R|----x---x---x---|x---x---x---x---|x---x---x---x---|x---x-x---------|',
  'S|----o-------o---|----o-------o---|----o-------o---|--o-----o---f---|',
  't|----------------|----------------|----------------|----------oo----|',
  'B|o-o---o---o---o-|o-----o---o---o-|o-----o---o---o-|o---o-o-------o-|',
  '',
  'C|x---------------|------------x---|x---------------|----------------|',
  'R|----x---x---x---|x---x---x-------|----x---x---x---|x---------------|',
  'H|----------------|----------------|----------------|------X---X---X-|',
  'S|----o-------o---|----o-------o---|----o-------o---|--f-f---f---f---|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|',
  '',
  '( play loose hi hat )',
  'C|x---------------|x---------------|',
  'H|----x---x---x---|----x---x-------|',
  'S|----o-------o---|----o-----oooooo|',
  'B|o-o-----o-o-----|o-o-----o-------|',
  '',
  'C|x---x---x---x---|x---x---x---s---|x---x---x---x---|x---x---x---x---|',
  'S|----o-------o---|----o-------o---|----o-------o---|----o-------o---|',
  'B|o-----o---o---o-|o-----o---o---o-|o-----o---o-----|o-o---o---o---o-|',
  '',
  'C|x---x---x---x---|x---x---x---x---|x---x---x---x---|x-s-x-x-x-x-x-x-|',
  'S|o-o-o-------o---|----o-------o---|----o-------o---|--o-----o---o---|',
  'B|o-----o---o---o-|o-----o---o-----|o-o---o---o---o-|o---o-o---o---o-|',
  '',
  'C|x---x---x---x---|x---x---x---x---|x---x---x---x---|x-----x---x-----|',
  'S|----o-------o---|----o-------o---|----o-------o---|--oooo--oo--oo--|',
  'B|o-----o---o---o-|o-o---o---o---o-|o-----o---o---o-|o-----o---o---o-|',
  '',
  'C|x---x---x---x---|x---x---x-------|x---x-----x---x-|x---x---x---x---|x---x---x---x---|',
  'S|----o-------o---|----o-------f---|----o---oo--oo--|----o-------o---|----o-------o---|',
  'B|o-----o-o-----o-|o-o---o-o-o---o-|o-o---o---o---o-|o-------o-o---o-|o-------o-o---o-|',
  '',
  'C|x---------------|x---x---x---x---|x---x---x-------|',
  'S|--oooo--oooo----|----o-------o---|----o-------f---|',
  't|------o-----oo--|----------------|----------------|',
  'T|--------------oo|----------------|----------------|',
  'B|o---------------|o-o-----o-o---o-|o-----o-o-o---o-|',
  '',
  'ENDING (hit hi hat softly)',
  'C|x---------------|----------------|----------------|----------------|x-----x-----x---|',
  'H|--x-x-x-x-x-B-x-|x-x-x-x-x-x-B-x-|x-x-x-x-x-x-B-x-|x-x-x-x-x-------|----------------|',
  'S|----o-----o-----|----o-----o-----|----o-----o-----|----o-----f-f---|----------------|',
  'B|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|b-----b-----b---|',
].join('\n')

export interface Instrument {
  midiNote: string
  color: string
  label: string
  symbols: string[]
}

export interface State {
  source: string
  stickInstruments: Instrument[]
  pedalInstrument: Instrument
}

export const initialState: State = {
  source: fixture,
  pedalInstrument: { midiNote: 'C2', color: '#613846', label: 'bass drum', symbols: ['db', 'b'] },
  stickInstruments: [
    { midiNote: 'A#2', color: '#f7a59c', label: 'hi-hat', symbols: ['hh', 'h'] },
    { midiNote: 'D#3', color: '#fa9846', label: 'ride cymbal', symbols: ['rd', 'r'] },
    { midiNote: 'D2', color: '#5b9193', label: 'snare drum', symbols: ['sn', 's'] },
    { midiNote: 'C3', color: '#8ac8da', label: 'high tom', symbols: ['t1', 't'] },
    { midiNote: 'B2', color: '#8ac8da', label: 'low tom', symbols: ['t2'] },
    { midiNote: 'G2', color: '#8ac8da', label: 'floor tom', symbols: ['ft', 'f'] },
    { midiNote: 'C#3', color: '#fa9846', label: 'crash cymbal', symbols: ['cc', 'c'] },
  ],
}

export type Action = { type: 'updateSource'; newValue: string }

export type Dispatch = (value: Action) => void

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'updateSource':
      return { ...state, source: action.newValue }
  }
}
