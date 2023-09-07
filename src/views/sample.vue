<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-text-field v-model="id" label="ID"></v-text-field>
          <v-text-field v-model="time" label="Time"></v-text-field>
          <v-btn @click="updateTime" color="primary">Update Time</v-btn>
        </v-col>
        <v-col cols="8">
          <v-data-table
            :items="dataTable"
            :headers="headers"
            :search="search"
            :loading="loading"
          >
            <template #v-slot:item.time="{ item }">
              {{ item.time }}
            </template>

            <template v-slot:item.selectedRemarks="{ item }">
              <!-- Check if item.time is empty -->
              <v-select
                v-if="!item.time" 
                variant="outlined"
                density="compact"
                :items="remarksOptions"
                v-model="item.selectedRemarks"
              >
              </v-select>
              <!-- If item.time is not empty, display nothing -->
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      time: "",
      selectedRemarks: "",
      remarksOptions: ["good", "bad", "absent"],
      dataTable: [
        { id: 1, name: "John", address: "123 Main St.", time: "", selectedRemarks: "" },
        { id: 2, name: "Jane", address: "456 Elm St.", time: "", selectedRemarks: "" },
        { id: 3, name: "Bob", address: "789 Oak St.", time: "", selectedRemarks: "" },
      ],
      headers: [
        { title: "ID", key: "id" },
        { title: "Name", key: "name" },
        { title: "Address", key: "address" },
        { title: "Time", key: "time" },
        { title: "remarks", key: "selectedRemarks" },
      ],
      search: "",
      loading: false,
    };
  },
  methods: {
    updateTime() {
      const index = this.dataTable.findIndex((item) => item.id === parseInt(this.id));
      if (index !== -1) {
        const updatedItem = this.dataTable.splice(index, 1)[0];
        updatedItem.time = this.time;
        updatedItem.selectedRemarks = this.selectedRemarks;
        this.dataTable.unshift(updatedItem);
      } else {
        // Handle error or show a message for invalid ID
      }
      this.id = "";
      this.time = "";
      this.selectedRemarks = "";
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
