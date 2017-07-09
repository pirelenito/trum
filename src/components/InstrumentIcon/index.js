import React from 'react'
import BassDrum from './BassDrum'
import Cymbal from './Cymbal'
import HiHat from './HiHat'
import Snare from './Snare'
import Tom from './Tom'

export default ({ icon }) => {
  switch (icon) {
    case 'Cymbal':
      return <Cymbal />

    case 'Snare':
      return <Snare />

    case 'BassDrum':
      return <BassDrum />

    case 'HiHat':
      return <HiHat />

    default:
      return <Tom />
  }
}
