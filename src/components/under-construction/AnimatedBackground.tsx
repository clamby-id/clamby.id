"use client";

import { useState, useEffect, startTransition } from "react";
import { motion } from "motion/react";

interface ParticlePosition {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface ParticleAnimation {
  x: number[];
  y: number[];
  rotate: number[];
  opacity: number[];
  scale: number[];
  duration: number;
  delay: number;
}

interface ShapePosition {
  left: number;
  top: number;
  width: number;
  height: number;
  borderRadius: number;
  rotation: number;
}

interface ShapeAnimation {
  x: number[];
  y: number[];
  rotate: number[];
  opacity: number[];
  scale: number[];
  duration: number;
  delay: number;
}

export function AnimatedBackground() {
  const [particlePositions, setParticlePositions] = useState<
    ParticlePosition[]
  >([]);
  const [particleAnimations, setParticleAnimations] = useState<
    ParticleAnimation[]
  >([]);
  const [shapePositions, setShapePositions] = useState<ShapePosition[]>([]);
  const [shapeAnimations, setShapeAnimations] = useState<ShapeAnimation[]>([]);

  useEffect(() => {
    startTransition(() => {
      // Generate particle positions
      const particles = Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        width: Math.random() * 20 + 10,
        height: Math.random() * 20 + 10,
      }));

      // Generate particle animations
      const particleAnims = particles.map(() => {
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        const randomDuration = 3 + Math.random() * 3;
        const randomDelay = Math.random() * 2;
        const randomOpacity = 0.3 + Math.random() * 0.4;
        const randomScale = 0.8 + Math.random() * 0.4;

        return {
          x: [0, randomX, 0],
          y: [0, randomY, 0],
          rotate: [0, 360],
          opacity: [0, randomOpacity, 0],
          scale: [1, randomScale, 1],
          duration: randomDuration,
          delay: randomDelay,
        };
      });

      // Generate shape positions
      const shapes = Array.from({ length: 8 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        width: Math.random() * 60 + 40,
        height: Math.random() * 60 + 40,
        borderRadius: Math.random() * 50,
        rotation: Math.random() * 360,
      }));

      // Generate shape animations
      const shapeAnims = shapes.map(() => {
        const randomX = (Math.random() - 0.5) * 100;
        const randomY = (Math.random() - 0.5) * 100;
        const randomDuration = 4 + Math.random() * 4;
        const randomDelay = Math.random() * 3;
        const randomRotation = 180 + Math.random() * 180;
        const randomOpacity = 0.2 + Math.random() * 0.3;
        const randomScale = 0.9 + Math.random() * 0.2;

        return {
          x: [0, randomX, 0],
          y: [0, randomY, 0],
          rotate: [0, randomRotation],
          opacity: [0, randomOpacity, 0],
          scale: [1, randomScale, 1],
          duration: randomDuration,
          delay: randomDelay,
        };
      });

      setParticlePositions(particles);
      setParticleAnimations(particleAnims);
      setShapePositions(shapes);
      setShapeAnimations(shapeAnims);
    });
  }, []);

  return (
    <>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-background" />

      {/* Floating particles */}
      {particlePositions.length > 0 && particleAnimations.length > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((pos, i) => {
            const anim = particleAnimations[i];
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  width: `${pos.width}px`,
                  height: `${pos.height}px`,
                  background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                  filter: "blur(1px)",
                }}
                animate={{
                  x: anim.x,
                  y: anim.y,
                  rotate: anim.rotate,
                  opacity: anim.opacity,
                  scale: anim.scale,
                }}
                transition={{
                  duration: anim.duration,
                  delay: anim.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
      )}

      {/* Geometric shapes */}
      {shapePositions.length > 0 && shapeAnimations.length > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          {shapePositions.map((shape, i) => {
            const anim = shapeAnimations[i];
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${shape.left}%`,
                  top: `${shape.top}%`,
                  width: `${shape.width}px`,
                  height: `${shape.height}px`,
                  background: `linear-gradient(45deg, var(--accent), transparent)`,
                  borderRadius: `${shape.borderRadius}%`,
                  filter: "blur(2px)",
                }}
                initial={{ rotate: shape.rotation }}
                animate={{
                  x: anim.x,
                  y: anim.y,
                  rotate: anim.rotate,
                  opacity: anim.opacity,
                  scale: anim.scale,
                }}
                transition={{
                  duration: anim.duration,
                  delay: anim.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
