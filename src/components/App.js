import React from 'react'
import parseTabs from '../parseTabs'

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
    border: '5px solid rgb(27, 169, 141)',
    background: 'rgb(27, 169, 141)',
    margin: '0 5px',
    overflow: 'hidden',
  },
  dullNote: {
    borderTop: '2px solid white',
    margin: '49px 0px',
    opacity: 0.2,
    display: 'inline-block',
    width: '100%',
  },
  liveNote: {
    borderTop: '20px solid white',
    margin: '40px 0px',
    display: 'inline-block',
    width: '100%',
  },
}

const sampleTabs = `
C |c-c-----|
Rd|--------|
H |--------|
t |--------|
S |----o---|
F |----o-oo|
B |o-o-----|`

const Note = ({ note }) => <div style={note === '-' ? styles.dullNote : styles.liveNote} />

const ScrollingNotes = ({ instruments }) => {
  return (
    <div style={styles.scrollingNotes}>
      {instruments.map((instrument, index) => {
        return (
          <div style={styles.scrollingNotesInstrument}>
            {instrument.notes.map(note => <Note note={note} />)}
          </div>
        )
      })}
    </div>
  )
}

export default () => {
  return (
    <div style={styles.container}>
      <div style={styles.gameplay}>
        <ScrollingNotes instruments={parseTabs(sampleTabs)} />
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
