import {StyleRoot} from 'radium'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './configureStore'

import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <StyleRoot>
      <App />
    </StyleRoot>
  </Provider>,
  document.getElementById('root')
)
