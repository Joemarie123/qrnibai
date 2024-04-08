<template>
  <v-layout>
    <NavBar />

    <v-main>


      <v-row>

        <v-col cols="12" lg="3">
          <v-btn  class="mt-8 ml-5 colorforbutton" @click="exportDataToCsv()">
                  Download CSV
                </v-btn>
        </v-col>



      </v-row>

      <v-row>
        <v-col cols="11" lg="3">
        <v-text-field v-model="search" label="Search Name"  density="compact" class="mt-1 mt-lg-4 ml-5"></v-text-field>
        </v-col>

        <v-col cols="11" lg="3">
          <v-select class="mt-1 mt-lg-4 ml-5"   density="compact" v-model="selectedMonth" @update:menu="changeMonth()" :items="months" label="Select Month"></v-select>
        </v-col>


        <v-col cols="11" lg="3">
          <v-select class="mt-n6 mt-lg-4 ml-5 ml-lg-1"   density="compact" v-model="selectedYear" @update:menu="changeYear()" :items="years" label="Select Year"></v-select>
</v-col>

<v-col cols="11" lg="2">
  <v-select class="mt-n6 mt-lg-4 ml-5 ml-lg-1"   density="compact" v-model="selectedOption" @update:menu="changeOption()" :items="optionsbai" label="Select Type"></v-select>
</v-col>
      </v-row>


<v-row>
  <v-col cols="11" lg="11">
                <v-data-table    :search="search"  class="mt-n6 mx-5 my_class" :items-per-page="15" :headers="headers" :items="adminreports"></v-data-table>
              </v-col>
            </v-row>

    </v-main>
  </v-layout>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      search: "",
      selectedOption: 'Did Not Participate',
      optionsbai: [
        'Did Not Participate', 'On Field Business', 'Flexible Work Schedule',
        'On Field', 'On Leave', 'Late', 'PM Shift'
      ],
      selectedMonth: 'March',
      months: [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ],
      selectedYear: 2024,
      years: Array.from(
        { length: new Date().getFullYear() - 2009 },
        (_, index) => 2010 + index
      ).reverse(),
      headers: [
        { key: 'fullname', title: 'Full Name' },
        { key: 'eventcount', title: 'Event Count' },
      ],
      data: [
        { name: "Sample 10ccc", email: "joemarie@gmail.com", age: "24" },
        { name: "Sample 102", email: "janedoe@gmail.com", age: "30" },
        { name: "Sample 103", email: "johnsmith@gmail.com", age: "28" }
      ],
      adminbaireports:[],


    };
  },

  created() {
    let data = new FormData;
    data.append('month', this.selectedMonthValue)
    data.append('year', this.selectedYear)
    data.append('remarks', this.selectedOptionAbbreviation)
    this.fetchAdminReports(data);

    console.log("month  1",this.selectedMonthValue)
    console.log("year  2",this.selectedYear)
    console.log("remarks  3",this.selectedOptionAbbreviation)
    this.adminbaireports = this.fetchAdminReports(data)
   /*  console.log("RECORD BAI",this.adminbaireports) */
  },

  computed: {
    ...mapGetters('events', { adminreports: ['getdisplayreports']}),

    filteredData() {
      // You can filter your data based on selectedMonth and selectedYear here
      return this.adminreports;
    },
    selectedMonthValue() {
      if (this.selectedMonth) {
        return this.months.indexOf(this.selectedMonth) + 1;
      }
      return '';
    },
    selectedOptionAbbreviation() {
      if (this.selectedOption) {
        return this.getAbbreviation(this.selectedOption);
      }
      return '';
    }
  },
  methods: {

    ...mapActions("events", ["fetchAdminReports"]),

    changeMonth(){
      let data = new FormData;
    data.append('month', this.selectedMonthValue)
    data.append('year', this.selectedYear)
    data.append('remarks', this.selectedOptionAbbreviation)
    this.fetchAdminReports(data);

    console.log("month  1",this.selectedMonthValue)
    console.log("year  2",this.selectedYear)
    console.log("remarks  3",this.selectedOptionAbbreviation)

    },

    changeYear()
    {
      let data = new FormData;
    data.append('month', this.selectedMonthValue)
    data.append('year', this.selectedYear)
    data.append('remarks', this.selectedOptionAbbreviation)
    this.fetchAdminReports(data);

    console.log("month  1",this.selectedMonthValue)
    console.log("year  2",this.selectedYear)
    console.log("remarks  3",this.selectedOptionAbbreviation)
    },

    changeOption()
    {
      let data = new FormData;
    data.append('month', this.selectedMonthValue)
    data.append('year', this.selectedYear)
    data.append('remarks', this.selectedOptionAbbreviation)
    this.fetchAdminReports(data);

    console.log("month  1",this.selectedMonthValue)
    console.log("year  2",this.selectedYear)
    console.log("remarks  3",this.selectedOptionAbbreviation)
    },

    getAbbreviation(option) {
      // Map options to their corresponding abbreviations
      switch(option) {
        case 'Did Not Participate':
          return 'DNP';
        case 'On Field Business':
          return 'OFB';
        case 'Flexible Work Schedule':
          return 'FWS';
        case 'On Field':
          return 'OF';
        case 'On Leave':
          return 'OL';
        case 'Late':
          return 'Late';
        case 'PM Shift':
          return 'PMS';
        default:
          return '';
      }
    },
    exportDataToCsv() {
      const dataToExport = this.filteredData.map(item => ({
        ...item,
        // Add any additional processing or transformations here if needed
      }));
      const csvContent = this.convertToCSV(dataToExport);
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute("download", 'export_data.csv');
      link.click();
    },
    convertToCSV(adminreports) {
      const headers = Object.keys(adminreports[0]);
      const rows = adminreports.map(obj => headers.map(header => this.wrapValueInQuotes(obj[header])));
      const headerRow = headers.map(this.wrapValueInQuotes).join(',');
      const csvRows = [headerRow, ...rows.map(row => row.join(','))];
      return csvRows.join('\n');
    },
    wrapValueInQuotes(value) {
      return `"${value}"`; // Wraps the value in double quotes
    }
  },
  components: {
    NavBar,
  }
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
