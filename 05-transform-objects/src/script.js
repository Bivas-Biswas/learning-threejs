import './style.css'
import * as THREE from 'three'
import { RedFormat } from 'three'

// canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: "red"})
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh )

// // Postion
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1)


// // axes helper
const axesHelper = new THREE.AxesHelper(1);
scene.add( axesHelper );

// // Scale
// // mesh.scale.x = 2
// // mesh.scale.y = 0.5
// // mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

// // Rotations
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// // quaternion same as rotation

// Group object
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1, 1),
    new THREE.MeshBasicMaterial({color: 'green'})
)

group.add(cube2)
cube2.position.x = -2

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1, 1),
    new THREE.MeshBasicMaterial({color: 'blue'})
)
cube3.position.x = 2

group.position.y = 1
group.scale.y = 2
group.rotation.y =1
group.add(cube3)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGL1Renderer({
    canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

/**
 * 
 * mesh.position.lenght() - give lenght of vector
 * mesh.position.distanceTo(camera.position) - give distance between two objects
 * mesh.position.normalize() - move the object till lenght === 1
 * mesh.position.set(0.7, -0.6, 1) - set postion same time
 * 
 */