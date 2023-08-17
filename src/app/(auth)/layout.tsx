import React from 'react'

import '@/styles/main.css'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: AuthLayoutProps) {
  return <body>{children}</body>
}
