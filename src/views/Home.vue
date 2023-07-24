<template>
  <div class="page">
    <h1>EVENTS</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Event Name</th>
          <th>Event Dates</th>
          <th>Attendance</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.id">
          <td class="center">{{ row.id }}</td>
          <td>{{ row.eventName }}</td>
          <td>{{ row.eventDates }}</td>
          <td class="center">{{ row.attendance }}</td>
          <td class="center">
            <v-btn color="blue" @click="editEvent(row.id)">
              
            </v-btn>

            <v-btn class="mx-2" color="green" @click="editEvent(row.id)"></v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { id: 1, eventName: 'Araw Nang Tagum', eventDates: '2023-07-20', attendance: 50 },
        { id: 2, eventName: 'Kantahan of the Night', eventDates: '2023-07-21', attendance: 75 },
        { id: 3, eventName: 'Civil Service Event', eventDates: '2023-07-22', attendance: 90 },
        { id: 3, eventName: 'Tagum October Fest', eventDates: '2023-07-22', attendance: 90 },
        { id: 3, eventName: 'Beer of the Month', eventDates: '2023-07-22', attendance: 90 },
        { id: 3, eventName: 'Nutrition Month', eventDates: '2023-07-22', attendance: 90 },
        // Add more sample data here...
      ]
    };
  },
  methods: {
    editEvent(id) {
      // Handle edit event logic
      console.log('Edit Event:', id);
    },
    deleteEvent(id) {
      // Handle delete event logic
      console.log('Delete Event:', id);
    }
  }
};
</script>

<style>
.page {
  margin: 200px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
/* 
.login-form {
    max-width: 1500 px;
    margin: 0 auto;

    position: absolute;
  left: 50%;
  top: 50%;
  width: 10000px;
  transform: translate(-50%,-50%);

  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
  }
 */
</style>
