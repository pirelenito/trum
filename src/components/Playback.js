import React from 'react'
import Track from './Track'

export default function Playback({ instruments, height, time }) {
  return instruments.map(({ notes }, index) =>
    <g
      key={index}
      style={{
        transform: `translateX(${index * 120}px)`,
      }}
    >
      <Track notes={notes} time={time} height={height} />
    </g>
  )
}
