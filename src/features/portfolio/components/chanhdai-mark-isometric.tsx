"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const VIEWBOX_W = 556
const VIEWBOX_H = 354

/**
 * 30-deg iso projection of points on the floor plane (Y=0 in 3D), scaled by
 * ~0.91 and translated to (202, 17). Matches the original chanhdai grid:
 *   screen_x = COS * (u - v) + TX
 *   screen_y = SIN * (u + v) + TY
 * Extrusion in +Y (height) maps to screen_y -= HEIGHT (a face lifted by
 * HEIGHT px sits HEIGHT px higher on screen).
 */
const COS = 0.789
const SIN = 0.456
const TX = 202
const TY = 17
/** 3D extrusion depth in screen pixels — how tall the letter blocks appear. */
const HEIGHT = 40

type Point = [number, number]

function projectFloor(u: number, v: number): Point {
  return [COS * (u - v) + TX, SIN * (u + v) + TY]
}

function toPath(pts: Point[]): string {
  if (pts.length === 0) return ""
  const [first, ...rest] = pts
  return (
    `M${first[0].toFixed(2)} ${first[1].toFixed(2)}` +
    rest.map((p) => `L${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join("") +
    "Z"
  )
}

function projectPolygonAtFloor(pts: Point[]): string {
  return toPath(pts.map((p) => projectFloor(p[0], p[1])))
}

function projectPolygonAtTop(pts: Point[]): string {
  return toPath(
    pts.map((p) => {
      const [sx, sy] = projectFloor(p[0], p[1])
      return [sx, sy - HEIGHT] as Point
    })
  )
}

/**
 * For a clockwise-wound 2D polygon (image-space U right, V down), the outward
 * normal of an edge with direction (du, dv) is (dv, -du). In the iso view from
 * above-front-right the side face is visible when its normal points to the
 * right (+U) or toward the front of the letter (+V) — i.e. dv > 0 or du < 0.
 */
function isEdgeVisible(p1: Point, p2: Point): boolean {
  const du = p2[0] - p1[0]
  const dv = p2[1] - p1[1]
  return dv > 0 || du < 0
}

/**
 * Build all visible side-face quads for a polygon. Each visible edge becomes
 * a parallelogram from its floor projection up to its top projection (shifted
 * straight up by HEIGHT pixels on screen).
 */
function makeSideFaces(pts: Point[]): string {
  const out: string[] = []
  for (let i = 0; i < pts.length; i++) {
    const p1 = pts[i]
    const p2 = pts[(i + 1) % pts.length]
    if (!isEdgeVisible(p1, p2)) continue

    const [p1fx, p1fy] = projectFloor(p1[0], p1[1])
    const [p2fx, p2fy] = projectFloor(p2[0], p2[1])
    out.push(
      `M${p1fx.toFixed(2)} ${p1fy.toFixed(2)}` +
        `L${p2fx.toFixed(2)} ${p2fy.toFixed(2)}` +
        `L${p2fx.toFixed(2)} ${(p2fy - HEIGHT).toFixed(2)}` +
        `L${p1fx.toFixed(2)} ${(p1fy - HEIGHT).toFixed(2)}` +
        `Z`
    )
  }
  return out.join("")
}

/** Outer perimeter of a single P (CW, 3 cols × 4 rows of 64u modules). */
function makeOuterP(xOffset: number): Point[] {
  return [
    [xOffset + 0, 0],
    [xOffset + 192, 0],
    [xOffset + 192, 192],
    [xOffset + 64, 192],
    [xOffset + 64, 256],
    [xOffset + 0, 256],
  ]
}

/** Inner counter (the hole in the top loop) of a single P. */
function makeInnerP(xOffset: number): Point[] {
  return [
    [xOffset + 64, 64],
    [xOffset + 128, 64],
    [xOffset + 128, 128],
    [xOffset + 64, 128],
  ]
}

const P1_OUTER = makeOuterP(0)
const P1_INNER = makeInnerP(0)
const P2_OUTER = makeOuterP(256)
const P2_INNER = makeInnerP(256)

/** Top face of both Ps (outer + inner; cut with fill-rule="evenodd"). */
const PP_TOP_PATH =
  projectPolygonAtTop(P1_OUTER) +
  projectPolygonAtTop(P1_INNER) +
  projectPolygonAtTop(P2_OUTER) +
  projectPolygonAtTop(P2_INNER)

/** Floor face — only used to draw the silhouette baseline. */
const PP_FLOOR_PATH =
  projectPolygonAtFloor(P1_OUTER) +
  projectPolygonAtFloor(P1_INNER) +
  projectPolygonAtFloor(P2_OUTER) +
  projectPolygonAtFloor(P2_INNER)

/** Visible side faces, computed from outer perimeters only. */
const PP_SIDES_PATH = makeSideFaces(P1_OUTER) + makeSideFaces(P2_OUTER)

const pressTransition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

export function ChanhDaiMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `pp-face-pattern-${id}`,
    radialGradient: `pp-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, VIEWBOX_W]), {
    stiffness: 150,
    damping: 25,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, VIEWBOX_H]), {
    stiffness: 150,
    damping: 25,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return
    if (typeof window === "undefined") return
    if (window.matchMedia("(hover: none)").matches) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--side:color-mix(in_oklab,var(--foreground)_5%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_28%,var(--background))]"
      viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      {/* Diagonal dashed reference lines */}
      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      <motion.g
        variants={{
          normal: { y: 0 },
          pressed: { y: 16 },
        }}
        transition={pressTransition}
      >
        {/*
          Render order (back → front):
            1. Side faces — drawn first so the top face overlays their tops.
            2. Floor-edge stroke — defines the bottom silhouette of the block.
            3. Top face background mask + crosshatch pattern.
            4. Top face base outline.
            5. Top face mouse-tracking gradient overlay.
        */}

          {/* Side faces — subtle darker fill + outline strokes for the
              vertical edges */}
          <path d={PP_SIDES_PATH} fill="var(--side)" />
          <path
            d={PP_SIDES_PATH}
            fill="none"
            stroke="var(--stroke)"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Floor-edge stroke — outlines the bottom silhouette of the block */}
          <path
            d={PP_FLOOR_PATH}
            fillRule="evenodd"
            fill="none"
            stroke="var(--stroke)"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Top face — background mask, crosshatch pattern, outline, and the
              mouse-tracking gradient highlight overlay */}
          <path
            d={PP_TOP_PATH}
            fillRule="evenodd"
            fill="var(--background)"
          />
          <path
            d={PP_TOP_PATH}
            fillRule="evenodd"
            fill={`url(#${ids.facePattern})`}
          />
          <path
            d={PP_TOP_PATH}
            fillRule="evenodd"
            fill="none"
            stroke="var(--stroke)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d={PP_TOP_PATH}
            fillRule="evenodd"
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
      </motion.g>
    </motion.svg>
  )
}
