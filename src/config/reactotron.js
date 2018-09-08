import Immutable from 'seamless-immutable'
import Reactotron, { trackGlobalErrors, openInEditor, overlay, asyncStorage, networking } from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

import Config from '../config/debug'
import {name as AppName} from './app.json'

if (Config.useReactotron) {
  Reactotron
    .configure({ name: AppName })
    .useReactNative()
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .use(reduxPlugin({ onRestore: Immutable }))
    .use(sagaPlugin())
    .connect()

  Reactotron.clear()

  console.tron = Reactotron
}
