export type NavItem<T extends string = string> = {
  title: string
  href: T
  /** When true, the link opens in a new tab with rel="noopener". */
  external?: boolean
}
