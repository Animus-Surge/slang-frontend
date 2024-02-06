export class Message {
  type: string
  data: any
  id: number
  constructor(type: string, data: any) {
    this.type = type
    this.data = data
    this.id = -1 //Temporary value, gets set in channels
  }
}

var inBuffer: typeof Message[] = []
var outBuffer: typeof Message[] = []

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
  // inBuffer.push(data)
}
export const pushOutgoing = (data: Object) => {
  // outBuffer.push(data)
}
