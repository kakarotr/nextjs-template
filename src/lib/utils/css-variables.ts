import { Theme } from '@/lib/theme'
import { toHSL } from './color'

export function setCssVariables({ palette, shape }: Theme, { palette: darkPalette }: Theme) {
  let lightStyles = document.getElementById('light-styles') as HTMLStyleElement
  if (!lightStyles) {
    lightStyles = document.createElement('style')
    lightStyles.id = 'light-styles'
    document.head.appendChild(lightStyles)
  }
  lightStyles.innerHTML = `
    :root {
      --primary: ${toHSL(palette.primary.main)};
      --primary-hover: ${toHSL(palette.primary.hover)};
      --primary-active: ${toHSL(palette.primary.active)};
      --primary-foreground: ${toHSL(palette.primary.foreground)};

      --secondary: ${toHSL(palette.secondary.main)};
      --secondary-hover: ${toHSL(palette.secondary.hover)};
      --secondary-active: ${toHSL(palette.secondary.active)};
      --secondary-foreground: ${toHSL(palette.secondary.foreground)};

      --info: ${toHSL(palette.info.main)};
      --info-hover: ${toHSL(palette.info.hover)};
      --info-active: ${toHSL(palette.info.active)};
      --info-foreground: ${toHSL(palette.info.foreground)};

      --success: ${toHSL(palette.success.main)};
      --success-hover: ${toHSL(palette.success.hover)};
      --success-active: ${toHSL(palette.success.active)};
      --success-foreground: ${toHSL(palette.success.foreground)};

      --warning: ${toHSL(palette.warning.main)};
      --warning-hover: ${toHSL(palette.warning.hover)};
      --warning-active: ${toHSL(palette.warning.active)};
      --warning-foreground: ${toHSL(palette.warning.foreground)};

      --danger: ${toHSL(palette.danger.main)};
      --danger-hover: ${toHSL(palette.danger.hover)};
      --danger-active: ${toHSL(palette.danger.active)};
      --danger-foreground: ${toHSL(palette.danger.foreground)};

      --text-primary: ${toHSL(palette.text.primary)};
      --text-secondary: ${toHSL(palette.text.secondary)};
      --text-placeholder: ${toHSL(palette.text.placeholder)};
      --text-disabled: ${toHSL(palette.text.disabled)};

      --background-default: ${toHSL(palette.background.default)};
      --background-card: ${toHSL(palette.background.card)};
      --background-popover: ${toHSL(palette.background.popover)};
      --background-muted: ${toHSL(palette.background.muted)};

      --action-hover: ${toHSL(palette.action.hover)};
      --action-active: ${toHSL(palette.action.active)};
      --action-selected: ${toHSL(palette.action.selected)};

      --radius: ${typeof shape.borderRadius === 'string' ? shape.borderRadius : shape.borderRadius + 'rem'};

      --accent: 210, 40%, 96%;
      --accent-foreground: 222.2 47.4% 11.2%;

      --divider: 210, 40%, 96%;
      --border: 214.3, 31.8%, 91.4%;
      --input: 214.3, 31.8%, 91.4%;
      --ring: 222.2, 84%, 4.9%;

      --chart-1: 12 76% 61%;
      --chart-2: 173 58% 39%;
      --chart-3: 197 37% 24%;
      --chart-4: 43 74% 66%;
      --chart-5: 27 87% 67%;
    }
  `

  let darkStyle = document.getElementById('dark-styles') as HTMLStyleElement
  if (!darkStyle) {
    darkStyle = document.createElement('style')
    darkStyle.id = 'dark-styles'
    document.head.appendChild(darkStyle)
  }
  darkStyle.innerHTML = `
    .dark {
       --primary: ${toHSL(darkPalette.primary.main)};
      --primary-hover: ${toHSL(darkPalette.primary.hover)};
      --primary-active: ${toHSL(darkPalette.primary.active)};
      --primary-foreground: ${toHSL(darkPalette.primary.foreground)};

      --secondary: ${toHSL(darkPalette.secondary.main)};
      --secondary-hover: ${toHSL(darkPalette.secondary.hover)};
      --secondary-active: ${toHSL(darkPalette.secondary.active)};
      --secondary-foreground: ${toHSL(darkPalette.secondary.foreground)};

      --info: ${toHSL(darkPalette.info.main)};
      --info-hover: ${toHSL(darkPalette.info.hover)};
      --info-active: ${toHSL(darkPalette.info.active)};
      --info-foreground: ${toHSL(darkPalette.info.foreground)};

      --success: ${toHSL(darkPalette.success.main)};
      --success-hover: ${toHSL(darkPalette.success.hover)};
      --success-active: ${toHSL(darkPalette.success.active)};
      --success-foreground: ${toHSL(darkPalette.success.foreground)};

      --warning: ${toHSL(darkPalette.warning.main)};
      --warning-hover: ${toHSL(darkPalette.warning.hover)};
      --warning-active: ${toHSL(darkPalette.warning.active)};
      --warning-foreground: ${toHSL(darkPalette.warning.foreground)};

      --danger: ${toHSL(darkPalette.danger.main)};
      --danger-hover: ${toHSL(darkPalette.danger.hover)};
      --danger-active: ${toHSL(darkPalette.danger.active)};
      --danger-foreground: ${toHSL(darkPalette.danger.foreground)};

      --text-primary: ${toHSL(darkPalette.text.primary)};
      --text-secondary: ${toHSL(darkPalette.text.secondary)};
      --text-placeholder: ${toHSL(darkPalette.text.placeholder)};
      --text-disabled: ${toHSL(darkPalette.text.disabled)};

      --background-default: ${toHSL(darkPalette.background.default)};
      --background-card: ${toHSL(darkPalette.background.card)};
      --background-popover: ${toHSL(darkPalette.background.popover)};
      --background-muted: ${toHSL(darkPalette.background.muted)};

      --action-hover: ${toHSL(darkPalette.action.hover)};
      --action-active: ${toHSL(darkPalette.action.active)};
      --action-selected: ${toHSL(darkPalette.action.selected)};

      --accent: 217.2, 32.6%, 17.5%;
      --accent-foreground: 215, 20.2%, 65.1%;

      --divider: 217.2, 32.6%, 17.5%;
      --border: 217.2, 32.6%, 17.5%;
      --input: 217.2, 32.6%, 17.5%;
      --ring: 212.7, 26.8%, 83.9%;

      --chart-1: 220 70% 50%;
      --chart-2: 160 60% 45%;
      --chart-3: 30 80% 55%;
      --chart-4: 280 65% 60%;
      --chart-5: 340 75% 55%;
    }
  `
}

