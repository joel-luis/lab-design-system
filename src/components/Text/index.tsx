import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Text({ children, size = 'md', asChild }: TextProps) {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      className={clsx('text-gray-100', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg'
      })}
    >
      {children}
    </Comp>
  )
}
