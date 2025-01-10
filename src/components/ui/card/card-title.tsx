import * as React from 'react'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils/cn'

function CardTitle(props: ComponentProps<'div'>) {
  const {
    className,
    ref,
    ...rest
  } = props

  return (
    <div
      ref={ref}
      className={cn('font-semibold leading-none tracking-tight', className)}
      {...rest}
    />
  )
}

CardTitle.displayName = 'CardTitle'

export {
  CardTitle
}
