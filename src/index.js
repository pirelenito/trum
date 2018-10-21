import * as THREE from 'three'
import './index.css'
import createTrack from './renderer/createTrack'
import createLights from './renderer/createLights'

const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0xf7d9aa, 100, 950)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const lights = createLights()
lights.forEach(light => scene.add(light))

const track = createTrack(['c', '-', 'c', '-', 'c', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'])
scene.add(track)

camera.position.z = 10
camera.position.y = -15
camera.rotation.x = 1.5

console.log(scene, camera)

function animate() {
  track.position.y -= 0.1
  // track.rotation.x -= 0.01

  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
