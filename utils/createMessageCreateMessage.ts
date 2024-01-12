export default (author: Number, content: string, groupID: Number, channelID: Number) => {
  var data = {
    author,
    content,
    group_id: groupID,
    channel_id: channelID
  }

  return createActionMessage('new_msg', data)
}