import WebMidi, { Output } from 'webmidi'
import parseTabs from './lib/tabs-parser/parseTabs'

const fixture = [
  'Verse 1 (00:11)',
  'C1|----------------|----------------|x---------------|----------------|',
  'HH|----------------|----------------|--x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|',
  'Sn|----------------|----------------|----o-------o---|----o-------o---|',
  'B1|----------------|----------------|o-------o-o-----|o-------o-o-----|',
  '',
  'HH|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|',
  'Sn|----o-------o---|----o-------o---|----o-------o---|----o-------o---|',
  'B1|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|',
].join('\n')

const tabs = parseTabs(fixture)

const play = (output: Output) => {
  if (!output) return

  let position = 0

  const next = () => {
    const beat = tabs.notes[position]
    position = (position + 1) % tabs.length

    beat.forEach((note, index) => {
      if (!note) return

      if (index === 0) output.playNote('B2', 10)
      if (index === 1) output.playNote('C#3', 10)
      if (index === 2) output.playNote('A#2', 10)
      if (index === 3) output.playNote('D2', 10)
    })

    setTimeout(next, 100)
  }

  next()
}

export default function playback() {
  WebMidi.enable(function(err) {
    if (err) {
      console.log('WebMidi could not be enabled.', err)
    } else {
      console.log('WebMidi enabled!')

      console.log(WebMidi.inputs)
      console.log(WebMidi.outputs)

      WebMidi.inputs[0].addListener('noteon', 'all', function(e) {
        console.log('e', e)
        console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ').')
      })

      play(WebMidi.outputs[0])
    }
  })
}
