import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { Palette } from '@/lib/theme/palette'
import { darkTheme, theme } from '@/lib/theme/theme'
import { setCssVariables } from '@/lib/utils/css-variables'
import { Shape } from '@/lib/theme/shape'

interface Theme {
  palette: Palette
  shape: Shape
}

type ColorScheme = 'light' | 'dark' | 'system'

interface ThemeProviderState {
  theme: Theme
  colorScheme: ColorScheme
  setColorScheme: (color: ColorScheme) => void
}

const initialState: ThemeProviderState = {
  theme: theme,
  colorScheme: 'system',
  setColorScheme: () => null
}

const ThemeContext = createContext<ThemeProviderState>(initialState)

interface ThemeProviderProps {
  theme: Theme
  darkTheme: Theme
  children: ReactNode
}

setCssVariables(theme, darkTheme)

const ThemeProvider = (props: ThemeProviderProps) => {
  const {
    theme,
    darkTheme,
    children
  } = props

  const [colorScheme, setColorScheme] = useState<ColorScheme>(initialState.colorScheme)

  useEffect(() => setCssVariables(theme, darkTheme), [theme, darkTheme])
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    if (colorScheme === 'system') {
      const systemScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemScheme)
      return
    }
    root.classList.add(colorScheme)
  }, [colorScheme])

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  Theme,
  ColorScheme,
  ThemeContext,
  ThemeProvider,
}
