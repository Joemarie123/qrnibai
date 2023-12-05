<template>
  <div>
    <label for="selectedOffices">Select Offices:</label>
    <v-select v-model="selectedOffices" :items="officeOptions" @change="handleOfficeChange" />

    <!-- Your other content here -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOffices: null,
      officeOptions: [
        { text: 'All', value: 'All' },
        { text: 'DNP', value: 'DNP' },
        { text: 'OB', value: 'OB' },
        { text: 'OF', value: 'OF' },
        { text: 'FWS', value: 'FWS' },
        { text: 'OL', value: 'OL' },
        { text: 'Late', value: 'Late' },
      ],
    };
  },
  methods: {
    handleOfficeChange() {
      if (this.selectedOffices === 'All') {
        this.countDNP_All();
        this.countOB_All();
        this.countOF_All();
        this.countFWS_All();
        this.countOL_All();
        this.countLate_All();
      }
    },
    countDNP_All() {
      // Your logic for countDNP_All
      console.log('countDNP_All');
    },
    countOB_All() {
      // Your logic for countOB_All
      console.log('countOB_All');
    },
    countOF_All() {
      // Your logic for countOF_All
      console.log('countOF_All');
    },
    countFWS_All() {
      // Your logic for countFWS_All
      console.log('countFWS_All');
    },
    countOL_All() {
      // Your logic for countOL_All
      console.log('countOL_All');
    },
    countLate_All() {
      // Your logic for countLate_All
      console.log('countLate_All');
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
