<!--Default layout, used for dashboard, friends list, and profile views-->

<template>
  <div class="root">
    <slot />
  </div>
</template>

<script setup lang='ts'>
</script>

<style scoped>
div.root {
  margin: 3rem 6rem;
  text-align: center;
  height: 100%;
}
</style>