export default cb => {
  navigator.requestMIDIAccess().then(
    access => {
      access.inputs.forEach(input => {
        input.onmidimessage = event => {
          if (event.data.length > 1) {
            const timestamp = Date.now()
            const [device, note, intensity] = event.data

            cb({
              timestamp,
              note,
              intensity,
              device,
            })
          }
        }
      })
    },
    error => console.log(error),
  )
}
