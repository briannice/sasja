import { Metadata } from 'next'
import React from 'react'

import { createMetaTitle } from '@/lib/utils'

export const metadata: Metadata = {
  title: createMetaTitle('Home'),
}

export default async function Home() {
  return (
    <main className="container bg-primary">
      <h1>Public</h1>
    </main>
  )
}
