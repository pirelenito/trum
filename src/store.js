import { createStore } from 'redux'
import { range } from 'ramda'
import parseTabs from './parseTabs'
import singleStrokeRoll from './tabs/singleStrokeRoll.txt'

const { ceil, floor } = Math

const TICK = 'TICK'
const INPUT_NOTE = 'INPUT_NOTE'
const SET_TABLATURE = 'SET_TABLATURE'
const PLAY = 'PLAY'
const RESIZE = 'RESIZE'

export const NOTE_SIZE = 100

const initialState = {
  windowSize: {
    width: 0,
    height: 0,
  },
  tablature: singleStrokeRoll,
  now: 0,
  playbackStart: 0,
  bpm: 60,
  drumKit: [
    { midiNote: 46, label: 'hi-hat', symbols: ['hh', 'h'] },
    { midiNote: 49, label: 'ride cymbal', symbols: ['rd', 'r'] },
    { midiNote: 38, label: 'snare drum', symbols: ['sn', 's'] },
    { midiNote: 48, label: 'high tom', symbols: ['t1', 't'] },
    { midiNote: 36, label: 'bass drum', symbols: ['db', 'b'] },
    { midiNote: 47, label: 'low tom', symbols: ['t2'] },
    { midiNote: 43, label: 'floor tom', symbols: ['ft', 'f'] },
    { midiNote: 51, label: 'crash cymbal', symbols: ['cc', 'c'] },
  ],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return { ...state, playbackStart: action.payload }
    case RESIZE:
      return { ...state, windowSize: action.payload }
    case TICK:
      return { ...state, now: action.payload }
    case SET_TABLATURE:
      return { ...state, tablature: action.payload }
    case INPUT_NOTE:
      if (action.payload.intensity === 0) return state

      const trackIndex = state.trackMapping[action.payload.note]
      if (trackIndex === undefined) return state

      return {
        ...state,
        tracks: state.tracks.map((track, index) => {
          if (index !== trackIndex) return track
          return [...track, action.payload.timestamp]
        }),
      }
    default:
      return state
  }
}

// actions
export const tick = now => ({ type: TICK, payload: now })
export const inputNote = info => ({ type: INPUT_NOTE, payload: info })
export const setTablature = tablature => ({ type: SET_TABLATURE, payload: tablature })
export const play = timestamp => ({ type: PLAY, payload: timestamp })
export const resize = ({ width, height }) => ({ type: RESIZE, payload: { width, height } })

// selectors
export const getPlaybackTime = state =>
  floor((state.now - state.playbackStart) / (60000 / state.bpm / 4) * 100)

export const getAmountOfVisibleNotes = state => ceil(state.windowSize.height / NOTE_SIZE) + 2

export const getMusicInstruments = state => {
  const amountOfVisibleNotes = getAmountOfVisibleNotes(state)
  const instruments = parseTabs(state.tablature)
  const playbackTime = getPlaybackTime(state)
  const firstVisibleNote = floor(playbackTime / NOTE_SIZE)

  return state.drumKit.map(instrument => {
    const musicInstrument = instruments.find(musicInstrument => {
      return instrument.symbols.indexOf(musicInstrument.symbol) !== -1
    })

    if (!musicInstrument) {
      return {
        symbol: instrument.symbols[0],
        notes: [],
      }
    }

    return {
      symbol: musicInstrument.symbol,
      notes: range(firstVisibleNote, amountOfVisibleNotes + firstVisibleNote).map(id => ({
        live: musicInstrument.notes[id % musicInstrument.notes.length] !== '-',
        id,
        position: id * NOTE_SIZE - NOTE_SIZE / 2 - playbackTime,
      })),
    }
  })
}

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
