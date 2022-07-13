import ActionButtons from '@components/admin/ActionButtons'
import AdminCollectionOverview from '@layouts/AdminCollectionOverview'
import { createNewEvent, EventDocument } from '@services/firebase/firestore/events'
import { timestampToString } from '@utils/date'
import React from 'react'

export default function EventPage() {
  return (
    <AdminCollectionOverview<EventDocument>
      collectionName="events"
      createNewDocument={createNewEvent}
      name="evenementen"
    >
      {({ documents }) => (
        <table>
          <thead>
            <tr>
              <th>Naam</th>
              <th>ID</th>
              <th>Updated</th>
              <th>Created</th>
              <th>Publiek</th>
              <th>Acties</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.name}</td>
                <td>{doc.id}</td>
                <td>{timestampToString(doc.updated, 'YYYY-MM-DD HH:mm')}</td>
                <td>{timestampToString(doc.created, 'YYYY-MM-DD HH:mm')}</td>
                <td>{doc.published}</td>
                <td>
                  <ActionButtons
                    deleteHandler={() => console.log('Delete')}
                    editLink={`/admin/evenementen/${doc.id}`}
                    viewLink={`/evenementen/${doc.id}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminCollectionOverview>
  )
}

EventPage.Layout = 'admin'
