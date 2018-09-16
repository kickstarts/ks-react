import { shape, number, string, array, bool, element, object, oneOf } from 'prop-types'
import { View, ViewPropTypes as RNViewPropTypes } from 'react-native'

export const nodeType = oneOf([ element, object, bool ])

export const payloadType = oneOf([ array, object, bool ])


export const ViewPropTypes = RNViewPropTypes || View.propTypes

// some of your custom props goes here...

// EXAMPLE:

// export const userType = shape({
//   id: number,
//   firstName: string.isRequired,
//   lastName: string.isRequired,
//   company: string,
//   role: oneOf(['user', 'author']),
//   address: shape({
//     id: number.isRequired,
//     street: string.isRequired,
//     street2: string,
//     city: string.isRequired,
//     state: string.isRequired,
//     postal: number.isRequired
//   })
// })
