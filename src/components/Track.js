import React from 'react'
import { Motion, spring } from 'react-motion'
import * as Note from './Note'
import { NOTE_SIZE } from '../store'
import InstrumentIcon from './InstrumentIcon'

const springConfig = { stiffness: 400, damping: 18 }

export default function Track({ notes, height, color, icon, active }) {
  const opacity = active ? 0.2 : 1
  const iconDelta = active ? 0 : 5

  return (
    <g>
      <Motion defaultStyle={{ opacity }} style={{ opacity: spring(opacity, springConfig) }}>
        {interpolatingStyle =>
          <g opacity={interpolatingStyle.opacity}>
            <rect x={0} y={0} height={height} width={62} fill="white" />
          </g>}
      </Motion>

      <g style={{ transform: `translateY(${height - (75 + 38)}px)` }}>
        <Note.Slot color={color} />
      </g>

      <Motion defaultStyle={{ iconDelta }} style={{ iconDelta: spring(iconDelta, springConfig) }}>
        {interpolatingStyle =>
          <g
            style={{
              transform: `translateY(${height -
                46 +
                interpolatingStyle.iconDelta}px) translateX(${14}px)`,
            }}
          >
            <InstrumentIcon icon={icon} color={color} />
          </g>}
      </Motion>

      {notes.map(({ live, id, position }) =>
        <g
          key={id}
          id={id}
          style={{
            transform: `translateY(${height - NOTE_SIZE - (50 + 38) - position}px)`,
          }}
        >
          {live ? <Note.Live color={color} /> : <Note.Dull />}
        </g>
      )}
    </g>
  )
}
