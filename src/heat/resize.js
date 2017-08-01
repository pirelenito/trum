import { resize } from '../store'
import * as most from 'most'

export default () => {
  return most
    .fromEvent('resize', window)
    .map(() => resize({ width: window.innerWidth, height: window.innerHeight }))
    .merge(most.of(resize({ width: window.innerWidth, height: window.innerHeight })))
}
