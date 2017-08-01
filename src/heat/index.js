import subscribe from 'redux-heat'
import keyboard from './keyboard'
import metronome from './metronome'
import resize from './resize'

export default store => subscribe(store, [keyboard, metronome, resize])
