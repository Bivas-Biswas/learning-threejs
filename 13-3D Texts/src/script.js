import "./style.css";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const canvas = document.querySelector(".webgl");

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("/textures/matcaps/1.png");
/**
 * Fonts
 */
const fontLoader = new THREE.FontLoader();

fontLoader.load(
	'/fonts/helvetiker_regular.typeface.json',
	(font) => {
		const textGeometry = new THREE.TextGeometry(
			'Hello Three.js', 
			{
				font: font,
				size: 0.5,
				height: 0.02,
				curveSegments: 100,
				bevelEnabled: true,
				bevelThickness: 0.03,
				bevelSize: 0.02,
				bevelOffset: 0,
				bevelSegments: 4
			}
		)
		textGeometry.center()
		// textGeometry.computeBoundingBox()
		// textGeometry.translate(
		// 	- (textGeometry.boundingBox.max.x - 0.02) * 0.5,
		// 	- (textGeometry.boundingBox.max.y - 0.02) * 0.5,
		// 	- (textGeometry.boundingBox.max.z - 0.02) * 0.5,
		// )

		// textGeometry.computeBoundingBox()
		// console.log(textGeometry.boundingBox);

		const material = new THREE.MeshMatcapMaterial(
			{matcap: matcapTexture}
		)
		// textMaterial.wireframe = true
		const text = new THREE.Mesh(textGeometry, material)
		scene.add(text)

		console.time('donuts')
		
		const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)

		for (let i = 0; i < 300; i++) {
			const donut = new THREE.Mesh(donutGeometry, material)

			donut.position.x = (Math.random() - 0.5) * 10
			donut.position.y = (Math.random() - 0.5) * 10
			donut.position.z = (Math.random() - 0.5) * 10

			donut.rotation.x = Math.random() * Math.PI
			donut.rotation.y = Math.random() * Math.PI 
			donut.rotation.z = Math.random() * Math.PI

			const scale = Math.random()
			donut.scale.set(scale, scale, scale)
			scene.add(donut)			
		}
		console.timeEnd('donuts')
	}
)


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

// Axes Helper
// const axesHelper = new THREE.AxesHelper(500)
// scene.add(axesHelper)

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set( 0, 0, 1 );
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
