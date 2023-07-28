<template>
    <hr-bar />
  <div class="mt-16">
    <v-container>
      <v-btn class="my-10" color="green" height="100">
        <v-icon size="90">mdi-calendar-plus</v-icon>
        <span class="mt-11">Create Events</span></v-btn
      >
      <h2 class="mx-2" :style="{ color: 'green' }">EVENTS</h2>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <table>
            <thead>
              <tr>
                <th class="head">#</th>
                <th class="head">Event Name</th>
                <th class="head">Event Dates</th>
                <th class="head">Attendance</th>
                <th class="head">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in tableData" :key="row.id">
                <td class="center">{{ row.id }}</td>
                <td>{{ row.eventName }}</td>
                <td>{{ row.eventDates }}</td>
                <td class="center">{{ row.attendance }}</td>
                <td class="center">
                  <v-btn class="mx-2" color="blue">
                    <v-icon size="25" @click="$router.push('event-view')"
                      >mdi-eye</v-icon
                    >
                  </v-btn>

                  <v-btn
                    class="mx-2"
                    color="green"
                    @click="$router.push('event-details')"
                  >
                    <v-icon size="25">mdi-printer</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

  
<script>
import HrBar from "@/components/toolbar/HrBar.vue";
export default {
  components: {
    HrBar,
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          eventName: "Araw Nang Tagum",
          eventDates: "2023-07-20",
          attendance: 50,
        },
        {
          id: 2,
          eventName: "Kantahan of the Night",
          eventDates: "2023-07-21",
          attendance: 75,
        },
        {
          id: 3,
          eventName: "Civil Service Event",
          eventDates: "2023-07-22",
          attendance: 90,
        },
        {
          id: 4,
          eventName: "Tagum October Fest",
          eventDates: "2023-07-22",
          attendance: 90,
        },
        {
          id: 5,
          eventName: "Beer of the Month",
          eventDates: "2023-07-22",
          attendance: 90,
        },
        {
          id: 6,
          eventName: "Nutrition Month",
          eventDates: "2023-07-22",
          attendance: 90,
        },
        // Add more sample data here...
      ],
    };
  },
  methods: {
    editEvent(id) {
      // Handle edit event logic
      console.log("Edit Event:", id);
    },
    deleteEvent(id) {
      // Handle delete event logic
      console.log("Delete Event:", id);
    },
  },
};
</script>

<style>
.head {
  background-color: #70b354;
  color: white;
}
.big-button {
  padding: 20px;
  font-size: 20px;
}

.pagebai {
  max-width: 400px;
  margin: 0 auto;

  position: absolute;
  left: 22%;
  top: 22%;
  width: 400px;
  transform: translate(-50%, -50%);

  border-radius: 20px;
  /*  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
 */
}

.page {
  margin: 300px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
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
