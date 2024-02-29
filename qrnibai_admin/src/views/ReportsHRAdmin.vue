<template>

<v-layout>
  <NavBar/>

<v-main>

  <v-row>
    <v-col class="d-flex justify-center ">
      <h1>REPORTS</h1>
    </v-col>
  </v-row>

  <v-row class="d-flex justify-center ">
    <v-col cols="6" >
      <v-card>
        <v-row>
          <v-col cols="3">
            <v-btn color="green"  class="mt-4 ml-5"  @click="exportDataToCsv">
Download CSV
</v-btn>
          </v-col>
          <v-col cols="3">
            <v-select
        v-model="selectedMonth"
        :items="months"
        label="Select a month"
      ></v-select>

          </v-col>
          <v-col cols="2">
            <v-select v-model="selectedYear"  :items="years" label="Year"></v-select>
          </v-col>
          <v-col cols="4">
            <v-select v-model="selectedOption" :items="optionsbai"  label="Select Type"></v-select>
          </v-col>

        </v-row>



      </v-card>

    </v-col>


  </v-row>


</v-main>
  </v-layout>
</template>

<script>

import NavBar from "@/components/NavBar.vue";

export default {
  data() {
    return {
      selectedOption: 'Did Not Participate',
      optionsbai: ['Did Not Participate', 'On Field Business', 'Flexible Work Schedule', 'On Field', 'On Leave', 'Late', 'PM Shift', '',],
      selectedMonth: '',
      months: [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ],
      selectedYear: new Date().getFullYear(),
      years: [
        ...Array.from(
          { length: new Date().getFullYear() - 2009 },
          (_, index) => 2010 + index
        ).reverse(),
      ],
    };


  },

 mounted() {
    // Set the default month name on component mount
    this.selectedMonth = this.getMonthName(new Date().getMonth());
  },
  methods: {
    getMonthName(index) {
      return this.months[index];
    },

    exportDataToCsv() {
    const data = [
        { name: "Sample 101", email: "joemarie@gmail.com", age: "24" },
        { name: "Sample 101", email: "joemarie@gmail.com", age: "24" },
        { name: "Sample 101", email: "joemarie@gmail.com", age: "24" }
    ];

    // Add the new header "Tagum City apokon road" to the data
    data.forEach(item => {
        item['Tagum City apokon road'] = 'Your Value Here'; // Replace 'Your Value Here' with the actual value for Tagum City apokon road
    });

    const csvContent = this.convertToCSV(data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-80' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute("download", 'export_data.csv');
    link.click();
},

convertToCSV(data) {
    const headers = Object.keys(data[0]);
    const rows = data.map(obj => headers.map(header => obj[header]));
    const headerRow = headers.join(',');
    const csvRows = [headerRow, ...rows.map(row => row.join(','))];
    return csvRows.join('\n');
}



  },
  watch: {
    selectedMonth(newMonth) {
      // Handle the selected month change if needed
      console.log('Selected month:', newMonth);
    }
  },
  components: {
    NavBar,
  },



};


</script>


<style>
.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  width: 260px; /* Adjust the width as needed */
  height: 60px;
}

.custom-select:focus {
  outline: none;
  border-color: #2196F3;
}

.v-select-like {
  display: inline-block;
  position: relative;
  width: 500px; /* Adjust the width as needed */
}

</style>
