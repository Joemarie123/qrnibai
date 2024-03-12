<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-text>
              Formatted Time: {{ formattedTime }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      ServerDateTime: {
        time: "09:04:58 AM" // Assuming this is the format
      }
    };
  },
  computed: {
    formattedTime() {
      return this.formatTime(this.ServerDateTime.time);
    }
  },
  methods: {
    formatTime(timeString) {
      return moment(timeString, 'hh:mm:ss A').format('h:mm A');
    }
  }
};
</script>
