var inBuffer: Object[] = []
var outBuffer: Object[] = []

export const retrieveFromIncoming = () => {
  if (!hasIncoming()) return undefined
  return inBuffer.splice(0, 1)[0]
}
export const retrieveFromOutgoing = () => {
  if (!hasOutgoing()) return undefined
  return outBuffer.splice(0, 1)[0]
}

export const hasIncoming = () => {
  return inBuffer.length > 0
}
export const hasOutgoing = () => {
  return outBuffer.length > 0
}

export const pushIncoming = (data: Object) => {
  inBuffer.push(data)
}
export const pushOutgoing = (data: Object) => {
  outBuffer.push(data)
}
