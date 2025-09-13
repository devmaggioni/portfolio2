import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

interface SVGAnimatedString {
  baseVal: string;
  animVal: string;
}

export default function Cursor() {
  const theme = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Aumente a rigidez (stiffness) para um movimento quase instantâneo
  // Ajuste o amortecimento (damping) para evitar oscilações
  const smoothX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 600, damping: 40 });

  const [hoveredClass, setHoveredClass] = useState<string | null>(null);
  const effectBig = hoveredClass?.includes("effect-big");
  const effectBig2 = hoveredClass?.includes("effect-big2");
  const smallEffect = hoveredClass?.includes("effect-small");
  const hideEffect = hoveredClass?.includes("effect-hide");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        let name = "";
        const className = element.className;

        if (typeof className === "string") {
          name = className;
        } else if (typeof className === "object" && "baseVal" in className) {
          name = (className as SVGAnimatedString).baseVal;
        }
        setHoveredClass(name || element.tagName);
      } else {
        setHoveredClass(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="hide-in-mobile"
        style={{
          opacity: (hideEffect && "0") || "1",
          position: "fixed",
          top: -30,
          left: -30,
          zIndex: 999,
          width: 60,
          height: 60,
          borderRadius: "50%",
          pointerEvents: "none",
          backgroundColor: effectBig ? "rgba(255,255,255,0.1)" : "transparent",
          border: effectBig
            ? "2px solid rgba(255,255,255,0.5)"
            : `2px solid ${(smallEffect && "#ff00ff") || theme.cursor}`,
          backdropFilter: effectBig ? "invert(1) brightness(1.2)" : "none",
          WebkitBackdropFilter: effectBig
            ? "invert(1) brightness(1.2)"
            : "none",
          x: smoothX,
          y: smoothY,
          scale:
            (effectBig2 && 4) || (smallEffect && 0.6) || (effectBig && 2) || 1,
          transition:
            effectBig || smallEffect
              ? "transform .1s ease"
              : "transform .05s ease",
        }}
      />
    </>
  );
}
