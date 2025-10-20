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
const REPEL_SPEED = 20;
const RETURN_SPEED = 0.02;

export function ParticleImage({
  src,
  width = 400,
  height = 400,
}: {
  src: string;
  width?: number;
  height?: number;
}) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const particlesRef = React.useRef<Array<Particle>>([]);
  const mouseRef = React.useRef<{ x: number; y: number }>({
    x: Infinity,
    y: Infinity,
  });
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    const compute = () => {
      if (!canvas) return;

      const displayWidth = width ?? img.naturalWidth;
      const displayHeight = height ?? img.naturalHeight;

      canvas.width = Math.max(1, Math.floor(displayWidth));
      canvas.height = Math.max(1, Math.floor(displayHeight));
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      if (!ctx) return;
      ctx.resetTransform();
      ctx.clearRect(0, 0, displayWidth, displayHeight);
      ctx.drawImage(img, 0, 0, displayWidth, displayHeight);

      const imageData = ctx.getImageData(
        0,
        0,
        displayWidth,
        displayHeight,
      ).data;

      const numRows = Math.round(displayHeight / PARTICLE_DIAMETER);
      const numCols = Math.round(displayWidth / PARTICLE_DIAMETER);

      const particles: Array<Particle> = [];
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const pixelIndex =
            (row * PARTICLE_DIAMETER * displayWidth + col * PARTICLE_DIAMETER) *
            4;

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
      if (!ctx) return;
      updateParticles();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, PARTICLE_DIAMETER / 2, 0, 2 * Math.PI);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(drawParticles);
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      particles.forEach((particle) => {
        const distanceFromMouseX = mouse.x - particle.x;
        const distanceFromMouseY = mouse.y - particle.y;
        const distanceFromMouse = Math.sqrt(
          distanceFromMouseX ** 2 + distanceFromMouseY ** 2,
        );

        if (distanceFromMouse < REPEL_RADIUS) {
          const angle = Math.atan2(distanceFromMouseY, distanceFromMouseX);
          const force = (REPEL_RADIUS - distanceFromMouse) / REPEL_RADIUS;
          const moveX = Math.cos(angle) * force * REPEL_SPEED;
          const moveY = Math.sin(angle) * force * REPEL_SPEED;

          particle.x -= moveX;
          particle.y -= moveY;
        } else if (
          particle.x !== particle.originX ||
          particle.y !== particle.originY
        ) {
          const distanceFromOriginX = particle.originX - particle.x;
          const distanceFromOriginY = particle.originY - particle.y;
          const distanceFromOrigin = Math.sqrt(
            distanceFromOriginX ** 2 + distanceFromOriginY ** 2,
          );

          const angle = Math.atan2(distanceFromOriginY, distanceFromOriginX);
          const moveX = Math.cos(angle) * distanceFromOrigin * RETURN_SPEED;
          const moveY = Math.sin(angle) * distanceFromOrigin * RETURN_SPEED;

          particle.x += moveX;
          particle.y += moveY;
        }
      });
    };

    img.onload = () => {
      compute();
      drawParticles();
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(drawParticles);

    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.offsetX;
      mouseRef.current.y = event.offsetY;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = Infinity;
      mouseRef.current.y = Infinity;
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [width, height, src]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Pixelated rendering of source image"
    />
  );
}
