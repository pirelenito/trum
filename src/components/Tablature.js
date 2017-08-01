import React from 'react'

const styles = {
  container: {
    fontFamily: 'monospace',
    color: 'white',
    background: '#1b2b34',
    padding: 20,
  },
  tablature: {
    display: 'block',
    border: 'none',
    padding: 10,
    color: '#99c595',
    background: '#1b2b34',
    resize: 'none',
    fontFamily: 'monospace',
    fontSize: '1em',
    overflowY: 'scroll',
    width: '100%',
    height: '400px',
    outline: 'none',
  },
  bpm: {
    display: 'block',
    border: 'none',
    padding: 10,
    color: '#99c595',
    background: '#1b2b34',
    fontFamily: 'monospace',
    fontSize: '1em',
    width: '100%',
    outline: 'none',
    marginBottom: 20,
  },
}

export default function Tablature({ tablature, bpm, onChangeTablature, onChangeBpm }) {
  return (
    <div style={styles.container}>
      <label>bpm</label>
      <input style={styles.bpm} value={bpm} onChange={e => onChangeBpm(e.target.value)} />
      <label>tablature</label>
      <textarea
        wrap="off"
        value={tablature}
        onChange={e => onChangeTablature(e.target.value)}
        style={styles.tablature}
      />
    </div>
  )
}
