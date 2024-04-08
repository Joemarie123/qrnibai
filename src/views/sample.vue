<template>
  <div>
    <h1>Office List</h1>
  <!--   <label for="filterId">Filter by ID:</label>
    <input type="text" v-model="filterId" id="filterId" /> -->

      <div v-for="office in filteredOffices" :key="office.id">{{ office.office }}</div>

  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      sample_id:1,
     /*  offices: [], */
      filterId: '', // Add a data property to store the filter ID
    };
  },
  computed: {
    ...mapGetters("office", { Offices: "getOffices" }),

    filteredOffices() {
      // Use computed property to filter offices based on the filterId
      return this.Offices.filter(office => String(office.id).includes(this.sample_id));
    },
  },

  created() {
    this.fetchOffices()
  },

  methods: {
 ...mapActions("office", ["fetchOffices"]),

  },

  // mounted() {
  //   // Make the API request when the component is mounted
  //   axios.get('https://database.tagumcity.gov.ph/HRQR/OfficeList.php')
  //     .then(response => {
  //       // Assuming the response data is an array of offices
  //       this.offices = response.data.users;
  //       //console.log(this.offices); // Log the data to the console
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // },
};
</script>
