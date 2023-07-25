<template>
  <v-card class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar>
        <template v-slot:image> </template>
        <template v-slot:prepend>
          <v-avatar :size="50">
            <v-img src="/Tagum.png" alt="altText"></v-img>
          </v-avatar>
        </template>

        <v-app-bar-title>
          <span :style="{ color: 'green' }">HOME EVENTS</span>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-avatar class="mx-2 my-2" :size="50">
          <v-img src="img5.png"></v-img>
        </v-avatar>
      </v-app-bar>
    </v-layout>
  </v-card>

  <div>
    <v-container>
    <v-sheet
      class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 mt-16"
      elevation="4"
      rounded
      max-width="90%"
      width="100%"
    >
      <v-row>
        <v-col cols="4">
          <div class="center1">
            <v-img :width="100" src="/phil.png" class=""></v-img>
          </div>
        </v-col>
        <v-col cols="4">
          <h3 class="mt-12">Republic of the Philippines</h3>
          <h3 class="">Province of Davao del Norte</h3>
          <h3 class="">CITY OF TAGUM</h3>
        </v-col>
        <v-col cols="4">
          <div class="center">
            <v-img :width="100" src="/Tagum.png" class=""></v-img>
          </div>
        </v-col>
      </v-row>

      <v-divider color="blue" :thickness="5" class="mt-2"></v-divider>
      
      
      <v-container>
        <v-row no-gutters style="text-align: justify">
          <v-col cols="12" md="6">
            <p>Department:</p>
            <p>Division:</p>
            <p>Section/Unit:</p>
            <p>Project:</p>
          </v-col>
          <v-col cols="12" md="6">
            <p>Date:</p>
            <p>Activity:</p>
            <p>Venue:</p>
          </v-col>
        </v-row>
      </v-container>

        <v-container>
          <v-row>
            <v-col class="d-flex justify-end mb-6">
              <v-btn id="buttonScan">Start Scanning</v-btn>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col>
              <table>
                <thead>
                  <tr>
                    <th id="head">No.</th>
                    <th id="head">Name</th>
                    <th id="head">Position</th>
                    <th id="head">Time Scanned</th>
                    <th id="head">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.no }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.position }}</td>
                    <td>{{ item.timeScanned }}</td>
                    <td>{{ item.remarks }}</td>
                  </tr>
                </tbody>
              </table>
            </v-col>
          </v-row>
        </v-container>
    </v-sheet>
    </v-container>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      desserts: [
        {
          no: "1",
          name: "Honey Curay",
          position: "Hatdog",
          timeScanned: "2121",
          remarks: "zxdfd",
        },
        {
          no: "1",
          name: "Honey Curay",
          position: "Hatdog",
          timeScanned: "2121",
          remarks: "zxdfd",
        },
        {
          no: "1",
          name: "Honey Curay",
          position: "Hatdog",
          timeScanned: "2121",
          remarks: "zxdfd",
        },
      ],
    };
  },
};
</script>
  <style scoped>
.center1 {
  margin: 0;
  position: absolute;
  top: 10%;
  left: 20%;
}
#buttonScan {
  background-color: #70b354;
  color: white;
  margin-bottom: -30px;
}
.center {
  margin: 0;
  position: absolute;
  top: 10%;
  right: 20%;
}
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100;
}
#head {
  background-color: #70b354;
  color: white;
}
#pic {
  align-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  #pic {
    size: 50 !important;
  }
}
</style>