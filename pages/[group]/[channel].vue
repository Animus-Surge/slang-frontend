<template>
  <div class="root">
    <div class="headerbar">
      <span id="chnln">channel-name</span>
      <span id="chnldesc">Channel description...</span>
      <div class="buttons">
        <a class="button"><i class="bi bi-people"></i></a>
        <a class="button"><i class="bi bi-pin-angle"></i></a>
      </div>
    </div>
    <div class="messagepanel">
      <div v-for="msg in msgList" :key="msg.id" class="message"> <!--TODO: msgList-->
        <img src="https://placehold.co/50x50" />
        <div class="msgtext">
          <span class="msgauthor">Surge</span>
          <span class="msgcontent">{{ msg.content }}</span>
        </div>
      </div>
    </div>
    <div class="chatbar">
      <a class="bigbutton"><i class="bi bi-plus"></i></a>
      <input id="msgBox" ref="msgBox" v-model="message" @keyup.enter="sendMsg()" type="text" placeholder="Message channel-name">
      <a class="bigbutton" @click="sendMsg()"><i class="bi bi-check"></i></a>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'

const currentPageIndex = useState('currentPageIndex', () => 0)
const showChannelBar = useState('showChannelBar', () => false)
const showProfilePopout = useState('showProfilePopout', () => false)

const user = useState('user') //TODO

const route = useRoute()

var message = ''
var msgList = ref<any[]>([])
var currentID = ref(0)

const sendMsg = () => {
  var gid = parseInt(route.params.group[0])
  var cid = parseInt(route.params.channel[0])

  var msg = createMessageCreateMessage(1, message, gid, cid)

  console.log(msg)
  pushOutgoing(msg)

  msg.data['id'] = currentID.value
  currentID.value++

  msgList.value.push(msg.data)

  message = ''
}

onMounted(() => {
  currentPageIndex.value = -1 //TODO
  showChannelBar.value = true
  showProfilePopout.value = false

  setInterval(() => {
    if (hasIncoming()) {
      var inmsg: Object = retrieveFromIncoming()!
      inmsg.data['id'] = currentID.value
      currentID.value++
      console.log(inmsg)
      msgList.value.push(inmsg)
    }
  })
})
</script>

<style scoped>
span#chnldesc {
  font-size: 13pt;
  color: #aaa;
}

div.root {
  background-color: #2228;
  margin: 0 0rem 0 23rem;
  text-align: center;
  height: 100%;
}

div.headerbar {
  font-size: 16pt;
  padding: 0.8rem 2rem;
  text-align: left;
  background-color: #222;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

div.buttons {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

a.button {
  background-color: #0006;
  padding: 2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  text-align: center;
}

a.button:hover {
  background-color: #000;

  cursor:pointer;
}

div.chatbar {
  background-color: #222;
  padding-left: 2rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 10px;
}

a.bigbutton {
  font-size: 26pt;
  background-color: #0006;
  aspect-ratio: 1;
  width: 47px;
  border-radius: 20px;
}

a.bigbutton:hover {
  background-color: #000;

  cursor:pointer;
}

form {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 60%;
}

input#msgBox {
  font-size: 17pt;
  height: 47px;
  width: 60%;
  padding-left: 2rem;
  
  background-color: #0006;
  color: #fff;
  border: none;
  border-radius: 20px;
}

input#msgBox:hover {
  background-color: #000;
}

div.message {
  display: flex;
  flex-direction: row;
  gap: 5px;

  margin: 0 3rem;
  padding: 5px 0;
}

div.message img {
  border-radius: 50%;
  aspect-ratio: 1;
  width: 50px;
}

div.msgtext {
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 100%;
  text-align: left;
}

span.msgauthor {
  font-weight: bold;
  font-size: 14pt;
}

</style>