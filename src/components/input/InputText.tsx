import InputWrapper from '@components/input/InputWrapper'
import React from 'react'

type Props = {
  info: string
  name: string
  onChange: (v: string) => void
  type: 'text' | 'password' | 'email'
  value: string
}

export default function InputText({ info, name, onChange, type, value }: Props) {
  return (
    <InputWrapper name={name} info={info}>
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
