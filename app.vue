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
import { createSocket } from 'dgram';

const connected = ref(false)
const ws = createWebSocket()

const showChannelBar = useState('showChannelBar', () => false)
const socket = useState('socket', () => ws)


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