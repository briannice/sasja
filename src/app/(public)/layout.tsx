import React from 'react'

import '@/styles/main.css'

interface PublicLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: PublicLayoutProps) {
  return <body>{children}</body>
}
