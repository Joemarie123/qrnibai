<template>
  <v-card class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar>
        <template v-slot:prepend>
          <v-avatar :size="50">
            <v-img src="/Tagum.png" alt="altText"> </v-img>
          </v-avatar>
        </template>
        <v-app-bar-title
          ><span :style="{ color: 'green' }">HOME EVENTS</span></v-app-bar-title
        >
        <v-spacer></v-spacer>
        <v-avatar class="mx-2 my-2" :size="50">
          <v-img src="img5.png">
            <v-menu activator="parent">
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                  @click="$router.push(item.route).catch((err) => {})"
                >
                  <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                  </template>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-img>
        </v-avatar>
      </v-app-bar>
    </v-layout>
  </v-card>

  <div class="mt-16">
    <v-container>
      <v-row no-gutters align="center">
        <v-col class="d-flex justify-start" :cols="6">
          <h2 :style="{ color: 'green' }">EVENTS</h2>
        </v-col>
        <v-col class="d-flex justify-end" :cols="6">
          <v-txt btn @click="$router.push('EventHistory')" class="view"
            >View History</v-txt
          >
        </v-col>
      </v-row>
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
                <td class="center">
                  {{ row.attendance }} / {{ row.employee }}
                </td>
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
export default {
  data() {
    return {
      items: [
        { title: "My Account", icon: "mdi-account", route: "/EditAccount", },
        { title: "Settings", icon: "mdi-clock" },
        // { title: "Click Me 2" },
      ],
      tableData: [
        {
          id: 1,
          eventName: "Araw Nang Tagum",
          eventDates: "2023-07-20",
          attendance: 0,
          employee: 50,
        },
        {
          id: 2,
          eventName: "Kantahan of the Night",
          eventDates: "2023-07-21",
          attendance: 0,
          employee: 50,
        },
        {
          id: 3,
          eventName: "Civil Service Event",
          eventDates: "2023-07-22",
          attendance: 0,
          employee: 50,
        },
        {
          id: 4,
          eventName: "Tagum October Fest",
          eventDates: "2023-07-22",
          attendance: 0,
          employee: 50,
        },
        {
          id: 5,
          eventName: "Beer of the Month",
          eventDates: "2023-07-22",
          attendance: 0,
          employee: 50,
        },
        {
          id: 6,
          eventName: "Nutrition Month",
          eventDates: "2023-07-22",
          attendance: 0,
          employee: 50,
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
.view {
  color: red;
}
#Events {
  margin-top: 10%;
}
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
  