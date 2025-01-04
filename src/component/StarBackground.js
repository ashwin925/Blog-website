'use client'

import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const shootingStars = [];

    for (let i = 0; i < 1000; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        radius: Math.random() * 1.5
      });
    }

    function createShootingStar() {
      return {
        x: Math.random() * canvas.width,
        y: 0,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 10 + 5,
        opacity: 1
      };
    }

    let mouseX = 0;
    let mouseY = 0;

    canvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animate stars with parallax effect
      stars.forEach(star => {
        const x = star.x - (mouseX - canvas.width / 2) * star.z / 1000;
        const y = star.y - (mouseY - canvas.height / 2) * star.z / 1000;

        const twinkle = Math.random() > 0.99;
        ctx.fillStyle = twinkle ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.z -= 0.1;
        if (star.z <= 0) {
          star.z = canvas.width;
        }
      });

      // Animate shooting stars
      shootingStars.forEach((star, index) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y + star.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        star.x += star.speed;
        star.y += star.speed;
        star.opacity -= 0.02;

        if (star.opacity <= 0) {
          shootingStars.splice(index, 1);
        }
      });

      if (Math.random() < 0.01 && shootingStars.length < 3) {
        shootingStars.push(createShootingStar());
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

export default StarBackground;

