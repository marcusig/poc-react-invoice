import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './main/components/App'
import rootReducer from './main/reducer'
import initialState from './initialState'

import 'bootstrap/dist/css/bootstrap.css'

let store = createStore(rootReducer, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)