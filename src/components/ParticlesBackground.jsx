// src/components/ParticlesBackground.jsx
import { useEffect } from "react";
import * as THREE from "three";

const ParticlesBackground = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);

    const container = document.getElementById("bg-canvas");
    container.appendChild(renderer.domElement);

    const particleCount = 5000;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x4a8fe7,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 5;

    const mouse = { x: 0, y: 0 };
    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(event.clientY / window.innerHeight - 0.5) * 2;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      const positions = particlesMesh.geometry.attributes.position.array;
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += mouse.x * 0.01;
        positions[i + 1] += mouse.y * 0.01;
        if (Math.abs(positions[i]) > 5) positions[i] = (Math.random() - 0.5) * 5;
        if (Math.abs(positions[i + 1]) > 5) positions[i + 1] = (Math.random() - 0.5) * 5;
      }
      particlesMesh.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="bg-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ParticlesBackground;
