import React, { useRef, useEffect } from 'react'
import memoizeOne from 'memoize-one'
import { Canvas, useRender } from 'react-three-fiber'
import { Tabs } from '../lib/tabs-parser/parseTabs'
import { loadTabs, PlayFunction } from './midi'
import { Instrument } from '../store'

interface PlayerProps {
  parsedTabs?: Tabs
  stickInstruments: Instrument[]
  pedalInstrument: Instrument
}

export default function Player({ parsedTabs, stickInstruments, pedalInstrument }: PlayerProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(#e4e0ba, #f7d9aa)',
      }}
    >
      <Canvas>
        <InnerPlayer parsedTabs={parsedTabs} stickInstruments={stickInstruments} pedalInstrument={pedalInstrument} />
      </Canvas>
    </div>
  )
}

function InnerPlayer({ parsedTabs, stickInstruments, pedalInstrument }: PlayerProps) {
  const groupRef = useRef<THREE.Group>(null)
  const startRef = useRef(0)
  const playStepRef = useRef<PlayFunction | null>(null)

  const speed = 100

  useEffect(() => {
    if (!parsedTabs) return

    return loadTabs(parsedTabs, playStep => {
      startRef.current = Date.now()
      playStepRef.current = memoizeOne(playStep)
    })
  }, [parsedTabs, speed])

  useRender(() => {
    const group = groupRef.current
    if (!group || !startRef.current || !playStepRef.current) return

    const songPosition = (Date.now() - startRef.current) / speed
    const position = Math.floor(songPosition)
    playStepRef.current(position)

    group.position.y = -songPosition
  })

  if (!parsedTabs) return null

  const stickInstrumentsIndexes = stickInstruments.map(stickInstrument =>
    parsedTabs.instruments.findIndex(symbol => stickInstrument.symbols.indexOf(symbol.toLowerCase()) !== -1),
  )

  const pedalInstrumentIndex = parsedTabs.instruments.findIndex(
    symbol => pedalInstrument.symbols.indexOf(symbol.toLowerCase()) !== -1,
  )

  const stickColors = stickInstruments.map(stickInstrument => stickInstrument.color)
  const pedalColor = pedalInstrument.color

  return (
    <>
      <hemisphereLight args={[0xaaaaaa, 0x000000, 0.9]} />
      <ambientLight intensity={0.5} />
      <group rotation={[-0.9, 0, 0]} position={[(-stickInstrumentsIndexes.length * 0.8) / 2, -1.5, 1.5]}>
        <group>
          {stickInstrumentsIndexes.map((instrumentIndex, orderIndex) => (
            <mesh position={[orderIndex * 1, 0, -0.09]} key={orderIndex}>
              <boxGeometry attach="geometry" args={[0.8, 0.3, 0.01, 1, 1, 1]} />
              <meshPhongMaterial attach="material" color={stickColors[orderIndex]} />
            </mesh>
          ))}
        </group>
        <group ref={groupRef}>
          {parsedTabs.notes.map((notes, index) => {
            const noteLine = notes[pedalInstrumentIndex]

            return (
              <group key={index} position={[0, index, 0]}>
                {stickInstrumentsIndexes.map((instrumentIndex, orderIndex) => {
                  const note = notes[instrumentIndex]
                  return !note ? null : (
                    <mesh position={[orderIndex * 1, 0, 0]} key={instrumentIndex}>
                      <boxGeometry attach="geometry" args={[0.8, 0.3, 0.2, 1, 1, 1]} />
                      <meshPhongMaterial attach="material" color={stickColors[orderIndex]} />
                    </mesh>
                  )
                })}
                {!noteLine ? null : (
                  <mesh position={[stickInstrumentsIndexes.length / 2 - 0.5, 0, -0.05]} key={pedalInstrumentIndex}>
                    <boxGeometry attach="geometry" args={[stickInstrumentsIndexes.length - 0.4, 0.1, 0.05, 1, 1, 1]} />
                    <meshPhongMaterial attach="material" color={pedalColor} />
                  </mesh>
                )}
              </group>
            )
          })}
        </group>
      </group>
    </>
  )
}
