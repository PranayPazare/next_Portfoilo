export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2048 256"
      {...props}
    >
      <text
        x="0"
        y="208"
        fill="currentColor"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontWeight="700"
        fontSize="220"
        letterSpacing="-8"
      >
        PRANAY PAZARE
      </text>
    </svg>
  )
}

export function getWordmarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><text x="0" y="208" fill="currentColor" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="700" font-size="220" letter-spacing="-8">PRANAY PAZARE</text></svg>`
}
