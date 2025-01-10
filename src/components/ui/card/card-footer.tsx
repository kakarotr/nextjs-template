import * as React from 'react'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils/cn'

function CardFooter(props: ComponentProps<'div'>) {
  const {
    className,
    ref,
    ...rest
  } = props

  return (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...rest}
    />
  )
}

CardFooter.displayName = 'CardFooter'

export {
  CardFooter
}
