import React from 'react'
import {connect} from 'react-redux'
import Track from './components/Track'
import {getPlaybackTime} from './store'

function App({width, height, time}) {
  return (
    <svg height={height} width={width} viewBox={`0 0 ${width} ${height}`}>
      <Track notes={['-', 'c', 'c', '-', '-', 'c']} height={height} time={time} />
    </svg>
  )
}

const mapStateToProps = state => ({
  height: state.windowSize.height,
  width: state.windowSize.width,
  time: getPlaybackTime(state),
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
