import React from 'react'

const styles = {
  container: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  track: {
    position: 'relative',
    flexGrow: 1,
    margin: '0 2px',
  },
}

const trackColors = ['#95a5a6', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#e67e22']

export default ({ tracks }) => {
  return (
    <div style={styles.container}>
      {tracks.map((track, index) => <Track color={trackColors[index]} notes={track} />)}
    </div>
  )
}

const Track = ({ color, notes }) => {
  return (
    <div style={{ ...styles.track, background: color }}>
      {notes.map(note =>
        <div style={{ position: 'relative', top: note.timestamp / 100 }}>{note.note}</div>
      )}
      <div style={styles.pad} />
    </div>
  )
}
