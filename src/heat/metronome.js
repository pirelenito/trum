import { getBpm } from '../store'
import * as metronome from '../metronome'

export default state$ => {
  metronome.init()
  metronome.play()

  return (
    state$
      .map(getBpm)
      .skipRepeats()
      .tap(bpm => {
        metronome.setTempo(bpm)
        // where the magic happens
      })
      // we don't want to do anything
      .filter(() => false)
  )
}
