<template>
  <div class="root">
    <h3>Dashboard</h3>
    <div class="grid">
      <div class="panel">
        <h4>Recent Activity</h4>
        <hr>
        <div class="scroll">
          <div class="entry">
            
          </div>
        </div>
      </div>
      <div class="panel">
        <h4>Your Feed</h4>
        <hr>
        <div class="scroll">
          <div class="post">
            <h4>Post Title</h4><br>
            <p>Post Content</p>
            <!--TODO-->
          </div>
        </div>
      </div>
      <div class="panel">
        <h4>Quick Access</h4>
        <hr>
        <div class="scroll">
          <div class="entry">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
const currentPageIndex = useState('currentPageIndex', () => 0)
const showChannelBar = useState('showChannelBar', () => false)
const showProfilePopout = useState('showProfilePopout', () => false)

onMounted(() => {
  currentPageIndex.value = 0
  showChannelBar.value = false
  showProfilePopout.value = false
})
</script>

<style scoped>
div.root {
  margin: 3rem 6rem;
  text-align: center;
  height: 80%;
}

div.grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
  height: 100%;
}

div.panel {
  background-color: #0004;
  padding: 5px;
  border-radius: 5px;
  height: 100%;
  overflow-y: scroll;
}

div.post, div.entry {
  background-color: #0004;
  padding: 5px;
  border-radius: 5px;
}
</style>