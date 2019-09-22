import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { Tabs } from '../lib/tabs-parser/parseTabs'

interface PlayerProps {
  parsedTabs?: Tabs
}

export default function Player({ parsedTabs }: PlayerProps) {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!divRef.current) return

    const element = divRef.current

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0xf7d9aa, 100, 150)

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
    renderer.setSize(window.innerWidth, window.innerHeight)

    const lights = createLights()
    lights.forEach(light => scene.add(light))

    function animate() {
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    element.appendChild(renderer.domElement)
    animate()
  })

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
      ref={divRef}
    />
  )
}

function createLights() {
  const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)

  const ambientLight = new THREE.AmbientLight(0xdc8874, 0.5)
  directionalLight.position.set(0, -350, 350)
  directionalLight.castShadow = false

  return [hemisphereLight, directionalLight, ambientLight]
}
