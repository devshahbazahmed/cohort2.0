import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Scene

const scene = new THREE.Scene();

const clock = new THREE.Clock();

// Camera

const camera = new THREE.PerspectiveCamera(
  75,
  size.width / size.height,
  0.01,
  100
);

camera.position.z = 5;

// Mesh

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});

const cube = new THREE.Mesh(geometry, material);

// cube.position.set(-1.5, -2, -1.4);
cube.position.x = -1.5;
cube.scale.x = 2;

cube.rotation.x = Math.PI / 10;

scene.add(cube);

// Canvas

const canvas = document.querySelector('canvas');
if (!canvas) {
  throw new Error('Canvas element was not found');
}

// Renderer

const renderer = new THREE.WebGLRenderer({
  canvas,
});

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;

renderer.setSize(size.width, size.height);

window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  renderer.setSize(size.width, size.height);
});

const animate = () => {
  const delta = clock.getElapsedTime();
  cube.rotation.y = delta;

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
};

animate();
