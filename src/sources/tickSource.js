import { tick } from '../store'

export default dispatch => {
  const frame = () => {
    dispatch(tick(Date.now()))
    window.requestAnimationFrame(frame)
  }
  window.requestAnimationFrame(frame)
}
