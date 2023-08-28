import React from 'react'

import { kanit, roboto } from '@/lib/font'
import { cn } from '@/lib/utils'

import '@/styles/main.css'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="nl" className={cn(kanit.variable, roboto.variable)}>
      {children}
    </html>
  )
}
