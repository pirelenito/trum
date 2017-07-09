import React from 'react'
import BassDrum from './BassDrum'
import Cymbal from './Cymbal'
import HiHat from './HiHat'
import Snare from './Snare'
import Tom from './Tom'

export default ({ icon, color }) => {
  switch (icon) {
    case 'Cymbal':
      return <Cymbal color={color} />

    case 'Snare':
      return <Snare color={color} />

    case 'BassDrum':
      return <BassDrum color={color} />

    case 'HiHat':
      return <HiHat color={color} />

    default:
      return <Tom color={color} />
  }
}
