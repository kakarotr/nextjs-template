import * as React from 'react'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils/cn'

function CardContent(props: ComponentProps<'div'>) {
  const {
    className,
    ref,
    ...rest
  } = props

  return (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...rest} />
  )
}

CardContent.displayName = 'CardContent'

export {
  CardContent
}
