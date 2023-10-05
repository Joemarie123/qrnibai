<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-combobox
            label="Hour"
            :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']"
            v-model="selectedHour"
          ></v-combobox>
        </v-col>
        <v-col cols="4">
          <v-combobox
            label="Minute"
            :items="['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']"
            v-model="selectedMinute"
          ></v-combobox>
        </v-col>
        <v-col cols="4">
          <v-combobox
            label="AM/PM"
            :items="['AM', 'PM']"
            v-model="selectedPeriod"
          ></v-combobox>
        </v-col>
      </v-row>
      <p>{{ formattedTime }}</p>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      selectedHour: '',
      selectedMinute: '',
      selectedPeriod: ''
    };
  },
  computed: {
    formattedTime() {
      let hour = parseInt(this.selectedHour);
      if (this.selectedPeriod === 'PM' && hour !== 12) {
        hour += 12;
      } else if (this.selectedPeriod === 'AM' && hour === 12) {
        hour = 12;
      }
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = this.selectedMinute;
      const formattedSecond = '00';
      return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    }
  }
};
</script>
