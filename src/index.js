import React, { Component } from 'react'
import { render } from 'react-dom'

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

class App extends Component {
  render() {
    return <button onClick={dumpNotes}>Dump notes</button>
  }
}

render(<App />, document.getElementById('root'))
