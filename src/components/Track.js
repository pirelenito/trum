import React from 'react'
import * as Note from './Note'

const noteSize = 100

export default function Track({notes, time, height}) {
  return (
    <g>
      <rect x={0} y={0} height={height} width={62} fill="#7986CB" />
      {notes.map((note, index) =>
        <g
          key={index}
          style={{
            transform: `translateY(${height -
              (index * noteSize - noteSize / 2 - time) -
              noteSize}px)`,
          }}
        >
          {note !== '-' ? <Note.Live /> : <Note.Dull />}
        </g>
      )}
    </g>
  )
}
