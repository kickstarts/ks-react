import { Text } from 'react-native'

import Debug from './debug'
import App from './app'

// Allow/disallow font-scaling in app
Text.defaultProps.allowFontScaling = App.allowTextFontScaling

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = !Debug.yellowBox
}
