import * as THREE from 'three'

function createNote(type, index) {
  const geometry = new THREE.BoxGeometry(1.5, 0.7, 0.5)
  const material = new THREE.MeshBasicMaterial({ color: type === '-' ? 0xffffff : 0xf7a59c })
  const note = new THREE.Mesh(geometry, material)

  note.position.y = index * 1

  return note
}

export default function createTrack(notes) {
  const group = new THREE.Group()
  notes.map(createNote).forEach(note => group.add(note))

  return group
}
