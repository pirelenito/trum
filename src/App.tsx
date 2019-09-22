import React, { useReducer } from 'react'
import parseTabs, { Tabs } from './lib/tabs-parser/parseTabs'
import Editor from './Editor'
import { reducer, initialState } from './store'

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  let parsedTabs: Tabs | undefined

  try {
    parsedTabs = parseTabs(state.source)
  } catch (e) {
    parsedTabs = undefined
  }

  return <Editor source={state.source} parsedTabs={parsedTabs} dispatch={dispatch} />
}

export default App
