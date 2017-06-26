import React from 'react'
import parseTabs from '../parseTabs'
import reverse from 'lodash.reverse'

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  tabDefinition: {
    position: 'absolute',
    top: 'calc(100% - 150px)',
    left: 0,
    width: '100%',
    height: '150px',
    border: 'none',
    padding: 10,
    color: '#99c595',
    background: '#1b2b34',
    resize: 'none',
    fontFamily: 'monospace',
    fontSize: '1em',
    overflowY: 'scroll',
  },
  scrollingNotes: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100% - 150px)',
    background: '#1abc9c',
    display: 'flex',
    justifyContent: 'center',
  },
  scrollingNotesInstrument: {
    height: '100%',
    width: '100px',
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
C |--------|c-c-----|
Rd|--------|--------|
H |--------|--------|
t |--------|--------|
S |--------|----o---|
F |--------|----o-oo|
B |--------|o-o-----|`

const bpm = 132

const Note = ({ note }) => <div style={note === '-' ? styles.dullNote : styles.liveNote} />

const ScrollingNotes = ({ instruments }) => {
  return (
    <div style={styles.scrollingNotes}>
      <style>
        {`
          @keyframes rolling {
            from { margin-top: -${100 * instruments[0].notes.length}px; }
            to { margin-top: ${100 * instruments[0].notes.length}px; }
          }
          `}
      </style>
      {instruments.map((instrument, index) => {
        return (
          <div style={styles.scrollingNotesInstrument}>
            <div
              style={{
                animationName: 'rolling',
                animationDuration: `${60 / bpm * instrument.notes.length}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
              }}
            >
              {reverse(instrument.notes).map(note => <Note note={note} />)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default () => {
  return (
    <div style={styles.container}>
      <ScrollingNotes instruments={parseTabs(sampleTabs)} />
      <textarea
        wrap="off"
        value={sampleTabs}
        rows={sampleTabs.split('\n').length}
        style={styles.tabDefinition}
      />
    </div>
  )
}
