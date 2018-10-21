import * as THREE from 'three'
import { NOTE_SPACING } from './constants'

function createNote(index) {
  const geometry = new THREE.BoxGeometry(1.5, 0.7, 0.2, 1, 1, 1)
  const material = new THREE.MeshPhongMaterial({
    color: 0xf7a59c,
    shading: THREE.FlatShading,
  })

  const note = new THREE.Mesh(geometry, material)

  note.position.y = index * NOTE_SPACING

  return note
}

export default function createTrack(notes) {
  const group = new THREE.Group()
  notes
    .map((type, index) => [type, index])
    .filter(([type]) => type !== '-')
    .map(([type, index]) => index)
    .map(createNote)
    .forEach(note => group.add(note))

  return group
}
