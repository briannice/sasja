import InputWrapper from '@components/input/InputWrapper'
import { Timestamp } from 'firebase/firestore'
import React, { ChangeEventHandler } from 'react'
import { dateToString } from 'src/utils/date'

type Props = {
  info: string
  name: string
  onChange: (v: Timestamp) => void
  value: Timestamp
}

export default function InputDateTime({ info, name, onChange, value }: Props) {
  const inputValue = dateToString(value.toDate(), 'YYYY-MM-DDTHH:mm')

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const date = new Date(e.target.value)
    const timestamp = Timestamp.fromDate(date)
    onChange(timestamp)
  }

  return (
    <InputWrapper name={name} info={info}>
      <input
        type="datetime-local"
        name={name}
        id={name}
        value={inputValue}
        onChange={onChangeInput}
      />
    </InputWrapper>
  )
}
