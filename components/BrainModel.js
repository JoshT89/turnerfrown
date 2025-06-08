'use client';

import { useEffect, useRef } from 'react';

export default function BrainModel() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Check if we're in the browser before importing Three.js
    if (typeof window === 'undefined') return;

    let THREE;
    let scene, camera, renderer, brain, synapses;
    
    const initThreeJS = async () => {
      try {
        // Dynamic import of Three.js to avoid SSR issues
        THREE = await import('three');
        
        // Scene setup
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        
        // Camera setup
        camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 5;
        
        // Renderer setup
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(400, 400);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        if (mountRef.current && !mountRef.current.firstChild) {
          mountRef.current.appendChild(renderer.domElement);
        }
        
        // Create brain-like geometry
        const brainGeometry = new THREE.SphereGeometry(1.5, 32, 32);
        
        // Create materials
        const brainMaterial = new THREE.MeshPhongMaterial({
          color: 0xff69b4,
          shininess: 30,
          transparent: true,
          opacity: 0.8
        });
        
        brain = new THREE.Mesh(brainGeometry, brainMaterial);
        brain.castShadow = true;
        brain.receiveShadow = true;
        scene.add(brain);
        
        // Add neural connections (lines)
        const connectionsMaterial = new THREE.LineBasicMaterial({
          color: 0x00ffff,
          transparent: true,
          opacity: 0.6
        });
        
        // Create random neural connections
        for (let i = 0; i < 50; i++) {
          const points = [];
          const start = new THREE.Vector3(
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3
          );
          const end = new THREE.Vector3(
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3
          );
          
          points.push(start, end);
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, connectionsMaterial);
          scene.add(line);
        }
        
        // Add synapses (small spheres)
        const synapseGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const synapseMaterial = new THREE.MeshBasicMaterial({
          color: 0xffff00,
          transparent: true,
          opacity: 0.8
        });
        
        synapses = [];
        for (let i = 0; i < 30; i++) {
          const synapse = new THREE.Mesh(synapseGeometry, synapseMaterial);
          synapse.position.set(
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4
          );
          synapses.push(synapse);
          scene.add(synapse);
        }
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        
        const pointLight = new THREE.PointLight(0x00ffff, 0.5, 100);
        pointLight.position.set(0, 0, 10);
        scene.add(pointLight);
        
        // Animation
        const animate = () => {
          if (!scene || !renderer || !camera) return;
          
          animationRef.current = requestAnimationFrame(animate);
          
          // Rotate the brain
          if (brain) {
            brain.rotation.x += 0.005;
            brain.rotation.y += 0.01;
          }
          
          // Animate synapses
          if (synapses) {
            synapses.forEach((synapse, index) => {
              if (synapse && synapse.material) {
                synapse.material.opacity = 0.3 + Math.sin(Date.now() * 0.01 + index) * 0.5;
                synapse.scale.setScalar(1 + Math.sin(Date.now() * 0.01 + index) * 0.3);
              }
            });
          }
          
          // Pulse the brain material
          if (brain && brain.material) {
            brain.material.opacity = 0.6 + Math.sin(Date.now() * 0.005) * 0.2;
          }
          
          renderer.render(scene, camera);
        };
        
        animate();
        sceneRef.current = { scene, camera, renderer, brain, synapses };
      } catch (error) {
        console.error('Error initializing Three.js:', error);
      }
    };
    
    initThreeJS();
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (sceneRef.current) {
        const { scene, renderer } = sceneRef.current;
        if (scene) {
          // Dispose of all objects in the scene
          scene.traverse((object) => {
            if (object.geometry) {
              object.geometry.dispose();
            }
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach(material => material.dispose());
              } else {
                object.material.dispose();
              }
            }
          });
          scene.clear();
        }
        if (renderer) {
          renderer.dispose();
        }
      }
      if (mountRef.current && mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        <div 
          ref={mountRef} 
          className="rounded-lg overflow-hidden shadow-2xl border-4 border-purple-500/30"
          style={{ width: '400px', height: '400px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent pointer-events-none rounded-lg"></div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-semibold">
          Your Brain on Success
        </div>
      </div>
    </div>
  );
}