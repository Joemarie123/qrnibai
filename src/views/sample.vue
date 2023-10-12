<template>
  <div>
    <p>Current Time: {{ formattedCurrentTime }}</p>

    <v-row>
      <v-col cols="4">
        <v-text-field v-model="fullname" label="Fullname"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="time" label="Time (HH:mm)"></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn @click="addData" color="primary">Add Data</v-btn>
      </v-col>
    </v-row>

    <v-data-table :headers="headers" :items="tableData" class="elevation-1">
      <template #item.fullname="{ item }">
        {{ item.fullname }}
      </template>
      <template #item.time="{ item }">
        {{ item.time | formatTime }}
      </template>
   <!--    <template v-slot:item.remarks="{ item }">
        <p>{{ item.remarks }}</p>
      </template> -->
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: '',
      time: '',
      headers: [
        { title: 'Fullname', value: 'fullname' },
        { title: 'Time', value: 'time_header' },
 /*  { title: 'Remarks', value: 'remarks_header' }  */
      ],
      tableData: [],
      currentTime: new Date()
    };
  },
  computed: {
    formattedCurrentTime() {
      const hours = this.currentTime.getHours().toString().padStart(2, '0');
      const minutes = this.currentTime.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  },
  filters: {
    formatTime(value) {
      const [hours, minutes] = value.split(':');
      return `${hours.padStart(2, '0')}:${minutes}`;
    }
  },
  methods: {

    /* addData() {
      if (this.fullname && this.time) {
        const inputTime = new Date(`2000-01-01T${this.time}`);
        const currentTime = new Date();
        const isLate = inputTime < currentTime; // Check if input time is earlier (i.e., late)

        // Format the input time in "1:20 PM" format
        const formattedTime = this.formatTime(inputTime);

        // Add data to the table with remarks
        this.data.push({
          fullname: this.fullname,
          time: formattedTime,
          remarks: isLate ? 'Late' : 'On Time'
        });

        // Clear input fields after adding data
        this.newFullname = "";
        this.newTime = "";
      } else {
        alert("Please enter Fullname and Time.");
      }
} */

  addData() {
    if (this.fullname && this.time) {
      const [enteredHours, enteredMinutes] = this.time.split(':');
      const currentHours = this.currentTime.getHours().toString().padStart(2, '0');
      const currentMinutes = this.currentTime.getMinutes().toString().padStart(2, '0');
      
      if (enteredHours === currentHours && enteredMinutes === currentMinutes) {
        this.tableData.push({ fullname: this.fullname,  time_header: this.formattedCurrentTime });
      } else {
        const enteredTime = new Date();
        enteredTime.setHours(parseInt(enteredHours, 10));
        enteredTime.setMinutes(parseInt(enteredMinutes, 10));
        
        const isLate = enteredTime > this.currentTime;
        const remarksBAI = isLate ? '(LATE)' + this.time : this.time;
        this.tableData.push({ fullname: this.fullname , time_header: this.time, time_header: remarksBAI });
      }
      
      this.fullname = '';
      this.time = '';
    } else {
      alert('Please enter both Fullname and Time.');
    }
  }
},


  created() {
    // Update current time every second
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
