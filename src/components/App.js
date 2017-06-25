import React from 'react'

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  gameplay: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    background: '#1abc9c',
  },
  tabDefinition: {
    border: 'none',
    padding: 10,
    color: '#99c595',
    background: '#1b2b34',
    width: '100%',
    resize: 'none',
    fontFamily: 'monospace',
    fontSize: '1em',
    overflowY: 'scroll',
  },
  scrollingNotes: {
    flexGrow: 1,
    background: '#1abc9c',
    display: 'flex',
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
  },
  scrollingNotesInstrument: {
    flexGrow: 1,
    background: 'rgb(27, 169, 141)',
    margin: '0 5px',
  },
}

const sampleTabs = `C |c-c-------------|----------------|----------------|----------s-----|
Rd|------X---------|----------------|------X---------|----------------|
H |--------X-------|----------------|--------X-------|----------------|
t |----------------|-------------o--|----------------|----------------|
S |----o-------o---|----o-------o---|----o-------o---|----o-------o---|
F |------------o-oo|o-o-o-o-o-o---oo|o-o---------o-oo|o-o-o-o-o-------|
B |o-o-------------|o-o-------------|o-o-------------|o-o-------------|`

const instruments = [
  {
    symbol: 'Rd',
    midiNote: 36,
    type: 'cymbal',
  },
  {
    symbol: 'H',
    midiNote: 36,
    type: 'cymbal',
  },
  {
    symbol: 't',
    midiNote: 36,
    type: 'drum',
  },
  {
    symbol: 'S',
    midiNote: 36,
    type: 'drum',
  },
  {
    symbol: 'F',
    midiNote: 36,
    type: 'drum',
  },
  {
    symbol: 'B',
    midiNote: 36,
    type: 'pedal',
  },
]

const ScrollingNotes = ({ instruments, notes }) => {
  return (
    <div style={styles.scrollingNotes}>
      {instruments.map((instrument, index) => {
        return <div style={styles.scrollingNotesInstrument} />
      })}
    </div>
  )
}

export default () => {
  return (
    <div style={styles.container}>
      <div style={styles.gameplay}>
        <ScrollingNotes instruments={instruments} />
      </div>
      <textarea
        wrap="off"
        value={sampleTabs}
        rows={sampleTabs.split('\n').length}
        style={styles.tabDefinition}
      />
    </div>
  )
}
