"use client";

import { useRef, useState, useEffect, startTransition } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ParticlePosition {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface ShapePosition {
  left: number;
  top: number;
  width: number;
  height: number;
  borderRadius: number;
  rotation: number;
}

export function AnimatedBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(false);
  const [particlePositions, setParticlePositions] = useState<
    ParticlePosition[]
  >([]);
  const [shapePositions, setShapePositions] = useState<ShapePosition[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    isMountedRef.current = true;

    startTransition(() => {
      setParticlePositions(
        Array.from({ length: 20 }).map(() => ({
          left: Math.random() * 100,
          top: Math.random() * 100,
          width: Math.random() * 20 + 10,
          height: Math.random() * 20 + 10,
        }))
      );

      setShapePositions(
        Array.from({ length: 8 }).map(() => ({
          left: Math.random() * 100,
          top: Math.random() * 100,
          width: Math.random() * 60 + 40,
          height: Math.random() * 60 + 40,
          borderRadius: Math.random() * 50,
          rotation: Math.random() * 360,
        }))
      );
    });

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion || !isMountedRef.current) return;
      if (particlePositions.length === 0 || shapePositions.length === 0) return;

      // Animate floating particles
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        Array.from(particles).forEach((particle) => {
          const element = particle as HTMLElement;
          const randomX = gsap.utils.random(-100, 100);
          const randomY = gsap.utils.random(-100, 100);
          const randomDuration = gsap.utils.random(3, 6);
          const randomDelay = gsap.utils.random(0, 2);

          gsap.to(element, {
            x: randomX,
            y: randomY,
            rotation: 360,
            duration: randomDuration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: randomDelay,
          });

          gsap.to(element, {
            opacity: gsap.utils.random(0.3, 0.7),
            scale: gsap.utils.random(0.8, 1.2),
            duration: randomDuration * 0.7,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: randomDelay,
          });
        });
      }

      // Animate geometric shapes
      if (shapesRef.current) {
        const shapes = shapesRef.current.children;
        Array.from(shapes).forEach((shape) => {
          const element = shape as HTMLElement;
          const randomX = gsap.utils.random(-50, 50);
          const randomY = gsap.utils.random(-50, 50);
          const randomDuration = gsap.utils.random(4, 8);
          const randomDelay = gsap.utils.random(0, 3);
          const randomRotation = gsap.utils.random(180, 360);

          gsap.to(element, {
            x: randomX,
            y: randomY,
            rotation: `+=${randomRotation}`,
            duration: randomDuration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: randomDelay,
          });

          gsap.to(element, {
            opacity: gsap.utils.random(0.2, 0.5),
            scale: gsap.utils.random(0.9, 1.1),
            duration: randomDuration * 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: randomDelay,
          });
        });
      }
    },
    {
      dependencies: [
        prefersReducedMotion,
        particlePositions.length,
        shapePositions.length,
      ],
    }
  );

  return (
    <>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-background" />

      {/* Floating particles */}
      {particlePositions.length > 0 && (
        <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
          {particlePositions.map((pos, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-0"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                width: `${pos.width}px`,
                height: `${pos.height}px`,
                background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>
      )}

      {/* Geometric shapes */}
      {shapePositions.length > 0 && (
        <div ref={shapesRef} className="absolute inset-0 overflow-hidden">
          {shapePositions.map((shape, i) => (
            <div
              key={i}
              className="absolute opacity-0"
              style={{
                left: `${shape.left}%`,
                top: `${shape.top}%`,
                width: `${shape.width}px`,
                height: `${shape.height}px`,
                background: `linear-gradient(45deg, var(--accent), transparent)`,
                borderRadius: `${shape.borderRadius}%`,
                transform: `rotate(${shape.rotation}deg)`,
                filter: "blur(2px)",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
