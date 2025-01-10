import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'input-focus': '0 0 0 2px'
      },
      colors: {
        background: {
          default: 'hsl(var(--background-default))',
          card: 'hsl(var(--background-card))',
          popover: 'hsl(var(--background-popover))',
          muted: 'hsl(var(--background-muted))'
        },
        font: {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          placeholder: 'hsl(var(--text-placeholder))',
          disabled: 'hsl(var(--text-disabled))'
        },
        primary: {
          '10': 'hsla(var(--primary), 0.1)',
          '20': 'hsla(var(--primary), 0.2)',
          DEFAULT: 'hsl(var(--primary))',
          hover: 'hsl(var(--primary-hover))',
          active: 'hsl(var(--primary-active))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          '10': 'hsla(var(--secondary), 0.1)',
          '20': 'hsla(var(--secondary), 0.2)',
          DEFAULT: 'hsl(var(--secondary))',
          hover: 'hsl(var(--secondary-hover))',
          active: 'hsl(var(--secondary-active))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        info: {
          '10': 'hsla(var(--info), 0.1)',
          '20': 'hsla(var(--info), 0.2)',
          DEFAULT: 'hsl(var(--info))',
          hover: 'hsl(var(--info-hover))',
          active: 'hsl(var(--info-active))',
          foreground: 'hsl(var(--info-foreground))'
        },
        success: {
          '10': 'hsla(var(--success), 0.1)',
          '20': 'hsla(var(--success), 0.2)',
          DEFAULT: 'hsl(var(--success))',
          hover: 'hsl(var(--success-hover))',
          active: 'hsl(var(--success-active))',
          foreground: 'hsl(var(--success-foreground))'
        },
        warning: {
          '10': 'hsla(var(--warning), 0.1)',
          '20': 'hsla(var(--warning), 0.2)',
          DEFAULT: 'hsl(var(--warning))',
          hover: 'hsl(var(--warning-hover))',
          active: 'hsl(var(--warning-active))',
          foreground: 'hsl(var(--warning-foreground))'
        },
        danger: {
          '10': 'hsla(var(--danger), 0.1)',
          '20': 'hsla(var(--danger), 0.2)',
          DEFAULT: 'hsl(var(--danger))',
          hover: 'hsl(var(--danger-hover))',
          active: 'hsl(var(--danger-active))',
          foreground: 'hsl(var(--danger-foreground))'
        },
        action: {
          hover: 'hsl(var(--action-hover))',
          active: 'hsl(var(--action-active))',
          selected: 'hsl(var(--action-selected))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        divider: 'hsl(var(--divider))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')]
} satisfies Config
