'use client'

import * as React from 'react'
import { ReactNode, RefObject, useCallback, useEffect, useRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils/cn'
import { LoaderCircle } from 'lucide-react'
import { buttonVariants } from './variants'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Omit<VariantProps<typeof buttonVariants>, 'icon' | 'variant'> {
  ref?: RefObject<HTMLButtonElement>
  asChild?: boolean
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'blank'
  variant?: 'standard' | 'outline' | 'contained' | 'link'
  leading?: ReactNode
  trailing?: ReactNode
  loading?: boolean
  icon?: ReactNode
}

function Button(props: ButtonProps) {
  const {
    asChild = false,
    variant = 'standard',
    color = 'primary',
    size,
    leading,
    trailing,
    children,
    loading,
    className,
    icon,
    ref: outerRef,
    ...rest
  } = props
  const innerRef = useRef<HTMLButtonElement | null>(null)
  const ref = outerRef || innerRef

  const addClassName = useCallback((ref: HTMLButtonElement) => {
    ref.classList.remove('wave')
    ref.classList.remove(`${color}-wave-active`)
    ref.classList.add('wave')
    ref.classList.add(`${color}-wave-active`)
    setTimeout(() => {
      ref.classList.remove('wave')
      ref.classList.remove(`${color}-wave-active`)
    }, 600)
  }, [color])

  useEffect(() => {
    if ((variant === 'contained' || variant === 'outline') && color !== 'blank') {
      const buttonRef = innerRef.current
      if (buttonRef) {
        buttonRef.addEventListener('click', () => addClassName(buttonRef))
      }
      return () => {
        if (buttonRef) buttonRef.removeEventListener('click', () => addClassName(buttonRef))
      }
    }
  }, [variant, addClassName, ref, innerRef])

  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, color, size, icon: icon !== undefined, className }))}
      ref={ref}
      disabled={loading}
      {...rest}
    >
      {loading ? <LoaderCircle className={'animate-spin'}/> : leading}
      {icon || children}
      {trailing}
    </Comp>
  )
}

Button.displayName = 'Button'

export {
  Button,
  type ButtonProps
}
