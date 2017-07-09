import React from 'react'
import * as Note from './Note'
import { NOTE_SIZE } from '../store'
import InstrumentIcon from './InstrumentIcon'

export default function Track({ notes, height, color, icon }) {
  return (
    <g>
      <rect x={0} y={0} height={height} width={62} fill={color} />

      <g style={{ transform: `translateY(${height - (75 + 38)}px)` }}>
        <Note.Slot />
      </g>

      <g style={{ transform: `translateY(${height - 46}px) translateX(${14}px)` }}>
        <InstrumentIcon icon={icon} />
      </g>

      {notes.map(({ live, id, position }) =>
        <g
          key={id}
          id={id}
          style={{
            transform: `translateY(${height - NOTE_SIZE - (25 + 38) - position}px)`,
          }}
        >
          {live ? <Note.Live /> : <Note.Dull />}
        </g>
      )}
    </g>
  )
}
