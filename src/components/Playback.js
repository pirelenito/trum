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

const trackColors = [
  '#2c3e50',
  '#2c3e50',
  '#2c3e50',
  '#2c3e50',
  '#2c3e50',
  '#2c3e50',
  '#2c3e50',
  '#2c3e50',
]

export default ({ tracks }) => {
  return (
    <div style={styles.container}>
      {tracks.map((track, index) => <Track key={index} color={trackColors[index]} notes={track} />)}
    </div>
  )
}

const Track = ({ color, notes }) => {
  return (
    <div style={{ ...styles.track, background: color }}>
      {notes.map(note =>
        <div
          key={note[0]}
          style={{ position: 'relative', top: `${note[1]}%`, background: 'white' }}
        >
          {note[0]}
        </div>
      )}
      <div style={styles.pad} />
    </div>
  )
}
