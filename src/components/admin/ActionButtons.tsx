import Link from '@components/Link'
import { ExternalLinkIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {
  deleteHandler: () => void
  editLink: string
  viewLink: string
}

export default function ActionButtons({ deleteHandler, editLink, viewLink }: Props) {
  return (
    <div className="flex space-x-2">
      <Link href={viewLink} className="rounded-full bg-info p-1">
        <ExternalLinkIcon className="h-4 w-4 text-white" />
      </Link>
      <Link href={editLink} className="rounded-full bg-warning p-1">
        <PencilIcon className="h-4 w-4 text-white" />
      </Link>
      <button onClick={deleteHandler} className="rounded-full bg-error p-1">
        <TrashIcon className="h-4 w-4 text-white" />
      </button>
    </div>
  )
}
