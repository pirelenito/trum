import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store, { play } from './store'
import heat from './heat'
import keyDownSource from './sources/keyDownSource'
import midiSource from './sources/midiSource'
import tickSource from './sources/tickSource'
import windowResizeSource from './sources/windowResizeSource'
import App from './App'

keyDownSource(store.dispatch)
midiSource(store.dispatch)
tickSource(store.dispatch)
windowResizeSource(store.dispatch)
store.dispatch(play(Date.now()))

window.store = store

heat(store)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
