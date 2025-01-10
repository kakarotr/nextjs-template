import * as React from 'react'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils/cn'
function CardHeader(props: ComponentProps<'div'>) {
  const {
    className,
    ref,
    ...rest
  } = props

  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...rest}
    />
  )
}

CardHeader.displayName = 'CardHeader'

export {
  CardHeader
}
