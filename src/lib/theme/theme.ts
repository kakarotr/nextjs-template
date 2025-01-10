import { Theme } from '@/lib/theme/index'

const theme: Theme = {
  palette: {
    primary: {
      hover: '#4782ff',
      main: '#145bff',
      active: '#0b46da',
      foreground: '#f8fafc'
    },
    secondary: {
      hover: '#8d4eda',
      main: '#722ed1',
      active: '#551daf',
      foreground: '#f8fafc'
    },
    info: {
      hover: '#3296fb',
      main: '#0079fa',
      active: '#206ccf',
      foreground: '#f8fafc'
    },
    success: {
      hover: '#22c343',
      main: '#00b32a',
      active: '#009929',
      foreground: '#f8fafc'
    },
    warning: {
      hover: '#ff9a2e',
      main: '#ff7b00',
      active: '#d15e00',
      foreground: '#f8fafc'
    },
    danger: {
      hover: '#f7645f',
      main: '#f53d3d',
      active: '#c9262c',
      foreground: '#f8fafc'
    },
    text: {
      primary: '#020617',
      secondary: '#a3a3a3',
      placeholder: '#b0b0b0',
      disabled: '#b0b0b0'
    },
    background: {
      default: '#ffffff',
      card: '#ffffff',
      popover: '#ffffff',
      muted: '#f1f5f9'
    },
    action: {
      hover: '#f3f4f6',
      active: '#e5e7eb',
      selected: '#e5e7eb'
    }
  },
  shape: {
    borderRadius: '0.5rem'
  }
}

const darkTheme: Theme = {
  palette: {
    primary: {
      hover: '#0077fa',
      main: '#3295fb',
      active: '#65b2fc',
      foreground: '#020617'
    },
    secondary: {
      hover: '#8b5cf6',
      main: '#a07cf8',
      active: '#b59cfa',
      foreground: '#020617'
    },
    info: {
      hover: '#2997ff',
      main: '#52aeff',
      active: '#80c6ff',
      foreground: '#020617'
    },
    success: {
      hover: '#43b33d',
      main: '#63c15c',
      active: '#86d180',
      foreground: '#020617'
    },
    warning: {
      hover: '#ff7e14',
      main: '#ff9a42',
      active: '#ffba70',
      foreground: '#020617'
    },
    danger: {
      hover: '#fb3532',
      main: '#fc625a',
      active: '#fd8c81',
      foreground: '#020617'
    },
    text: {
      primary: '#f8fafc',
      secondary: '#f9fafb',
      placeholder: '#fafaf9',
      disabled: '#fafaf9'
    },
    action: {
      hover: '#384252',
      active: '#1f2937',
      selected: '#1f2937'
    },
    background: {
      default: '#020713',
      card: '#020713',
      popover: '#020713',
      muted: '#242424'
    }
  },
  shape: {
    borderRadius: '0.5rem',
  }
}

export {
  theme,
  darkTheme
}
