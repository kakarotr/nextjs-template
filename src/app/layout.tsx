import '@/styles/index.css'
import { LayoutProps } from '@/lib/types/next'
import { getCssVariables } from '@/lib/utils/css-variables'
import { theme, darkTheme } from '@/lib/theme/theme'
import { Noto_Sans_SC } from 'next/font/google'

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--not-sans-sc',
  display: 'swap'
})

export default function RootLayout({ children }: LayoutProps) {
  const { cssVariables, darkCssVariables } = getCssVariables(theme, darkTheme)

  return (
    <html lang="en" className={`${notoSansSC.className}`}>
      <head>
        <style>{cssVariables}</style>
        <style>{darkCssVariables}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
