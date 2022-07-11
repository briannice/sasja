import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import React, { ReactNode } from 'react'
import { useState } from 'react'

type Props = {
  children: ReactNode
  info: string
  name: string
}

export default function InputWrapper({ children, info, name }: Props) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="relative grid grid-cols-2 gap-2">
      <label htmlFor={name} className="block font-exo">
        {name}
      </label>
      <div className="flex items-center justify-end">
        <QuestionMarkCircleIcon
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
          className="h-4 w-4 text-primary"
        />
      </div>
      {showInfo && (
        <p className="absolute left-2 right-6 rounded-lg border border-medium bg-white p-1 text-xs text-dark shadow">
          {info}
        </p>
      )}
      <div className="col-span-2">{children}</div>
    </div>
  )
}
