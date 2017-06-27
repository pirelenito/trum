import { play } from '../store'
export default dispatch => {
  window.addEventListener('keydown', ({ key }) => {
    switch (key) {
      case 'Escape':
        dispatch(play(Date.now()))
    }
  })
}
