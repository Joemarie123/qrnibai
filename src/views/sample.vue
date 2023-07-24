<template>
  <div>
    <input type="time" v-model="timeThreshold" placeholder="Enter time threshold">
    <input type="time" v-model="currentTime" readonly>
  
    <v-btn color="green" @click="addToDataTable">Add to Data Table</v-btn>
    <table>
      <thead>
        <tr>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="time in dataTable" :key="time"> -->
            <tr  v-for="(msg, index) in message" :key="index" >
          <td :style="{ color: timeExceedsThreshold(time) ? 'red' : 'black' }">{{ formatTime(time) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      dataTable: [],
      currentTime: '',
      timeThreshold: ''
    };
  },
  methods: {
    addToDataTable() {
      this.dataTable.push(this.currentTime);
      this.currentTime = ''; // Clear the input field after adding to the table
    },
    
    timeExceedsThreshold(time) {
      if (!this.timeThreshold) {
        return false;
      }
      return time > this.timeThreshold;
    },

    
    
    formatTime(fff) {
      const [hours, minutes] = fff.split(':');
      let formattedHours = parseInt(hours);
      let period = 'AM';

      if (formattedHours === 0) {
        formattedHours = 12;
      } else if (formattedHours > 12) {
        formattedHours -= 12;
        period = 'PM';
      }
      

      return `${formattedHours}:${minutes} ${period}`;
    },

    updateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      this.currentTime = `${hours}:${minutes}`;
    }
 

  },

 async mounted() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 100); // Update every second
  },


  
};
</script>
