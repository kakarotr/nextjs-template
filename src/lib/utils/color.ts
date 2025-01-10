function toRGB(hex: string) {
  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('')
  }

  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `${r}, ${g}, ${b}`
}

function toHSL(hex: string) {
  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('')
  }

  const bigint = parseInt(hex, 16)
  const r = ((bigint >> 16) & 255) / 255
  const g = ((bigint >> 8) & 255) / 255
  const b = (bigint & 255) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h! /= 6
  }

  h = Math.round(h! * 360)
  s = Math.round(s * 100)
  l = Math.round(l * 100)

  return `${h}, ${s}%, ${l}%`
}

export {
  toRGB,
  toHSL
}
