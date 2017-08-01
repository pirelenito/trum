import { inputFakeNote } from '../store'
import * as most from 'most'

export default () => {
  return most
    .fromEvent('keydown', window)
    .filter(({ key }) => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(key) !== -1)
    .map(({ key }) => inputFakeNote(parseInt(key, 10) - 1))
}
