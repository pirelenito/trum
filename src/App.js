import React from 'react'
import { connect } from 'react-redux'
import Playback from './components/Playback'
import Tablature from './components/Tablature'
import { setTablature, getMusicInstruments } from './store'

function App({ width, height, tablature, instruments, onChangeTablature }) {
  return (
    <main>
      <svg height={height - 150} width={width} viewBox={`0 0 ${width} ${height - 150}`}>
        <Playback instruments={instruments} width={width} height={height - 150} />
      </svg>
      <footer style={{ display: 'block', height: 150, width }}>
        <Tablature source={tablature} onChange={onChangeTablature} />
      </footer>
    </main>
  )
}

const mapStateToProps = state => ({
  height: state.windowSize.height,
  width: state.windowSize.width,
  tablature: state.tablature,
  instruments: getMusicInstruments(state),
})

const mapDispatchToProps = dispatch => ({
  onChangeTablature: newTablature => dispatch(setTablature(newTablature)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
