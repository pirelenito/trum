import subscribe from 'redux-heat'
import metronome from './metronome'

export default store => subscribe(store, [metronome])
