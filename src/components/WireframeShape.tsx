import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Shape = "cube" | "prism" | "sphere";

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

interface WireframeShapeProps {
  shape?: Shape;
  /** CSS size, e.g. "45vw" or 320 */
  size?: number | string;
  /** rotation speed multiplier */
  speed?: number;
  /** subtle scroll parallax strength in px (0 = off) */
  parallax?: number;
  className?: string;
  style?: React.CSSProperties;
}

/* ------------------------------- geometry ------------------------------- */

function cubeEdges(): { verts: Vec3[]; edges: [number, number][] } {
  const s = 1;
  const verts: Vec3[] = [
    { x: -s, y: -s, z: -s }, { x: s, y: -s, z: -s },
    { x: s, y: s, z: -s }, { x: -s, y: s, z: -s },
    { x: -s, y: -s, z: s }, { x: s, y: -s, z: s },
    { x: s, y: s, z: s }, { x: -s, y: s, z: s },
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];
  return { verts, edges };
}

function prismEdges(): { verts: Vec3[]; edges: [number, number][] } {
  // triangular prism
  const r = 1;
  const h = 1.1;
  const verts: Vec3[] = [
    { x: 0, y: -h, z: r }, { x: r * 0.866, y: -h, z: -r * 0.5 }, { x: -r * 0.866, y: -h, z: -r * 0.5 },
    { x: 0, y: h, z: r }, { x: r * 0.866, y: h, z: -r * 0.5 }, { x: -r * 0.866, y: h, z: -r * 0.5 },
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 0],
    [3, 4], [4, 5], [5, 3],
    [0, 3], [1, 4], [2, 5],
  ];
  return { verts, edges };
}

function sphereEdges(latSeg = 6, lonSeg = 12): { verts: Vec3[]; edges: [number, number][] } {
  const verts: Vec3[] = [];
  const edges: [number, number][] = [];
  // rings
  for (let lat = 0; lat <= latSeg; lat++) {
    const theta = (lat / latSeg) * Math.PI;
    const y = Math.cos(theta);
    const r = Math.sin(theta);
    const base = verts.length;
    for (let lon = 0; lon < lonSeg; lon++) {
      const phi = (lon / lonSeg) * Math.PI * 2;
      verts.push({ x: r * Math.cos(phi), y, z: r * Math.sin(phi) });
      edges.push([base + lon, base + ((lon + 1) % lonSeg)]);
    }
  }
  // meridians
  for (let lon = 0; lon < lonSeg; lon++) {
    for (let lat = 0; lat < latSeg; lat++) {
      const a = lat * lonSeg + lon;
      const b = (lat + 1) * lonSeg + lon;
      edges.push([a, b]);
    }
  }
  return { verts, edges };
}

function rotate(v: Vec3, ax: number, ay: number): Vec3 {
  // rotate around Y then X
  const cosY = Math.cos(ay);
  const sinY = Math.sin(ay);
  const x1 = v.x * cosY + v.z * sinY;
  const z1 = -v.x * sinY + v.z * cosY;
  const cosX = Math.cos(ax);
  const sinX = Math.sin(ax);
  const y1 = v.y * cosX - z1 * sinX;
  const z2 = v.y * sinX + z1 * cosX;
  return { x: x1, y: y1, z: z2 };
}

/**
 * Tiny dependency-free canvas renderer for rotating green wireframe shapes
 * (reference uses Three.js wireframe prisms; this stays lightweight).
 */
export function WireframeShape({
  shape = "prism",
  size = 320,
  speed = 1,
  parallax = 0,
  className,
  style,
}: WireframeShapeProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [py, setPy] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const geo =
      shape === "cube" ? cubeEdges() : shape === "sphere" ? sphereEdges() : prismEdges();

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
    };

    const draw = (t: number) => {
      if (w === 0 || h === 0) resize();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const scale = Math.min(w, h) * 0.34;
      const ay = reduceMotion ? 0.6 : (t / 1000) * 0.35 * speed;
      const ax = reduceMotion ? 0.5 : (t / 1000) * 0.18 * speed + 0.4;

      const projected = geo.verts.map((v) => {
        const r = rotate(v, ax, ay);
        const persp = 1 / (1 + r.z * 0.18);
        return {
          x: cx + r.x * scale * persp,
          y: cy + r.y * scale * persp,
          z: r.z,
        };
      });

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(0, 255, 89, 0.55)";

      for (const [a, b] of geo.edges) {
        const pa = projected[a];
        const pb = projected[b];
        if (!pa || !pb) continue;
        // fade far edges
        const depth = (pa.z + pb.z) / 2;
        const alpha = 0.25 + 0.45 * ((depth + 1) / 2);
        ctx.strokeStyle = `rgba(0, 255, 89, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      }
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0);
    });
    ro.observe(canvas);
    resize();

    if (reduceMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [shape, speed, reduceMotion]);

  const dim = typeof size === "number" ? `${size}px` : size;

  // subtle scroll parallax
  useEffect(() => {
    if (!parallax || reduceMotion) return;
    const onScroll = () => {
      const r = wrapRef.current?.getBoundingClientRect();
      if (!r) return;
      const vh = window.innerHeight;
      const center = r.top + r.height / 2;
      setPy(((center - vh / 2) / vh) * parallax);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [parallax, reduceMotion]);

  return (
    <div
      ref={wrapRef}
      className={["wireframe", className].filter(Boolean).join(" ")}
      style={{ width: dim, height: dim, ...style, transform: `translateY(${py}px)` }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
