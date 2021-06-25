import moment from 'moment'

export const cDateFormat = 'YYYY-MM-DD'

export const cDateCzechFormat = 'DD.MM.YYYY'

export const cTimeFormat = 'HH:mm:ss'

export const cTimeCzechFormat = 'HH:mm'

export const cToday = moment().format(cDateFormat)

export const cFutureDate = moment().add(100, 'years').format(cDateFormat)
