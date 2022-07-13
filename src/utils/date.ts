import { Timestamp } from 'firebase/firestore'
import moment from 'moment'

export const dateToString = (date: Date, format: string) => {
  const result = moment(date).format(format)
  return result
}

export const timestampToString = (timestamp: Timestamp, format: string) => {
  const result = moment(timestamp.toDate()).format(format)
  return result
}
