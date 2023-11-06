<template>
  <div>
   
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    >
      <template v-slot:item.name="{ item }">
        <span>{{ item.name }}</span>
      </template>
      <template v-slot:item.remarks="{ item }">
        <span :style="{ color: item.remarks == 'late' ? 'red' : 'black' }">{{ item.remarks }}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { title: 'Name', value: 'name' },
        { title: 'Address', value: 'address' },
        { title: 'Remarks', value: 'remarks' }
      ],
      items: [
        { name: 'John Doe', address: '123 Main St, City', remarks: 'Lorem ipsum' },
        { name: 'Jane Smith', address: '456 Elm St, Town', remarks: 'Late' },
        { name: 'Bob Johnson', address: '789 Oak St, Village', remarks: 'Consectetur adipiscing elit' }
        // Add more items as needed
      ],
      applyRedColor: false
    };
  },
  computed(){
  
  },
  methods: {
    
  }
};
</script>

<style scoped>
.elevation-1 {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
