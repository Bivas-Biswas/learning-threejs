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

window.addEventListener('resize', ()=>{
    // update the sizes
    sizes.width = window.innerWidth,
    sizes.height = window.innerHeight

    /** 
     * update camera
     * the the aspect ration also changes on viewport resizing
     * */ 
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // update renderer
    renderer.setSize(sizes.width, sizes.height);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick', ()=>{

    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    
    if(fullscreenElement){
        if(canvas.requestFullscreen){
            canvas.requestFullscreen(canvas)
        }
        else if(canvas.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen()
        }
    }else{
        if(document.exitFullscreen){
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen()
        }
    }
})

const scene = new THREE.Scene();

const mesh = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
	new THREE.MeshBasicMaterial({ color: "red" })
);

scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.enabled = false

const renderer = new THREE.WebGLRenderer({
	canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animations
const tick = () => {

    // update controls
    controls.update()

	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();