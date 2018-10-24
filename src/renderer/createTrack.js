import * as THREE from 'three'
import { NOTE_SPACING, COLOR_BY_INSTRUMENT_ID } from './constants'

export default function createTrack({ instrumentId, notes }) {
  const group = new THREE.Group()
  notes
    .map(index => {
      const color = COLOR_BY_INSTRUMENT_ID[instrumentId]

      const geometry = new THREE.BoxGeometry(1.5, 0.7, 0.2, 1, 1, 1)
      const material = new THREE.MeshPhongMaterial({
        color,
        shading: THREE.FlatShading,
      })

      const note = new THREE.Mesh(geometry, material)

      note.position.y = index * NOTE_SPACING

      return note
    })
    .forEach(note => group.add(note))

  return group
}
