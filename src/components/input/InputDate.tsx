import InputWrapper from '@components/input/InputWrapper'
import { dateToString } from '@utils/date'
import { Timestamp } from 'firebase/firestore'
import React, { ChangeEventHandler } from 'react'

type Props = {
  name: string
  onChange: (v: Timestamp) => void
  value: Timestamp
  className?: string | undefined
  info?: string | undefined
}

export default function InputDate({ name, onChange, value, className, info }: Props) {
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
