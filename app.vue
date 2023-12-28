<template>
  <div class="app-main">
    <Navbar />
    <ProfilePopout />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang='ts'>
//Websocket implementation
// import { WebSocket } from 'ws' 

const socket = ref<WebSocket | null>(null)

const openSocket = () => {
  socket.value = new WebSocket('ws://localhost:3100')
  socket.value.onopen = (e) => {
    console.log('Connected')
    socket.value!.send('Hello, world!')
  }
  socket.value.onerror = (e) => {
    console.error(e)
  }
  socket.value.onmessage = (e) => {
    console.log(e.data)
  }
  socket.value.onclose = (e) => {
    console.log('Disconnected')
  }
  return socket
}

onMounted(() => {
  openSocket()
})

onBeforeUnmount(() => {
  socket.value?.close()
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