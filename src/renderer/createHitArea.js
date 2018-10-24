import * as THREE from 'three'
import { TRACK_SPACING, COLOR_BY_INSTRUMENT_ID } from './constants'

export default function createHitArea(song) {
  const group = new THREE.Group()
  const offset = ((song.instruments.length - 1) * TRACK_SPACING) / 2

  song.instruments.forEach(({ instrumentId }, index) => {
    const color = COLOR_BY_INSTRUMENT_ID[instrumentId]

    const geometry = new THREE.BoxGeometry(2.0, 0.7, 0.2, 1, 1, 1)
    const material = new THREE.MeshPhongMaterial({
      color,
      shading: THREE.FlatShading,
    })

    const mesh = new THREE.Mesh(geometry, material)

    mesh.position.z = -0.2
    mesh.position.x = index * TRACK_SPACING - offset
    group.add(mesh)
  })

  return group
}
