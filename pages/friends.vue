<template>
  <div class="root">
    <div class="header">
      <h3>Friends</h3>
    </div>
    <div class="container">
      <div class="item">
        <div class="left">
          <img src="https://placehold.co/50x50" class="pfp">
          <h3>Display Name</h3>
          <p>username</p>
        </div>
        <div class="right">
          <a class="button"><i class="bi bi-chat-left-text"></i></a> <!--sends to: /messages/<userid>; API: https://api.slang.com/v1/-->
          <a class="button"><i class="bi bi-telephone"></i></a>
          <a class="button" id="unfriend"><i class="bi bi-person-x"></i></a>
        </div>
      </div>
      <div class="item" v-for="item in dataArray" :key="item.id">
        <div class="left">

        </div>
      </div>
    </div>
  </div>
</template>

<!--

User objects have:
profile picture url (pfpurl)
user ID (uid)
display name (displayname)
username (username)

-->

<script setup lang="ts">
let dataArray: any[] = []

onMounted(() => {
  //Get your friends list
})
</script>

<style scoped>
div.root {
  text-align: center;
}

div.header {
  padding: 1rem;
  background-color: #0006;
}

div.container {
  margin: 2rem 6rem;
  background-color: #0002;
  border-radius: 5px;
}

div.item {
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
}

div.left {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}

div.right {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}

div.item:hover {
  background-color: #0002;
}

a.button {
  font-size: 16pt;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: #0004;
  border-radius: 50%;
}

a.button:hover {
  background-color: #0008;
}
</style>