'use client'

import * as React from 'react'
import {
  cloneElement,
  ComponentProps,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react'
import { cn } from '@/lib/utils/cn'
import { VariantProps } from 'class-variance-authority'
import { useOutside } from '@/lib/hooks/useOutside'
import { Button } from '@/components/ui/button/button'
import {
  elementAddonVariants,
  inputVariants,
  textAddonVariants,
  textFieldVariants
} from './variants'

interface InputProps extends Omit<ComponentProps<'input'>, 'size'>, VariantProps<typeof inputVariants> {
  leading?: string | ReactNode
  trailing?: string | ReactNode
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  onValueChange?: (value: string) => void
}

function Input(props: InputProps) {
  const {
    className,
    variant = 'outline',
    size = 'medium',
    leading,
    trailing,
    leadingIcon,
    trailingIcon,
    onValueChange,
    ref: outerRef,
    ...rest
  } = props

  const divRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLInputElement>(null)
  const ref = outerRef || innerRef
  const addClassName = () => {
    divRef.current?.classList.add(`${variant}-input-focus`)
  }
  useOutside(() => {
    divRef.current?.classList.remove(`${variant}-input-focus`)
  }, divRef)
  useEffect(() => {
    const innerRef = divRef.current
    if (innerRef) {
      innerRef.addEventListener('click', addClassName)
    }
    return () => {
      if (innerRef) innerRef.removeEventListener('click', addClassName)
    }
  }, [divRef])

  const iconSize = useMemo(() => {
    switch (size) {
      case 'small':
        return 16
      case 'medium':
        return 18
      case 'large':
        return 20
      default:
        return 18
    }
  }, [size])

  const onFocus = () => {
    const reference = ref as RefObject<HTMLInputElement>
    reference.current.focus()
  }

  const renderIcon = useCallback((icon: ReactNode) => {
    if (isValidElement(icon)) {
      return cloneElement(icon as ReactElement<HTMLInputElement>, { size: iconSize, className: 'bg-background-default' })
    }
    return icon
  }, [iconSize])

  const renderAddon = (element: string | ReactNode, placement: 'leading' | 'trailing'): ReactElement => {
    if (typeof element === 'string') {
      return (
        <span className={cn(textAddonVariants({ size, placement }))}>{element}</span>
      )
    } else {
      if (isValidElement(element)) {
        if (element.type === Button) {
          return cloneElement(element as ReactElement<HTMLElement>, {
            className: cn(elementAddonVariants({
              size,
              placement,
              isOutline: (element.props as any).variant === 'outline'
            }))
          })
        }
      }
      return (
        <span>{element}</span>
      )
    }
  }

  const clearPosition = useMemo(() => {
    if (leading && trailing) {
      return 'all'
    } else if (leading) {
      return 'leading'
    } else if (trailing) {
      return 'trailing'
    } else {
      return 'none'
    }
  }, [leading, trailing])


  const TextField = useMemo(() => (
    <div
      ref={divRef}
      className={cn(inputVariants({ variant, size, addon: clearPosition, className }))}
    >
      {leadingIcon && (
        <div className={'flex items-center pl-2 rounded-l-md text-font-placeholder bg-background-default'} onClick={onFocus}>
          {renderIcon(leadingIcon)}
        </div>
      )}
      <input
        type={'text'}
        className={cn(textFieldVariants({ variant }))}
        ref={ref}
        onChange={evt => onValueChange?.(evt.target.value)}
        {...rest}
      />
      {trailingIcon && (
        <div className={'flex items-center pr-2 rounded-r-md text-font-placeholder bg-background-default'} onClick={onFocus}>
          {renderIcon(trailingIcon)}
        </div>
      )}
    </div>
  ), [className, clearPosition, leadingIcon, ref, renderIcon, rest, size, trailingIcon, variant])

  if (leading === undefined && trailing === undefined) {
    return TextField
  }

  return (
    <div className={'flex items-center'}>
      {leading && renderAddon(leading, 'leading')}
      {TextField}
      {trailing && renderAddon(trailing, 'trailing')}
    </div>
  )
}

Input.displayName = 'Input'

export {
  Input,
  type InputProps
}
