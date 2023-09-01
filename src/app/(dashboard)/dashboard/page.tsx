import { Metadata } from 'next'
import React from 'react'

import { createMetaTitle } from '@/lib/utils'

export const metadata: Metadata = {
  title: createMetaTitle('Dashboard'),
}

export default function Home() {
  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  )
}
