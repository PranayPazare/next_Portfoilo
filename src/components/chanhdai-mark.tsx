export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="var(--font-pixel), 'Press Start 2P', ui-monospace, monospace"
        fontSize="180"
        letterSpacing="2"
      >
        PP
      </text>
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="currentColor" font-family="'Press Start 2P', ui-monospace, monospace" font-size="90" letter-spacing="1">PP</text></svg>`
}
