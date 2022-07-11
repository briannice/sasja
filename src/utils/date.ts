import moment from 'moment'

export const dateToString = (date: Date, format: string) => {
  const result = moment(date).format(format)
  return result
}
