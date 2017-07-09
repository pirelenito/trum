import React from 'react'
import * as Note from './Note'
import { NOTE_SIZE } from '../store'

export default function Track({ notes, height, color }) {
  return (
    <g>
      <rect x={0} y={0} height={height} width={62} fill={color} />

      <g style={{ transform: `translateY(${height - 75}px)` }}>
        <Note.Slot />
      </g>
      {notes.map(({ live, id, position }) =>
        <g
          key={id}
          id={id}
          style={{
            transform: `translateY(${height - NOTE_SIZE - 25 - position}px)`,
          }}
        >
          {live ? <Note.Live /> : <Note.Dull />}
        </g>
      )}
    </g>
  )
}
