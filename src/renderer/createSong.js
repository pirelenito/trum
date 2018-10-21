import * as THREE from 'three'
import createTrack from './createTrack'

export default function createSong(tracks) {
  const group = new THREE.Group()

  tracks.forEach((track, index) => {
    const mesh = createTrack(track)
    mesh.position.x = index * 5
    group.add(mesh)
  })

  group.position.x = -2 * 5

  return group
}
