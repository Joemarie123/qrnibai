<template>
  <v-app>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="data"
        item-key="name"
        class="elevation-1"
      >
        <template v-slot:item.name="{ item }">
          {{ item.name }}
        </template>
        <template v-slot:item.time="{ item }">
          <span :style="{ color: isLate(item.time) ? 'red' : 'black' }">
            {{ item.time }}
          </span>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Time", value: "time" }
      ],
      data: [
        { name: "Joemarie", time: "(Late)" },
        // Add more data objects as needed
      ]
    };
  },
  methods: {
    isLate(time) {
      return time.includes("(Late)");
    }
  }
};
</script>
<style scoped>
.late-row {
  background-color: red; /* Set the background color to red for late rows */
  color: white; /* Set text color to white for better visibility */
}
</style>