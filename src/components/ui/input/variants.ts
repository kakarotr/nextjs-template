import { cva } from 'class-variance-authority'

const inputVariants = cva(
  'relative flex h-9 w-full px-0 bg-transparent text-font-primary font-normal transition duration-200 file:border-0 file:bg-transparent file:font-medium file:text-font-primary placeholder:text-font-placeholder hover:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        outline: 'rounded-md border border-input',
        filled: 'rounded-md border border-neutral-100 bg-neutral-100 hover:bg-neutral-200 hover:border-neutral-200',
        standard: ''
      },
      size: {
        small: 'h-7 text-xs file:text-xs placeholder:text-xs',
        medium: 'h-8 text-sm file:text-sm placeholder:text-sm',
        large: 'h-10 text-base file:text-base placeholder:text-base',
      },
      addon: {
        none: '',
        all: 'rounded-none',
        leading: 'rounded-l-none',
        trailing: 'rounded-r-none'
      }
    },
    defaultVariants: {
      variant: 'outline',
      size: 'medium',
      addon: 'none'
    }
  }
)

const textFieldVariants = cva(
  'w-full h-full px-3 rounded-md bg-background-default text-left transition duration-200 focus-visible:outline-none',
  {
    variants: {
      variant: {
        outline: '',
        filled: 'bg-transparent',
        standard: 'px-0 rounded-none border-0 border-b-[1.5px] border-border hover:border-primary'
      }
    },
    defaultVariants: {
      variant: 'outline'
    }
  }
)

const textAddonVariants = cva(
  'flex items-center px-2 border border-border rounded-md bg-[hsla(var(--foreground-default),0.03)] text-[hsla(var(--text-primary),0.78)] cursor-default',
  {
    variants: {
      size: {
        small: 'h-7 text-xs',
        medium: 'h-8 text-sm',
        large: 'h-10 text-base',
      },
      placement: {
        leading: 'rounded-r-none border-r-0',
        trailing: 'rounded-l-none border-l-0'
      }
    },
    defaultVariants: {
      size: 'medium',
      placement: 'leading'
    }
  }
)

const elementAddonVariants = cva(
  '',
  {
    variants: {
      size: {
        small: 'min-w-14 h-7 px-2 text-xs',
        medium: 'h-8 px-4',
        large: 'h-10 px-6',
      },
      isOutline: {
        true: 'border border-input',
        false: ''
      },
      placement: {
        leading: 'rounded-r-none border-r-0',
        trailing: 'rounded-l-none border-l-0'
      }
    },
    defaultVariants: {
      size: 'medium',
      placement: 'leading',
      isOutline: false
    }
  }
)

export {
  inputVariants,
  textFieldVariants,
  textAddonVariants,
  elementAddonVariants,
}
