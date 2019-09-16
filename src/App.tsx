import React from 'react'
import playback, { fixture } from './playback'

const textInputBackground = '#282C34'
const background = '#21252B'

const App: React.FC = () => {
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
          value={fixture}
        />
      </div>
      <div>
        <h2 style={{ fontSize: 16, margin: '24px 0', color: '#dedede' }}>Instruments</h2>
      </div>
    </div>
  )
}

playback()

export default App
