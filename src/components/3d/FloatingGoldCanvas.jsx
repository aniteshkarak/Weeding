import React, { useEffect, useRef } from 'react';

export default function FloatingGoldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle count scaled for performance
    const count = Math.min(38, Math.floor(width / 35));
    const particles = [];

    const goldColors = [
      'rgba(212, 190, 141, 0.45)',
      'rgba(245, 232, 199, 0.55)',
      'rgba(182, 154, 101, 0.35)',
      'rgba(229, 197, 120, 0.5)',
      'rgba(255, 244, 216, 0.4)'
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.45 - 0.15,
        opacity: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
        isPetal: Math.random() > 0.7,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.8
      });
    }

    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min(32, time - lastTime) / 16.67;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < count; i++) {
        const p = particles[i];

        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.pulsePhase += p.pulseSpeed * dt;

        // Wrap around screen
        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        const currentOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulsePhase));

        ctx.save();
        ctx.translate(p.x, p.y);

        if (p.isPetal) {
          p.rotation += p.rotationSpeed * dt;
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentOpacity;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.radius * 2, p.radius, Math.PI / 4, 0, 2 * Math.PI);
          ctx.fill();
        } else {
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentOpacity;
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fill();

          // Subtle glow on larger particles
          if (p.radius > 2.0) {
            ctx.shadowColor = 'rgba(212, 190, 141, 0.4)';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(0, 0, p.radius * 0.6, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}
