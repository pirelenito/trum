import { inputNote } from '../store'

export default dispatch => {
  navigator.requestMIDIAccess().then(
    access => {
      access.inputs.forEach(input => {
        input.onmidimessage = event => {
          if (event.data.length > 1) {
            const timestamp = Date.now()
            const [device, note, intensity] = event.data

            dispatch(
              inputNote({
                timestamp,
                note,
                intensity,
                device,
              })
            )
          }
        }
      })
    },
    error => console.log(error)
  )
}
