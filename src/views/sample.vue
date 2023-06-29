<template>
  <div>
    <h2>Search:</h2>
    <input type="text" v-model="search" @change="fetchData" />

    <div v-if="found">
      <h2>Results:</h2>
      <p>Last Name: {{ result.lastName }}</p>
      <p>First Name: {{ result.firstName }}</p>
      <p>Address: {{ result.address }}</p>
    </div>

    <div v-else-if="searched">
      <p>No results found for {{ search }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      found: false,
      searched: false,
      result: {},
      data: [
        {
          id: 1,
          lastName: 'Doe',
          firstName: 'John',
          address: '123 Main St',
        },
        {
          id: 2,
          lastName: 'Smith',
          firstName: 'Jane',
          address: '456 Elm St',
        },
      ],
    };
  },
  methods: {
    fetchData() {
      const searchLower = this.search.toLowerCase();
      const foundData = this.data.find(
        (item) =>
          item.lastName.toLowerCase().includes(searchLower) ||
          item.firstName.toLowerCase().includes(searchLower) ||
          item.address.toLowerCase().includes(searchLower)
      );
      if (foundData) {
        this.result = foundData;
        this.found = true;
      } else {
        this.found = false;
      }
      this.searched = true;
    },
  },
};
</script>
