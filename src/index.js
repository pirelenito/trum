import * as THREE from 'three'
import './index.css'
import createSong from './renderer/createSong'
import createLights from './renderer/createLights'
import createHitArea from './renderer/createHitArea'
import parseTabs from './parseTabs'
import listenMidiInput from './inputs/listenMidiInput'
import { findInstrumentByMidiNote } from './parseTabs/instruments'

const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0xf7d9aa, 100, 150)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const lights = createLights()
lights.forEach(light => scene.add(light))

const tablature = `
C  |X---------------|----------------|X---------------|----------------|
R  |----X---X---X---|X---X---X---X---|----X---X---X---|X---X-------X---|
S  |----o-------o---|----o-------o---|----o-------o---|----o-o-----o---|
t  |----------------|----------------|----------------|-------o--------|
B  |o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|`

const song = parseTabs(tablature)

const songMesh = createSong(song)
scene.add(songMesh)

const { group: hitArea, instruments: hitAreaInstruments } = createHitArea(song)
scene.add(hitArea)

camera.position.z = 10
camera.position.y = -15
camera.rotation.x = 1.5

const buttons = song.instruments.map(({ instrumentId }) => ({ instrumentId, pressed: false }))

listenMidiInput(({ note, intensity }) => {
  const instrument = findInstrumentByMidiNote(note)

  if (instrument) {
    const button = buttons.find(({ instrumentId }) => instrumentId === instrument.id)
    button.pressed = intensity > 0
  }
})

function animate() {
  buttons.forEach(({ instrumentId: buttonInstrumentId, pressed }) => {
    const hitAreaInstrument = hitAreaInstruments.find(({ instrumentId }) => instrumentId === buttonInstrumentId)

    hitAreaInstrument.mesh.position.z = pressed ? -0.4 : -0.2
  })

  songMesh.position.y -= 0.4

  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
