import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import midiSource from './sources/midiSource'
import tickSource from './sources/tickSource'
import App from './App'

midiSource(store.dispatch)
tickSource(store.dispatch)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
