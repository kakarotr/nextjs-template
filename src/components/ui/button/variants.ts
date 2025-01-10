import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 min-w-16 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      color: {
        primary:
          'text-primary bg-primary border-primary hover:bg-primary-hover active:bg-primary-active hover:border-primary-hover active:border-primary-active hover:text-primary-hover active:text-primary-active',
        secondary:
          'text-secondary bg-secondary border-secondary hover:bg-secondary-hover active:bg-secondary-active hover:border-secondary-hover active:border-secondary-active hover:text-secondary-hover active:text-secondary-active',
        info:
          'text-info bg-info border-info hover:bg-info-hover active:bg-info-active hover:border-info-hover active:border-info-active hover:text-info-hover active:text-info-active',
        success:
          'text-success bg-success border-success hover:bg-success-hover active:bg-success-active hover:border-success-hover active:border-success-active hover:text-success-hover active:text-success-active',
        warning:
          'text-warning bg-warning border-warning hover:bg-warning-hover active:bg-warning-active hover:border-warning-hover active:border-warning-active hover:text-warning-hover active:text-warning-active',
        danger:
          'text-danger bg-danger border-danger hover:bg-danger-hover active:bg-danger-active hover:border-danger-hover active:border-danger-active hover:text-danger-hover active:text-danger-active',
        blank:
          ''
      },
      variant: {
        standard:
          'bg-transparent',
        outline:
          'border-2 bg-background-default hover:bg-background-default active:bg-background-default',
        contained:
          'text-primary-foreground hover:text-primary-foreground active:text-primary-foreground',
        link: 'min-w-0 bg-transparent hover:bg-transparent active:bg-transparent',
      },
      size: {
        small: 'min-w-14 h-7 px-2 text-xs [&_svg]:size-3',
        medium: 'h-8 px-4 [&_svg]:size-4',
        large: 'h-10 px-6 text-base [&_svg]:size-5'
      },
      icon: {
        true: 'min-w-0',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'standard',
      color: 'primary',
      size: 'medium',
      icon: false
    },
    compoundVariants: [
      {
        variant: 'standard',
        color: 'primary',
        className: 'hover:bg-primary-10 active:bg-primary-20 active:text-primary'
      },
      {
        variant: 'standard',
        color: 'secondary',
        className: 'hover:bg-secondary-10 active:bg-secondary-20 active:text-secondary'
      },
      { variant: 'standard', color: 'info', className: 'hover:bg-info-10 active:bg-info-20 active:text-info' },
      {
        variant: 'standard',
        color: 'success',
        className: 'hover:bg-success-10 active:bg-success-20 active:text-success'
      },
      {
        variant: 'standard',
        color: 'warning',
        className: 'hover:bg-warning-10 active:bg-warning-20 active:text-warning'
      },
      { variant: 'standard', color: 'danger', className: 'hover:bg-danger-10 active:bg-danger-20 active:text-danger' },
      { icon: true, size: 'small', className: 'size-7 p-0' },
      { icon: true, size: 'medium', className: 'size-8 p-0' },
      { icon: true, size: 'large', className: 'size-10 p-0' },
      { variant: 'link', size: 'small', className: 'h-auto' },
      { variant: 'link', size: 'medium', className: 'h-auto' },
      { variant: 'link', size: 'large', className: 'h-auto' },
      { variant: 'outline', color: 'blank', className: 'border hover:bg-action-hover active:bg-action-active' }
    ]
  }
)

export {
  buttonVariants
}
