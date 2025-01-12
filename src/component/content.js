import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import '../App.css';

function SpaceBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Star field
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1, transparent: true });

    const starsVertices = new Float32Array(15000 * 3);
    for (let i = 0; i < 15000 * 3; i += 3) {
      starsVertices[i] = (Math.random() - 0.5) * 2000;
      starsVertices[i + 1] = (Math.random() - 0.5) * 2000;
      starsVertices[i + 2] = -Math.random() * 2000;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsVertices, 3));
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Nebula
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        varying vec2 vUv;
        
        float noise(vec3 p) {
          vec3 i = floor(p);
          vec3 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(dot(sin(i), f - vec3(0, 0, 0)),
                             dot(sin(i + vec3(1, 0, 0)), f - vec3(1, 0, 0)), f.x),
                         mix(dot(sin(i + vec3(0, 1, 0)), f - vec3(0, 1, 0)),
                             dot(sin(i + vec3(1, 1, 0)), f - vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(dot(sin(i + vec3(0, 0, 1)), f - vec3(0, 0, 1)),
                             dot(sin(i + vec3(1, 0, 1)), f - vec3(1, 0, 1)), f.x),
                         mix(dot(sin(i + vec3(0, 1, 1)), f - vec3(0, 1, 1)),
                             dot(sin(i + vec3(1, 1, 1)), f - vec3(1, 1, 1)), f.x), f.y), f.z);
        }
        
        void main() {
          vec2 uv = (vUv - 0.5) * 2.0;
          vec3 color = vec3(0.0);
          
          for (float i = 1.0; i < 4.0; i++) {
            vec2 q = uv * (1.0 - 0.2 * i);
            q += vec2(q.y * 0.3, q.x * 0.2) * time * 0.1;
            float n = noise(vec3(q * 2.0, time * 0.1));
            color += vec3(0.1, 0.5, 1.0) * (n * n * n * 2.0);
          }
          
          color += vec3(0.8, 0.3, 0.2) * noise(vec3(uv * 1.5, time * 0.05)) * 0.5;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    const nebulaParticles = new Float32Array(100000 * 3);
    for (let i = 0; i < 100000 * 3; i += 3) {
      nebulaParticles[i] = (Math.random() - 0.5) * 500;
      nebulaParticles[i + 1] = (Math.random() - 0.5) * 500;
      nebulaParticles[i + 2] = (Math.random() - 0.5) * 500;
    }
    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaParticles, 3));
    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // Star Explosion
    const explosionGeometry = new THREE.BufferGeometry();
    const explosionMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0xffaa00) }
      },
      vertexShader: `
        uniform float time;
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec3 pos = position;
          float explodeTime = mod(time + position.z * 0.1, 3.0);
          float scale = min(explodeTime, 1.0);
          pos *= scale;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z) * scale;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying vec3 vColor;
        void main() {
          if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
          gl_FragColor = vec4(color * vColor, 1.0);
        }
      `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true
    });

    const explosionParticles = new Float32Array(10000 * 3);
    const explosionSizes = new Float32Array(10000);
    for (let i = 0; i < 10000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      const r = Math.random() * 50;
      explosionParticles[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      explosionParticles[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      explosionParticles[i * 3 + 2] = r * Math.cos(theta);
      explosionSizes[i] = Math.random() * 2 + 0.5;
    }

    explosionGeometry.setAttribute('position', new THREE.BufferAttribute(explosionParticles, 3));
    explosionGeometry.setAttribute('size', new THREE.BufferAttribute(explosionSizes, 1));
    const starExplosion = new THREE.Points(explosionGeometry, explosionMaterial);
    starExplosion.position.set(-100, 50, -150);
    scene.add(starExplosion);

    // Post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    composer.addPass(bloomPass);

    camera.position.z = 5;

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      starField.rotation.y += 0.0002;
      nebula.rotation.z += 0.0001;
      nebulaMaterial.uniforms.time.value = elapsedTime;
      explosionMaterial.uniforms.time.value = elapsedTime;
      starExplosion.rotation.y += 0.005;

      composer.render();
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      nebulaMaterial.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="space-background" />;
}

function Header() {
  return (
    <div>
      <h1 className="title">Space Blog</h1>
      <button className="home-button absolute">Home</button>
    </div>
  );
}

function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <h2 className="blog-title">{post.title}</h2>
      <p className="blog-excerpt">{post.excerpt}</p>
      <button className="read-more">Read More</button>
    </div>
  );
}

function Content() {
  const blogPosts = [
    { id: 1, title: 'Exploring the Cosmos', excerpt: 'Journey through the vastness of space...' },
    { id: 2, title: 'The Mystery of Black Holes', excerpt: 'Unraveling the secrets of these cosmic giants...' },
    { id: 3, title: 'Life on Mars?', excerpt: 'Examining the possibility of extraterrestrial life...' },
  ];

  return (
    <div className="content">
      <SpaceBackground />
      <div className="blogcon">
        <Header />
        <main>
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default Content;

