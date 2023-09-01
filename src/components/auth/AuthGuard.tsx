'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/services/firebase/config'

type AutheticationType = 'authenticated' | 'public'

interface AuthGuardProps {
  children: React.ReactNode
  redirectTo: string
  type: AutheticationType
}

export default function AuthGuard({ children, redirectTo, type }: AuthGuardProps) {
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && type === 'authenticated') {
        setIsLoading(false)
      } else if (!user && type === 'public') {
        setIsLoading(false)
      } else {
        router.replace(redirectTo)
      }
    })
  }, [router, redirectTo, type])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return <>{children}</>
}
