<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Age', value: 'age' },
        { text: 'Location', value: 'location' },
      ],
      items: [
        { name: 'John', age: 28, location: 'New York' },
        { name: 'Jane', age: 24, location: 'Los Angeles' },
        { name: 'Smith', age: 32, location: 'Chicago' },
      ],
    };
  },
};
</script>

<style scoped>
.v-data-table-header {
  background-color: green; /* Set your desired background color here */
}
</style>
