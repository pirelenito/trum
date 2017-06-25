import React, { Component } from 'react'
import { connect } from 'react-redux'
import Playback from './components/Playback'
import { getTracksAndNotesPosition } from './store'

class App extends Component {
  render() {
    return <div><Playback tracks={this.props.tracks} /></div>
  }
}

const mapStateToProps = state => ({ tracks: getTracksAndNotesPosition(state) })
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
