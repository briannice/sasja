import AdminDocumentEdit from '@layouts/AdminDocumentEdit'
import React from 'react'

export default function EventEditPage() {
  return (
    <AdminDocumentEdit collectionName="events" name="Evenement aanpassen">
      <h1>LOL</h1>
    </AdminDocumentEdit>
  )
}

EventEditPage.Layout = 'admin'
