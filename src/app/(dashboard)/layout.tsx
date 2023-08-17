import React from 'react'

import '@/styles/main.css'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: DashboardLayoutProps) {
  return <body>{children}</body>
}
