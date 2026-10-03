import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function CustomCursor() {
  // 1. Raw Mouse Coordinates (Zero lag for native sensitivity)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. The Smooth Circle Base (Heavier spring for slightly more lag)
  const smoothCircleX = useSpring(mouseX, { stiffness: 180, damping: 30 });
  const smoothCircleY = useSpring(mouseY, { stiffness: 180, damping: 30 });

  // 3. The Bounded Circle (Clamps the ring so it stays tethered to the dot)
  const circleX = useTransform([mouseX, smoothCircleX, mouseY, smoothCircleY], (latest: number[]) => {
    const [mx, cx, my, cy] = latest;
    const dx = cx - mx;
    const dy = cy - my;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = 14; // Circle cannot pass this distance from dot
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

  // 4. The ULTRA-LONG Path-Tracing Rope (Optimized rope physics)
  const pathRef = useRef<SVGPathElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  
  // INCREASED POINTS: Doubled from 16 to 32 points for a longer physical rope
  const ropePoints = useRef<{x: number, y: number}[]>(Array(32).fill({x: -100, y: -100}));

  useEffect(() => {
    let animationFrameId: number;

    const renderRope = () => {
      // The leading point is always exactly at the fast mouse position
      ropePoints.current[0] = { ...mousePos.current };

      // DECREASED FRICTION: Lowered multiplier to make each point fall way behind
      // A smaller number (0.2 vs the previous 0.4) allows the points to drag much further apart, stretching the rope
      for (let i = 1; i < ropePoints.current.length; i++) {
        const pt = ropePoints.current[i];
        const prevPt = ropePoints.current[i - 1];
        
        pt.x += (prevPt.x - pt.x) * 0.2; // Optimized stretch factor
        pt.y += (prevPt.y - pt.y) * 0.2; // Optimized stretch factor
      }

      // Draw the fluid, curving path through all 32 points
      if (pathRef.current) {
        const pathString = ropePoints.current.reduce((acc, point, i) => {
          return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`;
        }, "");
        pathRef.current.setAttribute("d", pathString);
      }

      animationFrameId = requestAnimationFrame(renderRope);
    };

    renderRope();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      
      {/* The Long Curving Golden Rope */}
      <svg className="absolute inset-0 w-full h-full overflow-visible">
        <path
          ref={pathRef}
          stroke="#b8860b" /* Golden/brown */
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-70"
        />
      </svg>

      {/* The Constrained Outer Cyan Ring */}
      <motion.div
        className="absolute left-0 top-0 w-10 h-10 border border-cyan-400 rounded-full"
        style={{
          x: circleX,
          y: circleY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* The Instant Inner Cyan Dot (Native Sensitivity) */}
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