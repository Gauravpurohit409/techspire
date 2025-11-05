"use client";
import React from "react";

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
};

const PARTICLE_DIAMETER = 3;
const REPEL_RADIUS = 60;
const REPEL_SPEED = 10;
const RETURN_SPEED = 0.02;
const DELAY = 60000;
const WIDTH = 400;
const HEIGHT = 400;

export function ParticleImage() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const particlesRef = React.useRef<Array<Particle>>([]);
  const mouseRef = React.useRef<{ x: number; y: number }>({
    x: Infinity,
    y: Infinity,
  });
  const rafRef = React.useRef<number | null>(null);
  const interactionTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const isInteractingRef = React.useRef(false);
  const rippleIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/logo.png";

    const compute = () => {
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      canvas.style.width = `${WIDTH}px`;
      canvas.style.height = `${HEIGHT}px`;

      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.drawImage(img, 0, 0, WIDTH, HEIGHT);

      const imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT).data;

      const numRows = Math.round(HEIGHT / PARTICLE_DIAMETER);
      const numCols = Math.round(WIDTH / PARTICLE_DIAMETER);

      const particles: Array<Particle> = [];
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const pixelIndex =
            (row * PARTICLE_DIAMETER * WIDTH + col * PARTICLE_DIAMETER) * 4;
          const red = imageData[pixelIndex];
          const green = imageData[pixelIndex + 1];
          const blue = imageData[pixelIndex + 2];
          const alpha = imageData[pixelIndex + 3];
          particles.push({
            x: Math.floor(Math.random() * numCols * PARTICLE_DIAMETER),
            y: Math.floor(Math.random() * numRows * PARTICLE_DIAMETER),
            originX: col * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
            originY: row * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
            color: `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`,
          });
        }
      }
      particlesRef.current = particles;
    };

    const drawParticles = () => {
      updateParticles();
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_DIAMETER / 2, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(drawParticles);
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS) {
          const angle = Math.atan2(dy, dx);
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          particle.x -= Math.cos(angle) * force * REPEL_SPEED;
          particle.y -= Math.sin(angle) * force * REPEL_SPEED;
        } else {
          const ox = particle.originX - particle.x;
          const oy = particle.originY - particle.y;
          particle.x += ox * RETURN_SPEED;
          particle.y += oy * RETURN_SPEED;
        }
      });
    };

    const triggerRipple = () => {
      if (isInteractingRef.current) return;
      const particles = particlesRef.current;
      particles.forEach((p) => {
        p.x += (Math.random() - 0.5) * 100;
        p.y += (Math.random() - 0.5) * 100;
      });
    };

    const startRippleInterval = () => {
      rippleIntervalRef.current = setInterval(triggerRipple, DELAY);
    };

    const stopRippleInterval = () => {
      if (rippleIntervalRef.current) clearInterval(rippleIntervalRef.current);
      rippleIntervalRef.current = null;
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;

      // Pause ripple while interacting
      isInteractingRef.current = true;
      stopRippleInterval();

      // Restart ripple 5s after inactivity
      if (interactionTimeoutRef.current)
        clearTimeout(interactionTimeoutRef.current);
      interactionTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
        startRippleInterval();
      }, DELAY);
    };

    const onMouseLeave = () => {
      mouseRef.current.x = Infinity;
      mouseRef.current.y = Infinity;
      isInteractingRef.current = false;
      startRippleInterval();
    };

    img.onload = () => {
      compute();
      drawParticles();
      startRippleInterval();
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      stopRippleInterval();
      if (interactionTimeoutRef.current)
        clearTimeout(interactionTimeoutRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Particle rendering of logo"
      className="block mx-auto"
    />
  );
}
