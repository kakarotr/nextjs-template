'use client'

import React, { ElementType, HTMLAttributes } from 'react'
import { VariantProps } from 'class-variance-authority'
import { typographyVariants } from './variants'
import { cn } from '@/lib/utils/cn'

interface TypographyProps extends Omit<HTMLAttributes<HTMLElement>, 'color'>, Omit<VariantProps<typeof typographyVariants>, 'variant'> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body2' | 'caption' | 'code'
}

function Typography(props: TypographyProps) {
  const {
    variant = 'body',
    color,
    className,
    children
  } = props

  const Comp: ElementType = (variant === 'body' ? 'p' : (variant === 'body2' || variant === 'caption') ? 'span' : variant) as ElementType

  return (
    <Comp
      className={cn(typographyVariants({ variant, color, className }))}
    >
      {children}
    </Comp>
  )
}

Typography.displayName = 'Typography'

export {
  Typography,
  TypographyProps
}
