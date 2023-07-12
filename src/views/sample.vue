<template>
  <v-container>
    <v-row>
      <v-col cols="6">
      <!--   <v-text-field
          v-model="selectedTime"
          label="Select Time"
          type="time"
          :class="{ 'red-text': isTimeHigh(selectedTime, timeThreshold) }"
        ></v-text-field> -->
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="timeThreshold"
          label="Time Threshold"
          type="time"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn color="primary" @click="addToDataTable">Add to Table</v-btn>
      </v-col>
    </v-row>
    <table class="time-table">
      <thead>
        <tr>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in dataTable" :key="index" :class="{ 'red-row': isTimeHigh(entry.currentTime, timeThreshold) }">
          <td>{{ entry.currentTime }}</td>
        </tr>
      </tbody>
    </table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedTime: getCurrentTime(),
      timeThreshold: '',
      dataTable: [],
    };
  },
  methods: {
    isTimeHigh(currentTime, threshold) {
      if (!currentTime || !threshold) return false; // Handle empty time or threshold case

      const timeParts = currentTime.split(':');
      const thresholdParts = threshold.split(':');

      const hour = parseInt(timeParts[0], 10);
      const minute = parseInt(timeParts[1], 10);
      const thresholdHour = parseInt(thresholdParts[0], 10);
      const thresholdMinute = parseInt(thresholdParts[1], 10);

      return hour > thresholdHour || (hour === thresholdHour && minute > thresholdMinute);
    },
    addToDataTable() {

      const timeValue = this.selectedTime;
      const [selectedHour, selectedMinute] = timeValue.split(':');
      let hour = parseInt(selectedHour, 10);
      const minute = parseInt(selectedMinute, 10);
      let ampm = 'AM';

      if (hour >= 12) {
        ampm = 'PM';
        if (hour > 12) {
          hour -= 12;
        }
      } else if (hour === 0) {
        hour = 12;
      }

      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      const formattedTime = `${formattedHour}:${formattedMinute} ${ampm}`;

      this.dataTable.push({ currentTime: formattedTime,});
     /*  this.selectedTime = getCurrentTime(); */
    },
  },
  mounted() {
    // Update selectedTime every second
    setInterval(() => {
      this.selectedTime = getCurrentTime();
    }, 1000);
  },
};

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  let formattedHours = hours % 12;
  formattedHours = formattedHours === 0 ? 12 : formattedHours; // Convert 0 to 12
  formattedHours = formattedHours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}
</script>

<style>
.red-text input {
  color: red !important;
}

.red-row {
  background-color: red !important;
  color: white !important;
}

.time-table {
  width: 100%;
  border-collapse: collapse;
}

.time-table th,
.time-table td {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>
