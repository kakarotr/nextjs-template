import { cva } from 'class-variance-authority'

const typographyVariants = cva(
  '',
  {
    variants: {
      variant: {
        h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        h2: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
        h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
        body: 'text-base',
        body2: 'text-sm',
        caption: 'text-xs',
        code: 'relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'
      },
      color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        info: 'text-info',
        success: 'text-success',
        warning: 'text-warning',
        danger: 'text-danger',
        textPrimary: 'text-font-primary',
        textSecondary: 'text-font-secondary',
        textPlaceholder: 'text-font-placeholder',
        textDisabled: 'text-font-disabled',
      }
    },
    defaultVariants: {
      variant: 'body',
      color: 'textPrimary'
    }
  }
)

export {
  typographyVariants
}
