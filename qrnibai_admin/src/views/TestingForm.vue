<template>
  <v-data-table
    :items="items"
    :headers="headers"
    @click:row="onRowClick"
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1', description: 'Description 1' },
        { id: 2, name: 'Item 2', description: 'Description 2' },
        // Add more items as needed
      ],
      headers: [
        { title: 'ID', key: 'id' },
        { title: 'Name', key: 'name' },
        { title: 'Description', key: 'description' },
        // Add more headers as needed
      ]
    };
  },
  methods: {
    onRowClick(item,row) {
      console.log('Clicked on item with ID:', item);
      console.log('Clicked on item with ROW ID:', row.item.columns.id);

    }
  }
};
</script>
