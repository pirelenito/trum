import * as THREE from 'three'
import { TRACK_SPACING, NOTE_SPACING } from './constants'

export default function createFrets(tracks) {
  const group = new THREE.Group()
  const height = 0.1

  tracks[0]
    .map((_, index) => {
      const width = tracks.length * TRACK_SPACING
      const geometry = new THREE.BoxGeometry(width, 0.1, height, 1, 1, 1)
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shading: THREE.FlatShading,
      })

      const fret = new THREE.Mesh(geometry, material)

      fret.position.z = -height
      fret.position.y = index * NOTE_SPACING

      return fret
    })
    .forEach(fret => group.add(fret))

  return group
}
