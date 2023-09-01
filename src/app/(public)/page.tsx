import { Metadata } from 'next'
import React from 'react'

import Button from '@/components/ui/Button'

import { createMetaTitle } from '@/lib/utils'

export const metadata: Metadata = {
  title: createMetaTitle('Home'),
}

export default async function Home() {
  return (
    <main className="py-32 container flex flex-col items-start space-y-8">
      <Button>Hello Sasja</Button>
      <Button variant="secondary">Hello Sasja</Button>
      <Button variant="tertiary">Hello Sasja</Button>
      <Button variant="info">Hello Sasja</Button>
      <Button variant="success">Hello Sasja</Button>
      <Button variant="error">Hello Sasja</Button>
      <Button variant="warning">Hello Sasja</Button>
      <Button variant="link">Hello Sasja</Button>
    </main>
  )
}
