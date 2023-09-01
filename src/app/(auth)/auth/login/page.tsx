import { Metadata } from 'next'
import React from 'react'

import { createMetaTitle } from '@/lib/utils'

export const metadata: Metadata = {
  title: createMetaTitle('Login'),
}

export default function Home() {
  return (
    <main>
      <h1>Login</h1>
    </main>
  )
}
