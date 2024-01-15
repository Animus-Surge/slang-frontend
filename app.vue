<template>
  <div class="app-main">
    <Navbar />
    <ProfilePopout />
    <ChannelBar v-if="showChannelBar" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang='ts'>
const connected = ref(false)
const showChannelBar = useState('showChannelBar', () => false)

const {$hasOutgoing, $getOutgoingMessage} = useNuxtApp()

onMounted(() => {
  const socket = new WebSocket('ws://localhost:8000/sock')

  socket.addEventListener('open', (e) => {
    socket.send(JSON.stringify(createPingMessage()))

    console.log(`Socket connected`)
  })
  socket.addEventListener('close', (e) => {
    console.log('Socket disconnected')
  })
  socket.addEventListener('error', (e) => {
    console.error(e)
  })
  socket.addEventListener('message', (e) => {
    var msg = JSON.parse(e.data)

    if (!msg.type) return // Consider it invalid, ALL messages coming through the websocket will have this type field

    switch (msg.type) {
      case 'msg':
        console.log(msg.data)
        break //TODO
      case 'pong':
        console.log('Received pong response!')
    }

  })

  setInterval(() => {
    
    if(hasOutgoing() && socket.readyState === socket.OPEN) {
      var msg = retrieveFromOutgoing()
      console.log(msg)
      socket.send(JSON.stringify(msg))
    }
  }, 10)
})

</script>

<style scoped>
div.app-main {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

div.page {
  margin: 0 5rem;
  overflow-y: scroll;
  height: 100%;
}

@media screen and (max-width: 768px) {
  div.page {
    margin: 0;
  }
}
</style>