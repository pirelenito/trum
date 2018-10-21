import * as THREE from 'three'
import { TRACK_SPACING } from './constants'
import createTrack from './createTrack'
import createFrets from './createFrets'

export default function createSong(song) {
  const group = new THREE.Group()
  const offset = ((song.instruments.length - 1) * TRACK_SPACING) / 2

  song.instruments.forEach((track, index) => {
    const mesh = createTrack(track)
    mesh.position.x = index * TRACK_SPACING - offset
    group.add(mesh)
  })

  const frets = createFrets(song)
  group.add(frets)

  return group
}
