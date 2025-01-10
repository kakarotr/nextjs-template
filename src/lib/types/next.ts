import { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
}

export type PageProps<T, R> = {
  params?: Promise<T>
  searchParams?: Promise<R>
}