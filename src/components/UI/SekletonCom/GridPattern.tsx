"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";

function Block({
  x,
  y,
  r = 24,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof motion.circle>, "x" | "y"> & {
  x: number;
  y: number;
  r?: number;
}) {
  return (
    <motion.circle
      transform={`translate(${-32 * y + 96 * x} ${160 * y})`}
      cx="0"
      cy="0"
      r={r}
      {...props}
    />
  );
}

export function GridPattern({
  yOffset = 0,
  interactive = false,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & {
  yOffset?: number;
  interactive?: boolean;
}) {
  const id = useId();
  const ref = useRef<SVGSVGElement>(null);
  const currentBlock = useRef<{ x: number; y: number } | null>(null);
  const counter = useRef(0);
  const [hoveredBlocks, setHoveredBlocks] = useState<
    [number, number, number][]
  >([]);

  const staticBlocks = [
    [1, 1],
    [2, 2],
    [4, 3],
    [6, 2],
    [7, 4],
    [5, 5],
  ];

  useEffect(() => {
    if (!interactive) return;

    function onMouseMove(event: MouseEvent) {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      x = x - rect.width / 2 - 32;
      y = y - yOffset;
      x += Math.tan(32 / 160) * y;
      x = Math.floor(x / 96);
      y = Math.floor(y / 160);

      if (currentBlock.current?.x === x && currentBlock.current?.y === y)
        return;

      currentBlock.current = { x, y };

      setHoveredBlocks((blocks) => {
        const key = counter.current++;
        const block: [number, number, number] = [x, y, key];
        return [...blocks, block].filter(
          (b) => !(b[0] === x && b[1] === y && b[2] !== key)
        );
      });
    }

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [yOffset, interactive]);

  return (
    <svg ref={ref} aria-hidden="true" {...props}>
      <rect width="100%" height="100%" fill={`url(#${id})`} strokeWidth="0" />

      <svg x="50%" y={yOffset} strokeWidth="0" className="overflow-visible">
        {staticBlocks.map((block) => (
          <Block key={`${block}`} x={block[0]} y={block[1]} />
        ))}

        {hoveredBlocks.map((block) => (
          <Block
            key={block[2]}
            x={block[0]}
            y={block[1]}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, times: [0, 0, 1] }}
            onAnimationComplete={() =>
              setHoveredBlocks((blocks) =>
                blocks.filter((b) => b[2] !== block[2])
              )
            }
          />
        ))}
      </svg>

      <defs>
        <pattern
          id={id}
          width="96"
          height="160"
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(0 ${yOffset})`}
        >
          <circle cx="0" cy="0" r="2" />
          <circle cx="48" cy="80" r="2" />
        </pattern>
      </defs>
    </svg>
  );
}
