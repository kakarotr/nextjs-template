interface Palette {
  primary: PaletteColor
  secondary: PaletteColor
  info: PaletteColor
  success: PaletteColor
  warning: PaletteColor
  danger: PaletteColor
  text: TextColor
  background: BackgroundColor
  action: ActionColor
}

interface PaletteColor {
  hover: string
  main: string
  active: string
  foreground: string
}

interface TextColor {
  primary: string
  secondary: string
  placeholder: string
  disabled: string
}

interface BackgroundColor {
  default: string
  card: string
  popover: string
  muted: string
}

interface ActionColor {
  hover: string
  active: string
  selected: string
}

type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'

export type {
  Color,
  Palette,
  PaletteColor,
}
