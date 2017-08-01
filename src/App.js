import React from 'react'
import { connect } from 'react-redux'
import Playback from './components/Playback'
import Tablature from './components/Tablature'
import { setTablature, setBpm, getMusicInstruments } from './store'

function App({ width, height, bpm, tablature, instruments, onChangeTablature, onChangeBpm }) {
  const playbackWidth = width - 600

  const styles = {
    playbackContainer: {
      backgroundColor: '#e5e6eb',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    settingsContainer: {
      background: '#1b2b34',
      display: 'block',
      height: height,
      width: 600,
      position: 'absolute',
      top: 0,
      left: playbackWidth,
    },
  }

  return (
    <main style={styles.playbackContainer}>
      <svg height={height} width={playbackWidth} viewBox={`0 0 ${playbackWidth} ${height}`}>
        <Playback instruments={instruments} width={playbackWidth} height={height} />
      </svg>
      <footer style={styles.settingsContainer}>
        <Tablature
          tablature={tablature}
          onChangeTablature={onChangeTablature}
          bpm={bpm}
          onChangeBpm={onChangeBpm}
        />
      </footer>
    </main>
  )
}

const mapStateToProps = state => ({
  height: state.windowSize.height,
  width: state.windowSize.width,
  tablature: state.tablature,
  bpm: state.bpm,
  instruments: getMusicInstruments(state),
})

const mapDispatchToProps = dispatch => ({
  onChangeTablature: newTablature => dispatch(setTablature(newTablature)),
  onChangeBpm: newBpm => dispatch(setBpm(newBpm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
