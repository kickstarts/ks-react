// ----------------------------------------------
// String Utils
// ----------------------------------------------

// Uppercase (for specific font family uses and RNA version < 0.53)
export const _upper = str => str.toUpperCase()

// Lowercase (for specific font family uses)
export const _lower = str => str.toLowerCase()


// ----------------------------------------------
// Object Utils
// ----------------------------------------------

// Check if object exists
export const _exists = prop => ( prop !== null || prop !== undefined || (prop.constructor === Object && Object.keys(prop).length !== 0) )

// Check if is and object
export const _object = prop => ( prop === null || prop === undefined || (prop.hasOwnProperty('length') && prop.length === 0) || (prop.constructor === Object && Object.keys(prop).length === 0) )

// Get property nested objects
export const _nestedProps = (obj, key) => key.split('.').reduce((o, x) => (typeof o === 'undefined' || o === null) ? o : o[x], obj)

// Check if object has property key
export const _hasProp = (obj, key) => obj ? hasOwnProperty.call(obj, key) : false

// Get object keys by pattern
// example: _findKeys({}, /string/)
export const _findKeys = (obj, filter) => {
  let key = []
  let keys = []
  for (key in obj) {
    if (obj.hasOwnProperty(key) && filter.test(key)) {
      keys.push(key)
    }
  }
  return keys
}

// Get object values by pattern
// example: _findValues({}, string)
export const _findValues = (obj, filter) => {
  const matches = []
  for (let key of Object.keys(obj)) {
    if (key.match(filter)) {
      matches.push(obj[key])
    }
  }
  return matches
}


// ----------------------------------------------
// Array utils
// ----------------------------------------------

// check if is an array
export const _array = val => Array.isArray(val)

// check if is an array and empty
export const _empty = arr => (Array.isArray(arr) && arr.length === 0)

// removes all duplicates entries from an array
export const _uniq = val => [ ... new Set(val) ]

// get last element of array
export const _tail = arr => arr.slice(-1)

// get first element of array
export const _head = arr => arr.slice(0, 1)

// reverses an array
export const _reverse = arr => arr.reverse()

// determines whether an array includes a certain element, return Boolean
export const _includes = (arr, val) => arr.includes(val)

// group by key
export const _groupBy = (arr, key) => (
  arr.reduce((acc, cur) => {
    (acc[cur[key]] = acc[cur[key]] || []).push(cur)
    return acc
  }, {})
)

// extract n elements from array
export const _spliced = (arr, start, count) => arr.splice(start, count)

// extract key from array
export const _pluck = (arr, key) => arr.map(key => arr[key])


// ----------------------------------------------
// Number Utils
// ----------------------------------------------

// check if is a number
export const _isNumber = num => Number.isNaN(num)


// ----------------------------------------------
// Misc
// ----------------------------------------------

// value comparison
export const _gte = (p, n) => p >= n
export const _lte = (p, n) => p <= n

// Sum values in array
export const _sum = val => val.reduce( ( prev, actual ) => actual += prev, 0 )

// Create FlatList Grid
export const _grid = (data, numColumns) => {
  const numColumnsFullRows = Math.floor(data.length / numColumns)

  let numColumnsLastRow = data.length - (numColumnsFullRows * numColumns)
  while (numColumnsLastRow !== numColumns && numColumnsLastRow !== 0) {
    data.push({ key: `empty-${numColumnsLastRow}`, empty: true})
    numColumnsLastRow = numColumnsLastRow + 1
  }

  return data
}

// Generate unique ID (UUID)
export const _uuid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}`
}

// Generate Hash
export const _hash = () => `_${Math.random().toString(36).substr(2, 9)}`


// ----------------------------------------------
// More utilities? =]
// ----------------------------------------------

// from here and beyond...
