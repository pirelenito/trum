import * as THREE from 'three'
import './index.css'
import createTrack from './renderer/createTrack'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const track = createTrack(['c', '-', 'c', '-', 'c', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'])
scene.add(track)

camera.position.z = 10
camera.position.y = -15
camera.rotation.x = 1.5

console.log(scene, camera)

function animate() {
  // track.position.y -= 0.1

  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
