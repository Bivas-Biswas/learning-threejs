import "./style.css"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as dat from "dat.gui"

/**
 * Debug
 */
const gui = new dat.GUI()

/**
 * Textures
 */
const textureLoder = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

const doorColorTexture = textureLoder.load("/textures/door/color.jpg")
const doorAlphaTexture = textureLoder.load("/textures/door/alpha.jpg")
const doorAmbientOcclusionTexture = textureLoder.load(
	"/textures/door/ambientOcclusion.jpg"
)
const doorHightTexture = textureLoder.load("/textures/door/height.jpg")
const doorNormalTexture = textureLoder.load("/textures/door/normal.jpg")
const doorMetalnessTexture = textureLoder.load("/textures/door/metalness.jpg")
const doorRoughnessTexture = textureLoder.load("/textures/door/roughness.jpg")
const matcapTexture = textureLoder.load("/textures/matcaps/8.png")
const gradientTexture = textureLoder.load("/textures/gradients/3.jpg")
gradientTexture.minFilter = THREE.NearestFilter
gradientTexture.magFilter = THREE.NearestFilter
gradientTexture.generateMipmaps = false

const eviromentMapTexture = cubeTextureLoader.load([
	'/textures/environmentMaps/3/px.jpg',
	'/textures/environmentMaps/3/nx.jpg',
	'/textures/environmentMaps/3/py.jpg',
	'/textures/environmentMaps/3/ny.jpg',
	'/textures/environmentMaps/3/pz.jpg',
	'/textures/environmentMaps/3/nz.jpg'
])

/**
 * Base
 */
// Canvas
const canvas = document.querySelector(".webgl")

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Materials
 */

// Type - 1
// const material = new THREE.MeshBasicMaterial()
// material.map = doorColorTexture
// material.color = new THREE.Color('green')
// material.wireframe = true
// material.opacity = 0.5
// material.transparent = true
// material.alphaMap = doorAlphaTexture
// material.side = THREE.DoubleSide

// Type - 2
// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

// Type - 3
// const material = new THREE.MeshMatcapMaterial()
// material.matcap = matcapTexture

// Type - 4
// const material = new THREE.MeshDepthMaterial()

// Type - 5
// const material = new THREE.MeshLambertMaterial()

// Type - 6
// const material = new THREE.MeshPhongMaterial()
// material.shininess = 100
// material.specular = new THREE.Color('red')

// Type - 7
// const material = new THREE.MeshToonMaterial()
// material.gradientMap = gradientTexture

// Type - 8
// const material = new THREE.MeshStandardMaterial()
// material.metalness = 0
// material.roughness = 1
// material.map = doorColorTexture
// material.aoMap = doorAmbientOcclusionTexture
// material.aoMapIntensity = 1
// material.displacementMap = doorHightTexture
// material.wireframe = true
// material.displacementScale = 0.05
// material.metalnessMap = doorMetalnessTexture
// material.roughnessMap = doorRoughnessTexture
// material.normalMap = doorNormalTexture
// material.normalScale.set(0.5, 0.5)
// material.transparent = true
// material.alphaMap = doorAlphaTexture

// evironmentMap
const material = new THREE.MeshStandardMaterial()
material.metalness = 0.7
material.roughness = 0.2
material.envMap = eviromentMapTexture

gui.add(material, "metalness").min(0).max(1).step(0.0001)
gui.add(material, "roughness").min(0).max(1).step(0.0001)
gui.add(material, "aoMapIntensity").min(0).max(10).step(0.0001)
gui.add(material, "displacementScale").min(0).max(10).step(0.0001)

/**
 * Objects
 */

const sphere = new THREE.Mesh(
	new THREE.SphereBufferGeometry(0.5, 64, 64),
	material
)

sphere.geometry.setAttribute(
	"uv2",
	new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2)
)

sphere.position.x = -1.5

const plane = new THREE.Mesh(
	new THREE.PlaneBufferGeometry(1, 1, 100, 100), material)

plane.geometry.setAttribute(
	"uv2",
	new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
)

const torus = new THREE.Mesh(
	new THREE.TorusBufferGeometry(0.3, 0.2, 64, 128),
	material
)

torus.geometry.setAttribute(
	"uv2",
	new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2)
)

torus.position.x = 1.5
scene.add(sphere, plane, torus)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 1, 100)
pointLight.position.set(2, 3, 4)
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 2
camera.position.y = 2
camera.position.z = 2
scene.add(camera)

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
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const clock = new THREE.Clock()
// Animations
const tick = () => {
	const elapsedTime = clock.getElapsedTime()

	// update objects
	// sphere.rotation.y = 0.001 + elapsedTime
	// plane.rotation.y = 0.001 + elapsedTime
	// torus.rotation.y = 0.001 + elapsedTime

	// sphere.rotation.x = 0.15 + elapsedTime
	// plane.rotation.x = 0.15 + elapsedTime
	// torus.rotation.x = 0.15 + elapsedTime
	// update controls
	controls.update()

	// update renderer
	renderer.render(scene, camera)
	window.requestAnimationFrame(tick)
}

tick()
