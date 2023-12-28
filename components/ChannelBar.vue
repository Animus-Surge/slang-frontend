<template>
  <div class="channelbar">
    <div class="header">
      <h3>Group Name</h3>
    </div>
    <div class="channels">
      <NuxtLink class="element" to="/1/1"><span> </span>Room Name</NuxtLink>
      <!--TODO: quick links and channel groups, or should I call them rooms?-->
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'

const currentPageIndex = useState('currentPageIndex', () => 0)
</script>

<style scoped>
/** Use styling from ProfilePopout for root element */
div.channelbar {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 4rem;
  padding: 8px;

  overflow-x: hidden;
  overflow-y: scroll;

  width: 300px;
  height: 100%;

  background-color: #111;

  box-shadow: 0 0 0.5rem #111;

  transition-property: left;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;

  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

div.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

div.channels {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

a.element {
  display: block;

}
</style>