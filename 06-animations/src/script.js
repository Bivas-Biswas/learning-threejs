import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: "blue" });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
	width: 800,
	height: 600,
};

const carmera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
carmera.position.z = 3;
scene.add(carmera);

const renderer = new THREE.WebGLRenderer({
	canvas,
});

renderer.setSize(sizes.width, sizes.height);

// Clock
// const clock = new THREE.Clock()

gsap.to(mesh.position, { x: 2, duration: 1, delay: 1})
gsap.to(mesh.position, { x: 0, duration: 1, delay: 2})

// Animations
const tick = () => {

    // const elapsedTime = clock.getElapsedTime()
    // carmera.position.y = Math.sin(elapsedTime)
    // carmera.position.x = Math.cos(elapsedTime)
    // carmera.lookAt(mesh.position)

    renderer.render(scene, carmera);
    window.requestAnimationFrame(tick)
};

tick();

/**
 * for create same fps animtions 
 *  1.  const currentTime = Date.now()
        const deltaTime = currentTime - time
        time = currentTime
        mesh.rotation.y += 0.001 * deltaTime
    2. inbuild Clock() function 
    const clock = new THREE.Clock()
        const elapsedTime = clock.getElapsedTime()
        carmera.position.y = Math.sin(elapsedTime)
        carmera.position.x = Math.cos(elapsedTime)
        carmera.lookAt(mesh.position)
 */