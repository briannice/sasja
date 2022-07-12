import AdminCollectionOverview from '@layouts/AdminCollectionOverview'
import React from 'react'

export default function EventPage() {
  return (
    <AdminCollectionOverview collectionName="events" name="Evenementen">
      {({}) => (
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
            {[0, 0, 0, 0].map((v) => (
              <tr key={v}>
                <td>My title</td>
                <td>Ieh45U5UffU9</td>
                <td>20/06/22 15:45</td>
                <td>20/06/22 15:45</td>
                <td>No</td>
                <td>ok</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminCollectionOverview>
  )
}

EventPage.Layout = 'admin'
