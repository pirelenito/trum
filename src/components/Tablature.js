import React from 'react'

const style = {
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
    height: '100%',
    outline: 'none',
  },
}

export default function Tablature({ source, onChange }) {
  return (
    <textarea
      wrap="off"
      value={source}
      onChange={e => onChange(e.target.value)}
      style={style.tablature}
    />
  )
}
