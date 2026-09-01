import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  speed: number;
  angle: number;
  magnetism: number;
  dragFactor: number;
}

interface MicroDot {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
  depth: number;
}

export const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [targetPos, setTargetPos] = useState({ x: -1000, y: -1000 });
  const [isPointerActive, setIsPointerActive] = useState(false);

  // Parallax offsets (smoothly lerped)
  const offsetRef = useRef({ x: 0, y: 0 });
  const targetOffsetRef = useRef({ x: 0, y: 0 });

  // Mouse physical interaction tracking
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    prevX: -1000,
    prevY: -1000,
    vx: 0,
    vy: 0,
    radius: 190,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 1. Initialize High-Density Primary Cyber Nodes
    const calculateParticleCount = () => {
      const area = width * height;
      if (width < 640) return Math.min(Math.floor(area / 9000), 80);
      if (width < 1024) return Math.min(Math.floor(area / 7500), 130);
      return Math.min(Math.floor(area / 5800), 220);
    };

    let particleCount = calculateParticleCount();
    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      particleCount = calculateParticleCount();
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 2.2 + 1.2,
          alpha: Math.random() * 0.45 + 0.25,
          baseAlpha: Math.random() * 0.45 + 0.25,
          speed: Math.random() * 0.015 + 0.005,
          angle: Math.random() * Math.PI * 2,
          magnetism: Math.random() * 0.6 + 0.4,
          dragFactor: Math.random() * 0.35 + 0.25,
        });
      }
    };

    // 2. Initialize Ambient Star Dust Micro-dots
    const microDots: MicroDot[] = [];
    const initMicroDots = () => {
      microDots.length = 0;
      const count = Math.floor((width * height) / 14000);
      for (let i = 0; i < count; i++) {
        microDots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.2 + 0.6,
          alpha: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 0.2 + 0.05,
          depth: Math.random() * 1.8 + 0.4,
        });
      }
    };

    initParticles();
    initMicroDots();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
      initMicroDots();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setIsPointerActive(true);
      setTargetPos({ x: clientX, y: clientY });

      // Update physics mouse velocity
      const m = mouseRef.current;
      if (m.prevX !== -1000) {
        m.vx = (clientX - m.prevX) * 0.35;
        m.vy = (clientY - m.prevY) * 0.35;
      }
      m.prevX = clientX;
      m.prevY = clientY;
      m.x = clientX;
      m.y = clientY;
      m.active = true;

      // Normalized coordinates [-1 to 1] from center
      const normX = (clientX - width / 2) / (width / 2);
      const normY = (clientY - height / 2) / (height / 2);

      // Parallax shift target
      targetOffsetRef.current = {
        x: normX * 30,
        y: normY * 30,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.vx = 0;
      mouseRef.current.vy = 0;
      targetOffsetRef.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Main Interactive Render Loop
    const render = () => {
      // Smooth lerp parallax offsets
      offsetRef.current.x += (targetOffsetRef.current.x - offsetRef.current.x) * 0.05;
      offsetRef.current.y += (targetOffsetRef.current.y - offsetRef.current.y) * 0.05;

      // Damp mouse velocity
      mouseRef.current.vx *= 0.92;
      mouseRef.current.vy *= 0.92;

      ctx.clearRect(0, 0, width, height);

      const offsetX = offsetRef.current.x;
      const offsetY = offsetRef.current.y;
      const mouse = mouseRef.current;

      // 1. Draw Subtle Ambient Cyber Grid with Parallax
      const gridSize = 55;
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.02)';
      ctx.lineWidth = 1;
      ctx.beginPath();

      const startX = (offsetX * 0.4) % gridSize;
      const startY = (offsetY * 0.4) % gridSize;

      for (let x = startX - gridSize; x < width + gridSize; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = startY - gridSize; y < height + gridSize; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 2. Draw Floating Micro-dots (Star dust)
      for (let i = 0; i < microDots.length; i++) {
        const md = microDots[i];
        md.y -= md.speed;
        if (md.y < 0) {
          md.y = height;
          md.x = Math.random() * width;
        }

        const mdDrawX = md.x + offsetX * md.depth;
        const mdDrawY = md.y + offsetY * md.depth;

        ctx.fillStyle = `rgba(0, 255, 65, ${md.alpha})`;
        ctx.beginPath();
        ctx.arc(mdDrawX, mdDrawY, md.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Process & Draw Interactive Cyber Nodes / Connected Matrix Dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Ambient natural orbital drift
        p.angle += p.speed;
        p.baseX += Math.cos(p.angle) * 0.2 + p.vx;
        p.baseY += Math.sin(p.angle) * 0.2 + p.vy;

        // Wrap around boundaries
        if (p.baseX < -20) p.baseX = width + 20;
        if (p.baseX > width + 20) p.baseX = -20;
        if (p.baseY < -20) p.baseY = height + 20;
        if (p.baseY > height + 20) p.baseY = -20;

        // Dynamic Cursor Reaction: Moving dots along with the cursor!
        let targetX = p.baseX;
        let targetY = p.baseY;
        let currentSize = p.size;
        let currentAlpha = p.baseAlpha;

        if (mouse.active && mouse.x > 0) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const proximity = 1 - dist / mouse.radius;
            // Elastic drag in direction of cursor travel + gentle gravitation towards cursor
            const followForce = proximity * 28 * p.magnetism;
            const velocityFollowX = mouse.vx * proximity * p.dragFactor * 1.5;
            const velocityFollowY = mouse.vy * proximity * p.dragFactor * 1.5;

            targetX += (dx / (dist || 1)) * followForce + velocityFollowX;
            targetY += (dy / (dist || 1)) * followForce + velocityFollowY;

            // Highlight node when near cursor
            currentAlpha = Math.min(1.0, p.baseAlpha + proximity * 0.6);
            currentSize = p.size + proximity * 1.5;

            // Connect Laser Line directly to Cursor
            const cursorLineAlpha = proximity * 0.28;
            ctx.strokeStyle = `rgba(0, 255, 65, ${cursorLineAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Smooth physical spring to target position
        p.x += (targetX - p.x) * 0.12;
        p.y += (targetY - p.y) * 0.12;

        const drawX = p.x + offsetX * 0.3;
        const drawY = p.y + offsetY * 0.3;

        // Draw glowing particle dot
        ctx.fillStyle = `rgba(0, 255, 65, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(drawX, drawY, currentSize, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes to form cyber constellation mesh
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          const maxDist = 115;
          if (dist < maxDist) {
            let lineAlpha = (1 - dist / maxDist) * 0.12;

            // Boost connection line brightness if near cursor
            if (mouse.active) {
              const midX = (p.x + p2.x) / 2;
              const midY = (p.y + p2.y) / 2;
              const distToMouse = Math.hypot(mouse.x - midX, mouse.y - midY);
              if (distToMouse < mouse.radius) {
                lineAlpha += (1 - distToMouse / mouse.radius) * 0.22;
              }
            }

            ctx.strokeStyle = `rgba(0, 255, 65, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            ctx.lineTo(p2.x + offsetX * 0.3, p2.y + offsetY * 0.3);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth lerp for the ambient cursor aura
  useEffect(() => {
    let animId: number;
    const lerpGlow = () => {
      setMousePos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.15,
        y: prev.y + (targetPos.y - prev.y) * 0.15,
      }));
      animId = requestAnimationFrame(lerpGlow);
    };
    animId = requestAnimationFrame(lerpGlow);
    return () => cancelAnimationFrame(animId);
  }, [targetPos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Matrix Radial Dot Grid Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'radial-gradient(#00FF41 0.7px, transparent 0.7px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Dynamic Canvas with 200+ Interactive Moving Dots & Constellation Lines */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Ambient Deep Cyber Atmospheric Orbs */}
      <div
        className="absolute w-[650px] h-[650px] rounded-full bg-[#00FF41]/[0.035] blur-[150px] transition-transform duration-700 ease-out"
        style={{
          top: '5%',
          left: '8%',
          transform: `translate(${targetOffsetRef.current.x * 1.5}px, ${targetOffsetRef.current.y * 1.5}px)`,
        }}
      />
      <div
        className="absolute w-[550px] h-[550px] rounded-full bg-[#00FF41]/[0.025] blur-[140px] transition-transform duration-700 ease-out"
        style={{
          top: '48%',
          right: '5%',
          transform: `translate(${targetOffsetRef.current.x * -1.2}px, ${targetOffsetRef.current.y * -1.2}px)`,
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-white/[0.012] blur-[130px] transition-transform duration-700 ease-out"
        style={{
          bottom: '5%',
          left: '20%',
          transform: `translate(${targetOffsetRef.current.x * 0.8}px, ${targetOffsetRef.current.y * 0.8}px)`,
        }}
      />

      {/* Interactive Cursor Flashlight Glow */}
      {isPointerActive && mousePos.x > 0 && (
        <div
          className="absolute w-[420px] h-[420px] rounded-full pointer-events-none transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              'radial-gradient(circle, rgba(0, 255, 65, 0.08) 0%, rgba(0, 255, 65, 0.03) 40%, transparent 70%)',
          }}
        />
      )}

      {/* Subtle scanline overlay */}
      <div className="absolute inset-0 scanline opacity-20" />
    </div>
  );
};

