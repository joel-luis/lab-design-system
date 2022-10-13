import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export interface InputRootProps {
  children: ReactNode
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 h-12 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  )
}

function InputIcon({ children }: InputRootProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
}

function Input(props: InputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-xs outline-none placeholder:text-gray-400 text-gray-100  "
      {...props}
    />
  )
}

export const TextInput = {
  Root: InputRoot,
  Input,
  Icon: InputIcon
}
