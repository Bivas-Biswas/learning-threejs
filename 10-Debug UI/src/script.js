import "./style.css";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'
import gsap from 'gsap'

/**
 * Debug UI
 */
const gui = new dat.GUI({closed: true, width: 400})

const parameters = {
	color: 0xff0000,
	spin: ()=>{
		gsap.to(mesh.rotation, {duration: 1, y: mesh.rotation.y + 10})
	}
}

gui
	.addColor(parameters, 'color')
	.onChange(()=>{
		material.color.set(parameters.color)
	})

gui
	.add(parameters,'spin')

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
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: parameters.color })

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Debug
// gui.add(mesh.position, 'x', -3, 3, 0.01)
gui
	.add(mesh.position, 'x')
	.min(-3)
	.max(3)
	.step(0.01)
	.name('elevationX')

gui
	.add(mesh, 'visible')

gui
	.add(material, 'wireframe')
/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
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