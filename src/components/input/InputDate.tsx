import InputWrapper from '@components/input/InputWrapper'
import { Timestamp } from 'firebase/firestore'
import React, { ChangeEventHandler } from 'react'
import { dateToString } from 'src/utils/date'

type Props = {
  info: string
  name: string
  onChange: (v: Timestamp) => void
  value: Timestamp
  className?: string | undefined
}

export default function InputDate({ info, name, onChange, value, className }: Props) {
  const inputValue = dateToString(value.toDate(), 'YYYY-MM-DD')

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const date = new Date(e.target.value)
    const timestamp = Timestamp.fromDate(date)
    onChange(timestamp)
  }

  return (
    <InputWrapper name={name} info={info} className={className}>
      <input type="date" name={name} id={name} value={inputValue} onChange={onChangeInput} />
    </InputWrapper>
  )
}
