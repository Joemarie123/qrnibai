<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1">
    <template v-slot:item.officeName="{ item }">
      <div v-if="!isMobile">{{ item.officeName }}</div>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { key: 'Name', value: 'name' },
        { key: 'Address', value: 'address' },
        { key: 'Office Name', value: 'officeName' }
      ],
      items: [
        { name: 'John Doe', address: '123 Main St', officeName: 'Company A' },
        { name: 'Jane Smith', address: '456 Elm St', officeName: 'Company B' },
        { name: 'Michael Johnson', address: '789 Oak St', officeName: 'Company C' }
        // Add more sample items as needed
      ],
      isMobile: false
    };
  },
  created() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 600; // You can adjust the breakpoint as needed
    }
  }
};
</script>

<style>
/* Add any additional styling you need here */
</style>
