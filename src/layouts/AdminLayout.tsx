import Link from '@components/Link'
import Loading from '@components/Loading'
import { adminLinks } from '@data/adminLinks'
import { GlobeAltIcon, LogoutIcon } from '@heroicons/react/outline'
import { auth } from '@services/firebase'
import clsx from 'clsx'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { MouseEventHandler } from 'react'

type Props = {
  children: ReactNode
}

export default function AdminLayout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoading(false)
      } else {
        router.replace('/admin/login')
      }
    })
  }, [router])

  const logOutHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    signOut(auth)
  }

  if (isLoading) return <Loading />

  return (
    <div className="grid h-screen grid-cols-[300px_1fr]">
      <aside className="flex flex-col border-r border-medium bg-light py-8">
        <div className="px-8">
          <figure className="relative aspect-square w-20">
            <Image src="/logo.png" alt="logo sasja" layout="fill" objectFit="contain" />
          </figure>
          <p className="mt-4 font-exo text-3xl">Sasja Admin</p>
          <span className="mt-8 block h-0.5 rounded-full bg-medium px-8" />
        </div>
        <ul className="mt-8">
          {adminLinks.map((link) => {
            const isSelected = router.asPath.startsWith(link.href)
            return (
              <li key={link.name} className="group">
                <Link
                  href={link.href}
                  className={clsx(
                    'flex items-center space-x-4 px-8 py-2.5',
                    isSelected ? 'bg-primary' : 'group-hover:bg-medium'
                  )}
                >
                  <link.icon
                    className={clsx('h-6 w-6', isSelected ? 'text-white' : 'text-primary')}
                  />
                  <span className={clsx('font-exo', isSelected ? 'text-white' : 'text-black')}>
                    {link.name}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="mt-auto space-y-4 px-8">
          <Link href="/" className="btn btn-primary btn-text-icon w-full justify-between">
            <span>Website</span>
            <GlobeAltIcon />
          </Link>
          <button
            onClick={logOutHandler}
            className="btn btn-primary btn-text-icon w-full justify-between"
          >
            <span>Uitloggen</span>
            <LogoutIcon />
          </button>
        </div>
      </aside>
      <main className="relative p-8">{children}</main>
    </div>
  )
}
