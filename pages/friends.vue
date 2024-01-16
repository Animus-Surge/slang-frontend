<template>
  <div class="root">
    <!-- Parent Element (or Vue Component) -->
    <div>
      <!-- Use v-for to iterate over the array and dynamically add children -->
      <div v-for="item in dataArray" :key="item.id">
        {{ item.content }}
      </div>
    </div>

    <!-- Button to add new data to the array -->
    <button @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataArray: [
        { id: 1, content: "Item 1" },
        { id: 2, content: "Item 2" },
        // Add more items as needed
      ],
    };
  },
  methods: {
    addItem() {
      // Add a new item to the array
      const newItem = { id: this.dataArray.length + 1, content: `Item ${this.dataArray.length + 1}` };
      this.dataArray.push(newItem);
    },
  },
};
</script>

<style scoped>
div.root {
  margin: 3rem 6rem;
  text-align: center;
}
</style>