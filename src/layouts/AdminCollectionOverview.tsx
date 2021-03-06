import Loading from '@components/Loading'
import { DocumentAddIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { db } from '@services/firebase'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'

type ChildProps<T> = {
  documents: T[]
}

type Props<T> = {
  children: (props: ChildProps<T>) => ReactNode
  collectionName: string
  createNewDocument: () => Promise<string>
  name: string
}

export default function AdminCollectionOverview<T>({
  children,
  collectionName,
  createNewDocument,
  name,
}: Props<T>) {
  const [documents, setDocuments] = useState<T[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMoreDocuments, setHasMoreDocuments] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getDocs(
        query(collection(db, collectionName), orderBy('updated', 'desc'), limit(10))
      )

      const result: T[] = []
      docs.forEach((doc) => result.push({ id: doc.id, ...doc.data() } as unknown as T))

      setDocuments(result)
      if (result.length < 10) setHasMoreDocuments(false)
      setIsLoading(false)
    }

    fetchDocuments()
  }, [collectionName])

  const createNewDocumentHandler = async () => {
    const id = await createNewDocument()
    router.push(`${name}/${id}`)
  }

  if (isLoading || !documents) return <Loading />

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl capitalize">{name}</h1>
        <button onClick={createNewDocumentHandler} className="btn btn-primary btn-text-icon">
          <span>Nieuw</span>
          <DocumentAddIcon />
        </button>
      </div>

      <div className="mt-8">{children({ documents })}</div>

      {hasMoreDocuments && (
        <div className="mt-8 flex justify-center">
          <button className="btn btn-primary btn-text-icon">
            <span>Meer</span>
            <PlusCircleIcon />
          </button>
        </div>
      )}
    </>
  )
}
