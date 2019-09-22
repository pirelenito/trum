import React, { useRef, useEffect } from 'react'
import memoizeOne from 'memoize-one'
import { Canvas, useRender } from 'react-three-fiber'
import { Tabs } from '../lib/tabs-parser/parseTabs'
import { loadTabs, PlayFunction } from './midi'

interface PlayerProps {
  parsedTabs?: Tabs
}

export default function Player({ parsedTabs }: PlayerProps) {
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
        <InnerPlayer parsedTabs={parsedTabs} />
      </Canvas>
    </div>
  )
}

function InnerPlayer({ parsedTabs }: PlayerProps) {
  const groupRef = useRef<THREE.Group>(null)
  const startRef = useRef(0)
  const playStepRef = useRef<PlayFunction | null>(null)
  const noteBoxMap = [1, 2, 3, 4, 5, 6, 7]
  const noteLineIndex = 0
  const speed = 300

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

  return (
    <>
      <hemisphereLight args={[0xaaaaaa, 0x000000, 0.9]} />
      <ambientLight intensity={0.5} />
      <group rotation={[-0.9, 0, 0]} position={[(-noteBoxMap.length * 0.8) / 2, -1.5, 1.5]}>
        <group>
          {noteBoxMap.map((instrumentIndex, orderIndex) => (
            <mesh position={[orderIndex * 1, 0, -0.09]} key={instrumentIndex}>
              <boxGeometry attach="geometry" args={[0.8, 0.3, 0.01, 1, 1, 1]} />
              <meshPhongMaterial attach="material" color={COLORS[instrumentIndex % COLORS.length]} />
            </mesh>
          ))}
        </group>
        <group ref={groupRef}>
          {parsedTabs.notes.map((notes, index) => {
            const noteLine = notes[noteLineIndex]

            return (
              <group key={index} position={[0, index, 0]}>
                {noteBoxMap.map((instrumentIndex, orderIndex) => {
                  const note = notes[instrumentIndex]
                  return !note ? null : (
                    <mesh position={[orderIndex * 1, 0, 0]} key={instrumentIndex}>
                      <boxGeometry attach="geometry" args={[0.8, 0.3, 0.2, 1, 1, 1]} />
                      <meshPhongMaterial attach="material" color={COLORS[instrumentIndex % COLORS.length]} />
                    </mesh>
                  )
                })}
                {!noteLine ? null : (
                  <mesh position={[noteBoxMap.length / 2 - 0.5, 0, -0.05]} key={noteLineIndex}>
                    <boxGeometry attach="geometry" args={[noteBoxMap.length - 0.4, 0.1, 0.05, 1, 1, 1]} />
                    <meshPhongMaterial attach="material" color={COLORS[noteLineIndex % COLORS.length]} />
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

const COLORS = ['#f7a59c', '#fa9846', '#5b9193', '#8ac8da', '#613846', '#8ac8da', '#659eae', '#fa9846']
