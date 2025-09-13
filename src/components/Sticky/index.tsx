import React, { useRef, useEffect, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface StickyProps {
  children: ReactNode;
  strength?: number; // 0..1 (quanto "puxa")
  radius?: number; // px: até onde o efeito age
  maxTranslate?: number; // px: limite do deslocamento
  rotate?: boolean; // se aplica rotação 3D leve
  className?: string;
  style?: React.CSSProperties;
}

export default function Sticky({
  children,
  strength = 0.5, //  força
  radius = 60, // raio
  maxTranslate = 50, // deslocamento máximo
  rotate = true,
  className,
  style,
}: StickyProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const tx = useMotionValue(0);
  const ty = useMotionValue(0);
  const sx = useSpring(tx, { stiffness: 400, damping: 20 });
  const sy = useSpring(ty, { stiffness: 400, damping: 20 });

  const rotX = useTransform(sy, (v) => (rotate ? clamp(-v / 4, -15, 15) : 0));
  const rotY = useTransform(sx, (v) => (rotate ? clamp(v / 4, -15, 15) : 0));

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        const norm = 1 - dist / radius; // mais perto → mais atraído
        const targetX = clamp(
          dx * strength * norm,
          -maxTranslate,
          maxTranslate
        );
        const targetY = clamp(
          dy * strength * norm,
          -maxTranslate,
          maxTranslate
        );
        tx.set(targetX);
        ty.set(targetY);
      } else {
        tx.set(0);
        ty.set(0);
      }
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [radius, strength, maxTranslate, tx, ty]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        willChange: "transform",
        perspective: rotate ? 800 : undefined,
        x: sx,
        y: sy,
        rotateX: rotX,
        rotateY: rotY,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}
