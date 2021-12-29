import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const canvas = document.querySelector(".webgl");

/**
 * Textures
 */
// Method 01

// const image = new Image()
// const textures = new THREE.Texture(image)

// image.onload = () => {
// 	textures.needsUpdate = true
// }

// image.src = '/textures/door.jpg'

// Method 02
const loadingManager = new THREE.LoadingManager()

loadingManager.onStart = () =>{
	console.log('onStart');
}

loadingManager.onLoad = () =>{
	console.log('onLoad');
}

loadingManager.onProgress = () =>{
	console.log('onProgress');
}

const textureLoader = new THREE.TextureLoader(loadingManager);
const colorTextures = textureLoader.load("/textures/door/color.jpg");
const alphaTextures = textureLoader.load("/textures/door/alpha.jpg");
const heightTextures = textureLoader.load("/textures/door/height.jpg");
const normalTextures = textureLoader.load("/textures/door/normal.jpg");
const ambientOcclusionTextures = textureLoader.load("/textures/door/ambientOcclusion.jpg");
const metalnessTextures = textureLoader.load("/textures/door/metalness.jpg");
const roughnessTextures = textureLoader.load("/textures/door/roughness.jpg");

// colorTextures.repeat.x = 2
// colorTextures.repeat.y = 3
// colorTextures.wrapS = THREE.MirroredRepeatWrapping
// colorTextures.wrapT = THREE.MirroredRepeatWrapping

// colorTextures.offset.x = 0.5
// colorTextures.offset.y = 0.5

// colorTextures.rotation = Math.PI / 4
// colorTextures.center.x  = 0.5
// colorTextures.center.y  = 0.5

 colorTextures.minFilter = THREE.NearestFilter
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

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ map: colorTextures });

const mesh = new THREE.Mesh(geometry, material);

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
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animations
const tick = () => {
	// update controls
	controls.update();

	// update renderer
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();
