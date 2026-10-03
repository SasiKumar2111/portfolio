import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function CustomCursor() {
  // 1. Raw Mouse Coordinates (Instant, zero lag for default sensitivity)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. The Trail (Lowered stiffness and damping to make the streak stretch longer)
  const trailX = useSpring(mouseX, { stiffness: 100, damping: 15 });
  const trailY = useSpring(mouseY, { stiffness: 100, damping: 15 });

  // 3. The Smooth Circle Base (Lags behind slightly)
  const smoothCircleX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const smoothCircleY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  // 4. The Bounded Circle (Forces the circle to never fall too far behind the dot)
  const circleX = useTransform([mouseX, smoothCircleX, mouseY, smoothCircleY], (latest: number[]) => {
    const [mx, cx, my, cy] = latest;
    const dx = cx - mx;
    const dy = cy - my;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = 14; // Controls how far the dot can "push" the circle's edge
    
    if (dist > maxRadius) return mx + (dx / dist) * maxRadius;
    return cx;
  });

  const circleY = useTransform([mouseX, smoothCircleX, mouseY, smoothCircleY], (latest: number[]) => {
    const [mx, cx, my, cy] = latest;
    const dx = cx - mx;
    const dy = cy - my;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = 14;
    
    if (dist > maxRadius) return my + (dy / dist) * maxRadius;
    return cy;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      
      {/* The Trailing Line (Stretches longer during fast movement) */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1={mouseX}
          y1={mouseY}
          x2={trailX}
          y2={trailY}
          stroke="#b8860b"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-70"
        />
      </svg>

      {/* The Constrained Outer Circle */}
      <motion.div
        className="absolute left-0 top-0 w-10 h-10 border border-cyan-400 rounded-full"
        style={{
          x: circleX,
          y: circleY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* The Instant Inner Dot (100% native sensitivity) */}
      <motion.div
        className="absolute left-0 top-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#00f0ff]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}