<template>
  <div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'

const currentPageIndex = useState('currentPageIndex', () => 0)
const showChannelBar = useState('showChannelBar', () => false)
const showProfilePopout = useState('showProfilePopout', () => false)

onMounted(() => {
  currentPageIndex.value = -1 //TODO
  showChannelBar.value = true
  showProfilePopout.value = false //TODO
})
</script>

<style scoped>
</style>