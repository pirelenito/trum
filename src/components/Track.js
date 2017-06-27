import React from 'react'
import * as Note from './Note'

export default function Track({ notes, height }) {
  return (
    <g>
      <rect x={0} y={0} height={height} width={62} fill="#7986CB" />
      {notes.map(({ live, id, position }) =>
        <g
          key={id}
          id={id}
          style={{
            transform: `translateY(${height - position}px)`,
          }}
        >
          {live ? <Note.Live /> : <Note.Dull />}
        </g>
      )}
    </g>
  )
}
