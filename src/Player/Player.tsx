import React, { useRef } from 'react'
import { Canvas, useRender } from 'react-three-fiber'
import { Tabs } from '../lib/tabs-parser/parseTabs'

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

  useRender(() => {
    const group = groupRef.current
    if (!group) return

    group.position.y -= 0.1
  })

  if (!parsedTabs) return null
  return (
    <>
      <hemisphereLight args={[0xaaaaaa, 0x000000, 0.9]} />
      <ambientLight intensity={0.5} />
      <group rotation={[-0.9, 0, 0]} position={[(-parsedTabs.instruments.length * 0.8) / 2, -1.5, 2]}>
        <group ref={groupRef}>
          {parsedTabs.notes.map((notes, index) => {
            return (
              <group key={index} position={[0, index, 0]}>
                {notes.map((note, noteIndex) =>
                  !note ? null : (
                    <mesh position={[noteIndex * 1, 0, 0]} key={noteIndex}>
                      <boxGeometry attach="geometry" args={[0.8, 0.3, 0.2, 1, 1, 1]} />
                      <meshPhongMaterial attach="material" color={COLORS[noteIndex % COLORS.length]} />
                    </mesh>
                  ),
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
