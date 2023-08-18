import React from 'react'

import { inter } from '@/lib/font'
import { cn } from '@/lib/utils'

import '@/styles/main.css'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="nl" className={cn(inter.variable)}>
      {children}
    </html>
  )
}
