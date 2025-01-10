import * as React from 'react'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils/cn'

function Card(props: ComponentProps<'div'>) {
  const {
    className,
    ref,
    ...rest
  } = props

  return (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border bg-background-card text-card-foreground shadow',
        className
      )}
      {...rest}
    />
  )
}

Card.displayName = 'Card'

export {
  Card
}
