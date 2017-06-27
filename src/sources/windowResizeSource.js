import { resize } from '../store'

export default dispatch => {
  window.addEventListener('resize', () =>
    dispatch(resize({ width: window.innerWidth, height: window.innerHeight }))
  )

  dispatch(resize({ width: window.innerWidth, height: window.innerHeight }))
}
