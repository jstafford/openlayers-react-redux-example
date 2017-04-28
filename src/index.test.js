/* eslint-env jest */
import {StyleRoot} from 'radium'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './configureStore'
// import a polyfill for requestAnimationFrame
// since jest has decided not to provide one
// and openlayers depends on requestAnimationFrame
import './rAF.js'

const store = configureStore()

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <StyleRoot>
        <App />
      </StyleRoot>
    </Provider>,
    div)
})
