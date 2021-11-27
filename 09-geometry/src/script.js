import "./style.css";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
 
const canvas = document.querySelector(".webgl");

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Objects
 */
 const geometry = new THREE.BufferGeometry()

const count = 500
const positionsArray = new Float32Array(count * 3 * 3)

for (let i = 0; i < count * 3 * 3; i++) {
	positionsArray[i] = Math.random()
}
// const positionsArray = new Float32Array([
// 	0, 0, 0,
// 	0, 1, 0,
// 	1, 0, 0
// ])

// const positionsArray = new Float32Array(9)
// positionsArray[0] = 0
// positionsArray[1] = 0
// positionsArray[2] = 0

// positionsArray[3] = 0
// positionsArray[4] = 1
// positionsArray[5] = 0

// positionsArray[6] = 1
// positionsArray[7] = 0
// positionsArray[8] = 0

const positonsAttribute = new THREE.BufferAttribute(positionsArray, 3)

geometry.setAttribute('position', positonsAttribute)
// const vertex = []
// for (let i = 0; i < 50; i++) {
// 	for (let j = 0; j < 3; j++) {
// 		vertex.push(new THREE.Vector3(
// 			(Math.random() - 0.5) * 4,
// 			(Math.random() - 0.5) * 4,
// 			(Math.random() - 0.5) * 4
// 		))
// 	}
// }

// geometry.setFromPoints(vertex)

const mesh = new THREE.Mesh(
	geometry,
	new THREE.MeshBasicMaterial({ 
		color: "red",
		wireframe: true
	 })
);

scene.add(mesh);

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;
camera.lookAt(mesh.position);
scene.add(camera);

/**
 * Controls
 */
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animations
const tick = () => {

    // update controls
    controls.update()
    
    // update renderer
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();