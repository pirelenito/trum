import React, { useCallback } from 'react'
import { Tabs } from '../lib/tabs-parser/parseTabs'
import { Dispatch } from '../store'

const textInputBackground = '#282C34'
const background = '#21252B'

interface EditorProps {
  source: string
  parsedTabs?: Tabs
  dispatch: Dispatch
}

const Editor = ({ source, parsedTabs, dispatch }: EditorProps) => {
  const updateSource = useCallback(
    event => {
      console.log('value', event)
      dispatch({ type: 'updateSource', newValue: event.target.value })
    },
    [dispatch],
  )

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
        <p style={{ color: '#dedede' }}>{parsedTabs ? parsedTabs.instruments.join(', ') : 'parse error'}</p>
      </div>
      <div>
        <h2 style={{ fontSize: 16, margin: '24px 0 12px 0', color: '#dedede' }}>Length</h2>
        <p style={{ color: '#dedede' }}>{parsedTabs ? parsedTabs.length : 0}</p>
      </div>
      <div>
        <h2 style={{ fontSize: 16, margin: '24px 0 12px 0', color: '#dedede' }}>Sections</h2>
        <p style={{ color: '#dedede' }}>{parsedTabs ? parsedTabs.sectionCount : 0}</p>
      </div>
    </div>
  )
}

export default Editor