export function getCssVariables({ palette, shape }: Theme, { palette: darkPalette }: Theme) {
  const cssVariables = `
    :root {
      --primary: ${toHSL(palette.primary.main)};
      --primary-hover: ${toHSL(palette.primary.hover)};
      --primary-active: ${toHSL(palette.primary.active)};
      --primary-foreground: ${toHSL(palette.primary.foreground)};

      --secondary: ${toHSL(palette.secondary.main)};
      --secondary-hover: ${toHSL(palette.secondary.hover)};
      --secondary-active: ${toHSL(palette.secondary.active)};
      --secondary-foreground: ${toHSL(palette.secondary.foreground)};

      --info: ${toHSL(palette.info.main)};
      --info-hover: ${toHSL(palette.info.hover)};
      --info-active: ${toHSL(palette.info.active)};
      --info-foreground: ${toHSL(palette.info.foreground)};

      --success: ${toHSL(palette.success.main)};
      --success-hover: ${toHSL(palette.success.hover)};
      --success-active: ${toHSL(palette.success.active)};
      --success-foreground: ${toHSL(palette.success.foreground)};

      --warning: ${toHSL(palette.warning.main)};
      --warning-hover: ${toHSL(palette.warning.hover)};
      --warning-active: ${toHSL(palette.warning.active)};
      --warning-foreground: ${toHSL(palette.warning.foreground)};

      --danger: ${toHSL(palette.danger.main)};
      --danger-hover: ${toHSL(palette.danger.hover)};
      --danger-active: ${toHSL(palette.danger.active)};
      --danger-foreground: ${toHSL(palette.danger.foreground)};

      --text-primary: ${toHSL(palette.text.primary)};
      --text-secondary: ${toHSL(palette.text.secondary)};
      --text-placeholder: ${toHSL(palette.text.placeholder)};
      --text-disabled: ${toHSL(palette.text.disabled)};

      --background-default: ${toHSL(palette.background.default)};
      --background-card: ${toHSL(palette.background.card)};
      --background-popover: ${toHSL(palette.background.popover)};
      --background-muted: ${toHSL(palette.background.muted)};

      --action-hover: ${toHSL(palette.action.hover)};
      --action-active: ${toHSL(palette.action.active)};
      --action-selected: ${toHSL(palette.action.selected)};

      --radius: ${typeof shape.borderRadius === 'string' ? shape.borderRadius : shape.borderRadius + 'rem'};

      --accent: 210, 40%, 96%;
      --accent-foreground: 222.2 47.4% 11.2%;

      --divider: 210, 40%, 96%;
      --border: 214.3, 31.8%, 91.4%;
      --input: 214.3, 31.8%, 91.4%;
      --ring: 222.2, 84%, 4.9%;

      --chart-1: 12 76% 61%;
      --chart-2: 173 58% 39%;
      --chart-3: 197 37% 24%;
      --chart-4: 43 74% 66%;
      --chart-5: 27 87% 67%;
    }
  `
  const darkCssVariables = `
    .dark {
       --primary: ${toHSL(darkPalette.primary.main)};
      --primary-hover: ${toHSL(darkPalette.primary.hover)};
      --primary-active: ${toHSL(darkPalette.primary.active)};
      --primary-foreground: ${toHSL(darkPalette.primary.foreground)};

      --secondary: ${toHSL(darkPalette.secondary.main)};
      --secondary-hover: ${toHSL(darkPalette.secondary.hover)};
      --secondary-active: ${toHSL(darkPalette.secondary.active)};
      --secondary-foreground: ${toHSL(darkPalette.secondary.foreground)};

      --info: ${toHSL(darkPalette.info.main)};
      --info-hover: ${toHSL(darkPalette.info.hover)};
      --info-active: ${toHSL(darkPalette.info.active)};
      --info-foreground: ${toHSL(darkPalette.info.foreground)};

      --success: ${toHSL(darkPalette.success.main)};
      --success-hover: ${toHSL(darkPalette.success.hover)};
      --success-active: ${toHSL(darkPalette.success.active)};
      --success-foreground: ${toHSL(darkPalette.success.foreground)};

      --warning: ${toHSL(darkPalette.warning.main)};
      --warning-hover: ${toHSL(darkPalette.warning.hover)};
      --warning-active: ${toHSL(darkPalette.warning.active)};
      --warning-foreground: ${toHSL(darkPalette.warning.foreground)};

      --danger: ${toHSL(darkPalette.danger.main)};
      --danger-hover: ${toHSL(darkPalette.danger.hover)};
      --danger-active: ${toHSL(darkPalette.danger.active)};
      --danger-foreground: ${toHSL(darkPalette.danger.foreground)};

      --text-primary: ${toHSL(darkPalette.text.primary)};
      --text-secondary: ${toHSL(darkPalette.text.secondary)};
      --text-placeholder: ${toHSL(darkPalette.text.placeholder)};
      --text-disabled: ${toHSL(darkPalette.text.disabled)};

      --background-default: ${toHSL(darkPalette.background.default)};
      --background-card: ${toHSL(darkPalette.background.card)};
      --background-popover: ${toHSL(darkPalette.background.popover)};
      --background-muted: ${toHSL(darkPalette.background.muted)};

      --action-hover: ${toHSL(darkPalette.action.hover)};
      --action-active: ${toHSL(darkPalette.action.active)};
      --action-selected: ${toHSL(darkPalette.action.selected)};

      --accent: 217.2, 32.6%, 17.5%;
      --accent-foreground: 215, 20.2%, 65.1%;

      --divider: 217.2, 32.6%, 17.5%;
      --border: 217.2, 32.6%, 17.5%;
      --input: 217.2, 32.6%, 17.5%;
      --ring: 212.7, 26.8%, 83.9%;

      --chart-1: 220 70% 50%;
      --chart-2: 160 60% 45%;
      --chart-3: 30 80% 55%;
      --chart-4: 280 65% 60%;
      --chart-5: 340 75% 55%;
    }
  `

  return {
    cssVariables,
    darkCssVariables
  }
}