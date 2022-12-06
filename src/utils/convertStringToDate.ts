import dayjs from 'dayjs'

const convertDateToString = (date: string) => dayjs(date).format('MMMM D, YYYY')

export default convertDateToString
