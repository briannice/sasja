import clsx from 'clsx'
import NextLink from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  href: string
  children?: ReactNode | undefined
  className?: string | undefined
}

export default function Link({ href, children, className }: Props) {
  return (
    <NextLink href={href}>
      <a className={clsx(className)}>{children}</a>
    </NextLink>
  )
}
