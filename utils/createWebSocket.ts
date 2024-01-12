

export default () => {
  var sock = new WebSocket('ws://localhost:8000/ws')

  sock.addEventListener('open', (e) => {
    console.log('Socket open')
    sock.send(JSON.stringify(createPingMessage()))
  })
  sock.addEventListener('close', (e) => {
    console.log('Socket closed')
  })
  sock.addEventListener('error', (e) => {
    console.error(e)
  })
  sock.addEventListener('message', (e) => {
    console.log(e.data)
  })

  return sock
}