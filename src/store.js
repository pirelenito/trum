import {createStore} from 'redux'

const {floor} = Math

const TICK = 'TICK'
const INPUT_NOTE = 'INPUT_NOTE'
const LOAD_TRACKS = 'LOAD_TRACKS'
const PLAY = 'PLAY'
const RESIZE = 'RESIZE'

const initialState = {
  windowSize: {
    width: 0,
    height: 0,
  },
  trackMapping: {46: 0, 49: 1, 38: 2, 48: 3, 36: 4, 47: 5, 43: 6, 51: 7},
  now: 0,
  playbackStart: 0,
  bpm: 130,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return {...state, playbackStart: action.payload}
    case RESIZE:
      return {...state, windowSize: action.payload}
    case TICK:
      return {...state, now: action.payload}
    case LOAD_TRACKS:
      return {...state, tracks: action.payload}
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
export const tick = now => ({type: TICK, payload: now})
export const inputNote = info => ({type: INPUT_NOTE, payload: info})
export const loadTracks = tracks => ({type: LOAD_TRACKS, payload: tracks})
export const play = timestamp => ({type: PLAY, payload: timestamp})
export const resize = ({width, height}) => ({type: RESIZE, payload: {width, height}})

// selectors
export const getPlaybackTime = state =>
  floor((state.now - state.playbackStart) / (60000 / state.bpm) * 100)

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
