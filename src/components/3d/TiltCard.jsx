import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  glare = true,
  depth = 30,
  onClick
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates normalized from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery smooth 60fps physics
  const springConfig = { damping: 20, stiffness: 260, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotations based on mouse position
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Glare / specular shine position (0% to 100%)
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], [10, 90]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], [10, 90]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1200px',
      }}
      className={`relative transform-gpu transition-shadow duration-300 ${className}`}
    >
      {/* Card Content with 3D Depth Layer */}
      <div 
        style={{ transform: isHovered ? `translateZ(${depth}px)` : 'translateZ(0px)', transition: 'transform 0.3s ease' }}
        className="w-full h-full transform-style-3d"
      >
        {children}
      </div>

      {/* Dynamic Specular Gold Glare Layer */}
      {glare && (
        <motion.div
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255, 242, 209, 0.18) 0%, transparent 60%)`
            ),
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          className="absolute inset-0 rounded-inherit pointer-events-none z-30"
        />
      )}
    </motion.div>
  );
}