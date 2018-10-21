import * as THREE from 'three'
import { TRACK_SPACING, NOTE_SPACING } from './constants'

export default function createFrets(song) {
  const group = new THREE.Group()
  const height = 0.1

  for (var index = 0; index < song.length; index++) {
    const width = song.instruments.length * TRACK_SPACING
    const geometry = new THREE.BoxGeometry(width, 0.1, height, 1, 1, 1)
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shading: THREE.FlatShading,
    })

    const fret = new THREE.Mesh(geometry, material)

    fret.position.z = -height
    fret.position.y = index * NOTE_SPACING

    group.add(fret)
  }

  return group
}
