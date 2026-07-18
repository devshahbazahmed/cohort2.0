import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene

const scene = new THREE.Scene();

// Camera

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
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

renderer.setSize(window.innerWidth, window.innerHeight);

const animate = () => {
  cube.rotation.y += 0.09;

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
};

animate();
