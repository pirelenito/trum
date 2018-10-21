import * as THREE from 'three'
import createTrack from './createTrack'
import createFrets from './createFrets'

export default function createSong(tracks) {
  const group = new THREE.Group()

  tracks.forEach((track, index) => {
    const mesh = createTrack(track)
    mesh.position.x = index * 5
    group.add(mesh)
  })

  const frets = createFrets(tracks)
  frets.position.x = 2 * 5
  group.add(frets)

  group.position.x = -2 * 5

  return group
}
