import React from 'react'
import Track from './Track'

export default function Playback({ instruments, height }) {
  return instruments.map(({ notes, color, icon }, index) =>
    <g
      key={index}
      style={{
        transform: `translateX(${index * 70}px)`,
      }}
    >
      <Track notes={notes} color={color} icon={icon} height={height} />
    </g>
  )
}
