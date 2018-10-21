import * as THREE from 'three'
import { NOTE_SPACING } from './constants'
import { findInstrumentBySymbol } from '../instruments'

export default function createTrack({ symbol, notes }) {
  const group = new THREE.Group()
  notes
    .map((code, index) => [code, index])
    .filter(([code]) => code !== '-')
    .map(([code, index]) => {
      const instrument = findInstrumentBySymbol(symbol)

      const geometry = new THREE.BoxGeometry(1.5, 0.7, 0.2, 1, 1, 1)
      const material = new THREE.MeshPhongMaterial({
        color: instrument.color,
        shading: THREE.FlatShading,
      })

      const note = new THREE.Mesh(geometry, material)

      note.position.y = index * NOTE_SPACING

      return note
    })
    .forEach(note => group.add(note))

  return group
}
