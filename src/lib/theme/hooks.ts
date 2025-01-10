import { useContext } from 'react'
import { ThemeContext } from '@/lib/theme/index'
import { theme } from '@/lib/theme/theme'

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    console.warn('hooks is not used in ThemeProvider Context to return the default theme')
    return theme
  }
  return context.theme
}

const useColorScheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useColorScheme must be used within a ThemeProvider')
  }
  return {
    colorScheme: context.colorScheme,
    setColorScheme: context.setColorScheme,
  }
}

export {
  useTheme,
  useColorScheme
}
