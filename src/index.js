import { render } from 'react-dom'
import store from './store'
import midiSource from './sources/midiSource'
import tickSource from './sources/tickSource'
import App from './App'

midiSource(store.dispatch)
tickSource(store.dispatch)

render(<App />, document.getElementById('root'))
