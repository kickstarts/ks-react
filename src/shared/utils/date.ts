export const isDate = (value: any): value is Date => {
  return value instanceof Date
}

export const isBefore = (date: Date, beforeDate: Date): boolean => {
  return isDate(date) && isDate(beforeDate) && date.getTime() < beforeDate.getTime()
}

export const isAfter = (date: Date, afterDate: Date): boolean => {
  return isDate(date) && isDate(afterDate) && date.getTime() > afterDate.getTime()
}

export const isSame = (date: Date, otherDate: Date): boolean => {
  return isDate(date) && isDate(otherDate) && date.getTime() === otherDate.getTime()
}

export const isWeekend = (date: Date): boolean => {
  return isDate(date) && [0, 6].includes(date.getDay())
}

export const isWeekday = (date: Date): boolean => {
  return isDate(date) && ![0, 6].includes(date.getDay())
}

export const isToday = (date: Date): boolean => {
  return isDate(date) && isSame(date, new Date())
}

export const isTomorrow = (date: Date): boolean => {
  return isDate(date) && isSame(date, new Date(Date.now() + 86400000))
}

export const isYesterday = (date: Date): boolean => {
  return isDate(date) && isSame(date, new Date(Date.now() - 86400000))
}

export const isPast = (date: Date): boolean => {
  return isDate(date) && isBefore(date, new Date())
}

export const isFuture = (date: Date): boolean => {
  return isDate(date) && isAfter(date, new Date())
}
