import Link from '@components/Link'
import Loading from '@components/Loading'
import { ChevronLeftIcon } from '@heroicons/react/outline'
import { db } from '@services/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'

type ChildProps<T> = {
  document: T
}

type Props<T> = {
  children: (props: ChildProps<T>) => ReactNode
  collectionName: string
  name: string
}

export default function AdminDocumentEdit<T>({ collectionName, name }: Props<T>) {
  const [document, setDocument] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()
  const url = router.asPath
  const { id } = router.query

  useEffect(() => {
    const fetchDocument = async () => {
      const result = await getDoc(doc(db, 'events', id as string))
      setDocument({ ...result.data() } as T)
      setIsLoading(false)
    }

    fetchDocument()
  }, [collectionName, id])

  if (isLoading || !document) return <Loading />

  return (
    <>
      <h1 className="text-3xl">{name}</h1>
      <div className="mt-8 flex">
        <Link href={url.substring(0, url.lastIndexOf('/'))} className="btn btn-icon btn-primary">
          <ChevronLeftIcon className="h-5 w-5" />
        </Link>
      </div>
    </>
  )
}
