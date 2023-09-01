import React from 'react'

import AuthGuard from '@/components/auth/AuthGuard'

import '@/styles/main.css'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: DashboardLayoutProps) {
  return (
    <body>
      <AuthGuard redirectTo="/auth/login" type="authenticated">
        {children}
      </AuthGuard>
    </body>
  )
}
