import "./style.css";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
 
/**
 * Cursor
 */
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event)=>{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = -(event.clientY / sizes.height - 0.5)
})

const canvas = document.querySelector(".webgl");

const sizes = {
	width: 800,
	height: 600,
};

const scene = new THREE.Scene();

const mesh = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
	new THREE.MeshBasicMaterial({ color: "red" })
);

scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(
//     -1 * aspectRatio, 
//     1 * aspectRatio, 
//     1, 
//     -1, 
//     0.1, 
//     100
//     )

// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

// controls
const controls = new OrbitControls(camera, canvas)
// controls.target.y = 2
// controls.update()
controls.enableDamping = true

const renderer = new THREE.WebGLRenderer({
	canvas,
});

renderer.setSize(sizes.width, sizes.height);

// Clock
const clock = new THREE.Clock()

// Animations
const tick = () => {
	const elapsedTime = clock.getElapsedTime()
	
    // mesh.rotation.y = elapsedTime
    // Update camera
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = cursor.y * 5
    // camera.lookAt(mesh.position)

    // update controls
    controls.update()

	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();