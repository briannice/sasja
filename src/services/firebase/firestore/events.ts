import { db } from '@services/firebase'
import { addDoc, collection, Timestamp } from 'firebase/firestore'

export type EventDocument = {
  id: string
  name: string
  content: string
  start: Timestamp
  end: Timestamp | null
  published: boolean
  created: Timestamp
  updated: Timestamp
}

export const createNewEvent = async () => {
  const event = {
    name: '',
    content: '',
    start: Timestamp.now(),
    end: null,
    published: false,
    created: Timestamp.now(),
    updated: Timestamp.now(),
  }

  const result = await addDoc(collection(db, 'events'), event)
  return result.id
}
