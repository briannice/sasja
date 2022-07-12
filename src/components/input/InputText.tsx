import InputWrapper from '@components/input/InputWrapper'
import React from 'react'

type Props = {
  name: string
  onChange: (v: string) => void
  type: 'text' | 'password' | 'email'
  value: string
  className?: string | undefined
  info?: string | undefined
}

export default function InputText({ name, onChange, type, value, className, info }: Props) {
  return (
    <InputWrapper name={name} info={info} className={className}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputWrapper>
  )
}
