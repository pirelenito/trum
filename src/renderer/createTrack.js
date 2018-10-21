import * as THREE from 'three'
import { NOTE_SPACING } from './constants'

const colorByInstrumentId = {
  0: '#f7a59c',
  1: '#fa9846',
  2: '#5b9193',
  3: '#8ac8da',
  4: '#613846',
  5: '#8ac8da',
  6: '#8ac8da',
  7: '#fa9846',
}

export default function createTrack({ instrumentId, notes }) {
  const group = new THREE.Group()
  notes
    .map(index => {
      console.log(instrumentId, colorByInstrumentId[instrumentId])
      const color = colorByInstrumentId[instrumentId]

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
