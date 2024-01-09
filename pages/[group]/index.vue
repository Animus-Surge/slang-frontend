<template>
  <div class="root">
    Group Name
  </div>
</template>

<script setup lang='ts'>

import { ref, onMounted } from 'vue'
const currentPageIndex = useState('currentPageIndex', () => 0)
const showChannelBar = useState('showChannelBar', () => false)
const showProfilePopout = useState('showProfilePopout', () => false)

const route = useRoute()

onMounted(() => {
  currentPageIndex.value = Number.parseInt(route.params.group[0])
  showChannelBar.value = true
  showProfilePopout.value = false
})

</script>

<style scoped>
div.root {
  margin: 3rem 6rem;
  text-align: center;
  
}
</style>