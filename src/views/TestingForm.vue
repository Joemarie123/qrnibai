<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.fullname }}</td>
        <td>
          <v-btn @click="handleActionClick(item)">Action Button</v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { title: 'Full name', key: 'fullname' },
        { title: 'Actions', key: 'actions' },
      ],
      data: [
        { fullname: 'John Doe', actions: 'action' },
        { fullname: 'Jane Doe', actions: 'action' },
        // Add more sample data as needed
      ],
    };
  },
  methods: {
    handleActionClick(item) {
      // Handle button click for the specific item
      console.log('Action clicked for:', item.fullname);
    },
  },
};
</script>

<style>
/* Add your custom styles here if needed */
</style>
