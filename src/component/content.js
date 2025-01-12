import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import '../App.css';

function SpaceBackground() {
  // ... (SpaceBackground component code remains unchanged)
}

function Header() {
  return (
    <header className="header">
      <h1 className="title">Space Blog</h1>
      <button className="home-button">Home</button>
    </header>
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
    { id: 4, title: 'The Birth of Stars', excerpt: 'Understanding the process of star formation...' },
    { id: 5, title: 'Galaxies: Cities of Stars', excerpt: 'Exploring the diverse structures of galaxies...' },
    { id: 6, title: 'The Big Bang Theory', excerpt: 'Delving into the origin of our universe...' },
    { id: 7, title: 'Exoplanets: New Worlds', excerpt: 'Discovering planets beyond our solar system...' },
    { id: 8, title: 'Dark Matter and Dark Energy', excerpt: 'Unraveling the mysteries of the invisible universe...' },
    { id: 9, title: 'Space Exploration: Past and Future', excerpt: 'From the first steps on the Moon to Mars missions...' },
    { id: 10, title: 'The Death of Stars', excerpt: 'Supernovas, neutron stars, and the lifecycle of celestial bodies...' },
  ];

  return (
    <div className="content">
      <SpaceBackground />
      <div className="blog-container">
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
