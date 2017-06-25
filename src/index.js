import React, { Component } from 'react'
import { render } from 'react-dom'
import Playback from './components/Playback'
import simpleExample from './musics/simple-example'

const startTimestamp = Date.now()
const drumNotes = []

navigator.requestMIDIAccess().then(
  access => {
    access.inputs.forEach(input => {
      input.onmidimessage = event => {
        if (event.data.length > 1) {
          const timestamp = Date.now() - startTimestamp
          const [device, note, intensity] = event.data

          if (intensity === 0) return

          const tick = {
            timestamp,
            note,
            intensity,
            device,
          }

          drumNotes.push(tick)
        }
      }
    })
  },
  error => console.log(error)
)

const dumpNotes = () => {
  console.log(JSON.stringify(drumNotes))
}

const noteMap = { 49: 0, 38: 1, 36: 2, 51: 3 }

const notes = simpleExample.map(note => ({ ...note, note: noteMap[note.note] }))
const tracks = notes.reduce((tracks, note) => {
  tracks[note.note] = tracks[note.note] || []
  tracks[note.note].push(note)
  return tracks
}, [])

class App extends Component {
  render() {
    return (
      <div>
        <Playback tracks={tracks} />
        <button onClick={dumpNotes}>Dump notes</button>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
