<template>
  <div>
    <v-combobox
      v-model="selectedMonth"
      :items="monthNames"
      label="Select Month"
    ></v-combobox>
    <p v-if="selectedMonth !== null">You selected {{ selectedMonth }}</p>
  </div>
</template>

<script>
export default {
  data() {
    const months = [
      { text: 'January' , value:'1' },
      { text: 'February' },
      { text: 'March' },
      { text: 'April' },
      { text: 'May' },
      { text: 'June' },
      { text: 'July' },
      { text: 'August' },
      { text: 'September' },
      { text: 'October' },
      { text: 'November' },
      { text: 'December' }
    ];
    return {
      selectedMonth: null,
      monthNames: months.map(month => month.text)
    };
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
