import * as React from 'react'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils/cn'

function CardDescription(props: ComponentProps<'div'>) {
  const {
    className,
    ref,
    ...rest
  } = props

  return (
    <div
      ref={ref}
      className={cn('text-sm text-font-secondary', className)}
      {...rest}
    />
  )
}

CardDescription.displayName = 'CardDescription'

export {
  CardDescription
}
