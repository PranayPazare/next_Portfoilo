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
        x="0"
        y="208"
        fill="currentColor"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontWeight="700"
        fontSize="256"
        letterSpacing="-12"
      >
        PP
      </text>
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><text x="0" y="104" fill="currentColor" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="700" font-size="128" letter-spacing="-6">PP</text></svg>`
}
