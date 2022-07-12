import AdminLayout from '@layouts/AdminLayout'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'

import '@styles/main.css'

type NextPageWithLayout = NextPage & {
  Layout?: string | undefined
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.Layout === 'admin') {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    )
  }
  return <Component {...pageProps} />
}
