import * as THREE from 'three'

function createNote(type, index) {
  const geometry = new THREE.BoxGeometry(1.5, 0.7, 0.2, 1, 1, 1)
  const material = new THREE.MeshPhongMaterial({
    color: type === '-' ? 0xffffff : 0xf7a59c,
    shading: THREE.FlatShading,
  })

  const note = new THREE.Mesh(geometry, material)

  note.position.y = index * 10

  return note
}

export default function createTrack(notes) {
  const group = new THREE.Group()
  notes.map(createNote).forEach(note => group.add(note))

  return group
}
