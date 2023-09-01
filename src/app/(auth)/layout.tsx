import React from 'react'

import AuthGuard from '@/components/auth/AuthGuard'

import '@/styles/main.css'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: AuthLayoutProps) {
  return (
    <body>
      <AuthGuard redirectTo="/dashboard" type="public">
        {children}
      </AuthGuard>
    </body>
  )
}
