import WebMidi, { Output } from 'webmidi'
import { Tabs } from '../lib/tabs-parser/parseTabs'

const midiInstruments = [
  { id: 0, midiNote: 'A#2', icon: 'HiHat', color: '#f7a59c', label: 'hi-hat', symbols: ['hh', 'h'] },
  { id: 1, midiNote: 'D#3', icon: 'Cymbal', color: '#fa9846', label: 'ride cymbal', symbols: ['rd', 'r'] },
  { id: 2, midiNote: 'D2', icon: 'Snare', color: '#5b9193', label: 'snare drum', symbols: ['sn', 's'] },
  { id: 3, midiNote: 'C3', icon: 'Tom', color: '#8ac8da', label: 'high tom', symbols: ['t1', 't'] },
  { id: 4, midiNote: 'C2', icon: 'BassDrum', color: '#613846', label: 'bass drum', symbols: ['db', 'b'] },
  { id: 5, midiNote: 'B2', icon: 'Tom', color: '#8ac8da', label: 'low tom', symbols: ['t2'] },
  { id: 6, midiNote: 'G2', icon: 'Tom', color: '#8ac8da', label: 'floor tom', symbols: ['ft', 'f'] },
  { id: 7, midiNote: 'C#3', icon: 'Cymbal', color: '#fa9846', label: 'crash cymbal', symbols: ['cc', 'c'] },
]

interface OnStart {
  (startTimestamp: number): void
}

interface Stop {
  (): void
}

const play = (tabs: Tabs, output: Output, speed: number, onStart: OnStart): Stop => {
  if (!output) return () => {}

  const instrumentNote = tabs.instruments.map(instrument => {
    const midiInstrument = midiInstruments.find(midi => midi.symbols.indexOf(instrument.toLowerCase()) !== -1)
    if (!midiInstrument) throw new Error('no midi found')
    return midiInstrument.midiNote
  })

  let timeout: NodeJS.Timeout
  let position = 0

  const next = () => {
    if (position === 0) onStart(Date.now())
    const beat = tabs.notes[position]
    position = (position + 1) % tabs.length

    beat.forEach((note, index) => {
      if (!note) return
      const midiNode = instrumentNote[index]
      output.playNote(midiNode, 10)
    })

    timeout = setTimeout(next, speed)
  }

  next()

  return () => clearTimeout(timeout)
}

export function playTabs(tabs: Tabs, speed: number, onStart: OnStart) {
  let stop: Stop

  WebMidi.enable(function(err) {
    if (err) {
      console.log('WebMidi could not be enabled.', err)
    } else {
      console.log('WebMidi enabled!')

      console.log(WebMidi.inputs)
      console.log(WebMidi.outputs)

      if (WebMidi.inputs.length > 0) {
        WebMidi.inputs[0].addListener('noteon', 'all', function(e) {
          console.log('e', e)
          console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ').')
        })
      }

      stop = play(tabs, WebMidi.outputs[0], speed, onStart)
    }
  })

  return () => stop && stop()
}
