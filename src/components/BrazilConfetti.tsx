import { useMemo } from "react";

const COLORS = ["#FFDF00", "#FFD700", "#FFC700", "#009C3B", "#00A859", "#007A33"];

const BrazilConfetti = () => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 6,
        size: 6 + Math.random() * 8,
        color: COLORS[i % COLORS.length],
        rotate: Math.random() * 360,
        sway: 20 + Math.random() * 40,
        shape: Math.random() > 0.5 ? "rect" : "circle",
      })),
    []
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] overflow-hidden"
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-[-20px] animate-confetti-fall"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * (p.shape === "rect" ? 1.6 : 1)}px`,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            transform: `rotate(${p.rotate}deg)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            // @ts-expect-error CSS var
            "--sway": `${p.sway}px`,
            opacity: 0.85,
            boxShadow: `0 0 6px ${p.color}55`,
          }}
        />
      ))}
    </div>
  );
};

export default BrazilConfetti;