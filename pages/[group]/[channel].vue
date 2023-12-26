<template>
  <div class="root">
    Channel
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
  showProfilePopout.value = false
})
</script>

<style scoped>
/** Use styling from index.vue for root element */
div.root {
  margin: 3rem 6rem;
  text-align: center;
  height: 80%;
}
</style>