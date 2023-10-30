export const isNumber = (value: any): value is number => {
  return typeof value === 'number' && !isNaN(value)
}

export const isInteger = (value: any): value is number => {
  return isNumber(value) && Number.isInteger(value)
}

export const isFloat = (value: any): value is number => {
  return isNumber(value) && !Number.isInteger(value)
}

export const isPositive = (value: any): value is number => {
  return isNumber(value) && value > 0
}

export const isNegative = (value: any): value is number => {
  return isNumber(value) && value < 0
}

export const isZero = (value: any): value is number => {
  return isNumber(value) && value === 0
}

export const isOdd = (value: any): value is number => {
  return isInteger(value) && value % 2 !== 0
}

export const isEven = (value: any): value is number => {
  return isInteger(value) && value % 2 === 0
}

export const isDivisibleBy = (value: any, divisor: number): boolean => {
  return isInteger(value) && value % divisor === 0
}
