import React, { useState, useCallback } from 'react'
import playback, { fixture } from './playback'
import parseTabs, { Tabs } from './lib/tabs-parser/parseTabs'

const textInputBackground = '#282C34'
const background = '#21252B'

const App: React.FC = () => {
  const [source, setSource] = useState(fixture)
  const updateSource = useCallback(
    event => {
      console.log('value', event)
      setSource(event.target.value)
    },
    [setSource],
  )

  let tabs: Tabs | null

  try {
    tabs = parseTabs(source)
  } catch (e) {
    tabs = null
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: background,
        padding: '0px 24px',
      }}
    >
      <h2 style={{ fontSize: 16, margin: '24px 0 12px 0', color: '#dedede' }}>Tabs</h2>
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
        }}
      >
        <textarea
          wrap="off"
          style={{
            border: '1px solid #34383F',
            resize: 'none',
            appearance: 'none',
            background: textInputBackground,
            color: '#e3e4e4',
            fontFamily: 'monospace',
            fontSize: 12,
            width: '100%',
          }}
          onChange={updateSource}
          value={source}
        />
      </div>
      <div>
        <h2 style={{ fontSize: 16, margin: '24px 0 12px 0', color: '#dedede' }}>Instruments</h2>
        <p style={{ color: '#dedede' }}>{tabs ? tabs.instruments.join(', ') : 'parse error'}</p>
      </div>
      <div>
        <h2 style={{ fontSize: 16, margin: '24px 0 12px 0', color: '#dedede' }}>Length</h2>
        <p style={{ color: '#dedede' }}>{tabs ? tabs.length : 0}</p>
      </div>
      <div>
        <h2 style={{ fontSize: 16, margin: '24px 0 12px 0', color: '#dedede' }}>Sections</h2>
        <p style={{ color: '#dedede' }}>{tabs ? tabs.sectionCount : 0}</p>
      </div>
    </div>
  )
}

playback()

export default App
