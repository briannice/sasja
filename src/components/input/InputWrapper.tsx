import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { useState } from 'react'

type Props = {
  children: ReactNode
  name: string
  className?: string | undefined
  info?: string | undefined
}

export default function InputWrapper({ children, name, className, info }: Props) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className={clsx('relative grid grid-cols-2 gap-2', className)}>
      <label htmlFor={name} className="block font-exo">
        {name}
      </label>
      {info && (
        <>
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
        </>
      )}
      <div className="col-span-2">{children}</div>
    </div>
  )
}
