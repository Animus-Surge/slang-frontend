var incomingBuffer: Object[] = []
var outgoingBuffer: Object[] = []

//Might instead use a composable instead of a plugin, we'll see

const pushToIncoming = (message: Object) => { //TODO: check if our groupID and channelID are BOTH not invalid (-100)
  incomingBuffer.push(message)
}
const retrieveFromIncoming = () => {
  return incomingBuffer.splice(0, 1)
}

const clearIncoming = () => { //Should only get called when changing pages
  incomingBuffer.splice(0, incomingBuffer.length)
}

const hasIncoming = () => {
  return incomingBuffer.length > 0
}
const hasOutgoing = () => {
  return outgoingBuffer.length > 0
}

const pushToOutgoing = (message: Object) => {
  outgoingBuffer.push(message)
  console.log(outgoingBuffer)
}
const retrieveFromOutgoing = () => {
  var msg = outgoingBuffer.splice(0, 1)
  console.log(msg)
  console.log(outgoingBuffer)
  return msg
}

const handleMessage = (message: Object) => {
  //TODO
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('handleMessage', handleMessage)
  nuxtApp.provide('sendMessage', pushToOutgoing)
  nuxtApp.provide('getOutgoingMessage', retrieveFromOutgoing)
  nuxtApp.provide('clearBuffers', clearIncoming)
  nuxtApp.provide('hasIncoming', hasIncoming)
  nuxtApp.provide('hasOutgoing', hasOutgoing)
})