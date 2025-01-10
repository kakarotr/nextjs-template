import { RefObject, useEffect } from 'react'

export const useOutside = (callback: () => void, ref: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Element)) {
        callback()
      }
    }
    document.addEventListener('click', clickOutside)
    return () => document.removeEventListener('click', clickOutside)
  }, [ref, callback])
}