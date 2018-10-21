import * as THREE from 'three'

function createFret(_, index) {
  const geometry = new THREE.BoxGeometry(20, 0.1, 0.1, 1, 1, 1)
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading,
  })

  const note = new THREE.Mesh(geometry, material)

  note.position.z = -0.1
  note.position.y = index * 10

  return note
}

export default function createFrets(notes) {
  const group = new THREE.Group()
  notes[0].map(createFret).forEach(note => group.add(note))

  return group
}
