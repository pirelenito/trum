import '../store'

const { floor } = Math

let previousTime = 0

function playTone(audioContext, pitch = 440) {
  var osc = audioContext.createOscillator()
  osc.connect(audioContext.destination)

  const scheduleTime = findProperTime(0.5, audioContext.currentTime)
  console.log(audioContext.currentTime, scheduleTime)
  osc.frequency.value = pitch
  osc.start(scheduleTime)
  osc.stop(scheduleTime + 0.1)
  previousTime = scheduleTime
}

export default state$ => {
  const audioContext = new AudioContext()

  return (
    state$
      .map(({ now }) => now)
      .map(time => floor(time / 500))
      .skipRepeats()
      .tap(time => {
        console.log(time)
        playTone(audioContext)
      })
      // we don't want to do anything
      .filter(() => false)
  )
}

const findProperTime = (step, time) => (floor(time / step) + 1) * step
