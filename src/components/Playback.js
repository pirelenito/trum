import React from 'react'
import Track from './Track'

export default function Playback({ instruments, width, height }) {
  return (
    <g
      style={{
        transform: `translateX(${(width - instruments.length * 70) / 2}px)`,
      }}
    >
      {instruments.map(({ active, notes, color, icon }, index) =>
        <g
          key={index}
          style={{
            transform: `translateX(${index * 70}px)`,
          }}
        >
          <Track active={active} notes={notes} color={color} icon={icon} height={height} />
        </g>
      )}
    </g>
  )
}
