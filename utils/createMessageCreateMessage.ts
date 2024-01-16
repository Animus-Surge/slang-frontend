import {ref} from 'vue'

var currentID = ref(0)

export default (author: Number, content: string, groupID: Number, channelID: Number) => {
  var data = {
    id: currentID,
    author,
    content,
    group_id: groupID,
    channel_id: channelID
  }
  currentID.value++

  return createActionMessage('new_msg', data)
}