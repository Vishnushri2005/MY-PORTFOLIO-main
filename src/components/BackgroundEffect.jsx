import React, { useEffect, useRef, useCallback } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  const initParticles = useCallback((width, height) => {
    // QA Test Pipeline Nodes
    const count = Math.min(Math.floor((width * height) / 14000), 90);
    const particles = [];
    for (let i = 0; i < count; i++) {
      // 0: Cyan (functional/test), 1: Tech Blue (core/engine), 2: Emerald (verified/pass)
      const type = Math.floor(Math.random() * 3);
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 1,
        type,
        opacity: Math.random() * 0.5 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const getColor = (type, alpha) => {
      if (type === 0) return `rgba(0, 238, 255, ${alpha})`; // Cyan
      if (type === 1) return `rgba(56, 189, 248, ${alpha})`; // Sky blue
      return `rgba(16, 185, 129, ${alpha})`; // QA Verified Emerald
    };

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const connectionDistance = 140;
      const mouseInfluence = 180;

      // Update & draw QA test nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Soft mouse influence
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseInfluence && dist > 0) {
          const force = (mouseInfluence - dist) / mouseInfluence;
          p.vx += (dx / dist) * force * 0.12;
          p.vy += (dy / dist) * force * 0.12;
        }

        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.35 + 0.65;
        const alpha = p.opacity * pulse;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = getColor(p.type, alpha);
        ctx.shadowColor = getColor(p.type, alpha * 0.7);
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections between test nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < connectionDistance) {
            const lineAlpha = (1 - cdist / connectionDistance) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();

            // Occasional test packet pulse traversing the line
            if ((i + j + Math.floor(time * 0.05)) % 45 === 0) {
              const progress = ((time * 0.02) % 1);
              const px = p.x + (p2.x - p.x) * progress;
              const py = p.y + (p2.y - p.y) * progress;
              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(0, 238, 255, 0.8)';
              ctx.fill();
            }
          }
        }
      }

      // Draw mouse connection lines to nearby test nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseInfluence) {
          const alpha = (1 - dist / mouseInfluence) * 0.25;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(0, 238, 255, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initParticles]);

  return (
    <div className="bg-effect-wrapper" aria-hidden="true">
      {/* Canvas particle / test node layer */}
      <canvas ref={canvasRef} className="bg-particles-canvas" />

      {/* Corporate tech ambient orbs (Deep Slate, Cyan & QA Emerald) */}
      <div className="bg-aurora-layer">
        <div className="aurora-orb qa-orb-1"></div>
        <div className="aurora-orb qa-orb-2"></div>
        <div className="aurora-orb qa-orb-3"></div>
        <div className="aurora-orb qa-orb-4"></div>
      </div>

      {/* Engineering Blueprint Grid */}
      <div className="bg-grid-overlay"></div>

      {/* Edge vignette for professional depth */}
      <div className="bg-vignette"></div>
    </div>
  );
};

export default BackgroundEffect;
