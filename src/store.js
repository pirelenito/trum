import { createStore } from 'redux'

const TICK = 'TICK'
const INPUT_NOTE = 'INPUT_NOTE'

const initialState = {
  trackMapping: { 46: 0, 49: 1, 38: 2, 48: 3, 47: 4, 43: 5, 51: 6 },
  startupTime: Date.now(),
  now: Date.now(),
  tracks: [[], [], [], [], [], [], []],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICK:
      return { ...state, now: action.payload }
    case INPUT_NOTE:
      if (action.payload.intensity === 0) return state

      console.log(action.payload)

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

export const tick = now => ({ type: TICK, payload: now })
export const inputNote = info => ({ type: INPUT_NOTE, payload: info })

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
