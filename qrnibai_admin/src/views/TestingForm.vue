
<template>
  <div>
    <p>Current Date and Time (GMT+8): {{ formattedDateTime }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formattedDateTime: '',
    };
  },
  mounted() {
    this.getCurrentDateTime();
  },
  methods: {
    async getCurrentDateTime() {
      try {
        const response = await axios.get('https://worldtimeapi.org/api/ip');
        const { datetime, utc_offset } = response.data;

        // Parse the received datetime string
        const serverDateTime = new Date(datetime);

        // Adjust to GMT+8
        const localDateTime = new Date(serverDateTime.getTime() + utc_offset * 1000);

        // Format the date and time
        this.formattedDateTime = this.formatDateTime(localDateTime);
      } catch (error) {
        console.error('Error fetching current date and time:', error);
      }
    },
    formatDateTime(dateTime) {
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Shanghai', // GMT+8
      };
      return dateTime.toLocaleString('en-US', options);
    },
  },
};
</script>
