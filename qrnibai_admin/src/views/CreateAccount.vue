<template>

  <v-card  height="1000" flat color="#F9FAFC" >
    <v-layout  >

      <NavBar/>

      <v-main  class="">

        <v-sheet

          class="custom-card elevation-12 rounded-xl d-flex align-center justify-center flex-wrap text-center mx-auto px-4 mt-6"
          elevation="4"
          rounded
          max-width="70%"
          width="100%"
        >

          <v-container>
            <v-container>

              <v-dialog v-model="dialogduplicate" persistent max-width="280">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Duplicate Entry</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/warning.jpg" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">
        <v-btn color="green" text @click="dialogduplicate = false">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>



<v-dialog v-model="dialogVisible" persistent max-width="280">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Successfully Saved</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">
        <v-btn color="green" text @click="dialogVisible = false">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>

  <v-dialog v-model="dialogerror" persistent max-width="280">
    <v-card >

      <v-row >
        <v-col cols="11" class="mt-4">
          <v-card-title class="headline">Unable to Save Account</v-card-title>
        </v-col>
        <v-col cols="1" class="ml-n10">
          <v-avatar class="my-5 image" size="40" >
            <v-img src="/error.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>



      <v-card-actions class="d-flex justify-center mt-n7">

        <v-btn color="red" text @click="dialogerror = false">OK</v-btn>

      </v-card-actions>

    </v-card>
  </v-dialog>



              <v-row>
                <v-col cols="12" lg="3" >
        <div class="ml-n16">
          <v-btn
          color="orange"
            class="text-none primary"
            min-width="92"
            rounded
            variant="outlined"
            @click="$router.push('/UserList').catch((err) => {})"
          >
            <v-icon> mdi-arrow-left </v-icon>
            Back
          </v-btn>
        </div>
      </v-col>


                <v-col cols="12" lg="7">
              <span class="text-h4 ">CREATE OFFICE ADMIN ACCOUNT</span>
            </v-col>


    </v-row>
            </v-container>
          <!--   <v-divider :thickness="5" color="green" class=" mb-4"></v-divider> -->
            <v-container>
              <v-row >

                <v-col cols="12" lg="6" offset="4">
              <!--     <v-combobox
                     class="ml-1 rounded-xl"
                     label="Search Full Name"
                    density="compact"
                    variant="solo"

                    :items="fullNames"
                    v-model="selectedFullName"
                  ></v-combobox> -->



                  <v-combobox
                  v-if="!isLoading"
        prepend-inner-icon="mdi-account"
        class="mx-2"
        density="compact"
        variant="solo"
          v-model="selectedFullName"
          :items="fullNames"
          label="Select a Full Name"


        ></v-combobox>
        <v-row class="d-flex align-center justify-center">
      <div v-if="isLoading" class=" my-10 "  >
             <v-progress-circular

      :size="70"
      :width="7"
      color="green"
      indeterminate
    ></v-progress-circular>

             <div class="loading-text">Please Wait...</div>
           </div>
          </v-row>
         <!--   <h1>
            {{ selectedidoffice }}
           </h1> -->
          <!--   <v-text-field v-model="selectedidoffice">

            </v-text-field> -->
                </v-col>
              </v-row>
              <br />

              <v-row>
                <v-col cols="12">
                <v-card  class="rounded-xl elevation-10 ">
                  <v-container>
                    <v-col>
                      <v-row>

                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    readonly
                    label="Last Name"
                    v-model="selectedLastName"
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                  readonly
                    label="Status"
                    v-model="selectedStatus"
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                  readonly
                  v-model="selectedFirstName"
                    label="First Name "
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                  readonly
                    label="Designation"
                    v-model="selectedDesignation"
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                  readonly
                  v-model="selectedMiddleName"
                    label="Middle Name"
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6" lg="6">

                  <v-combobox
        density="compact"
        variant="solo"
          v-model="selectedOffice"
          :items="officeIDs"
          label="Select OFFICE"
        ></v-combobox>


                </v-col>

                <!-- <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                  readonly
                    label="Office ID"
                    v-model="selectedOfficeID"
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>
 -->

              </v-row>

              </v-col>
            </v-container>


              </v-card>
            </v-col>
                <v-col cols="12" md="12">
                  <h2 >Login Credentials</h2>
                </v-col>

                <v-divider :thickness="5" color="green" class="mb-4"></v-divider>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Username"
                    v-model="selectedUsername"
                    required
                    density="compact"
                    class="mb-n6"
                    variant="solo"
                  ></v-text-field>

                 <!--  <v-text-field v-model="selectedControlno">

                  </v-text-field> -->
                </v-col>

                <v-col cols="12" md="2">
                  <v-switch
    v-model="toggleValue"
    hide-details
    :true-value="1"
    :false-value="0"
    color="success"
    :label="`Admin: ${displayValue}`"
  ></v-switch>
                </v-col>


                <v-col cols="12" md="3">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                    density="compact"
                    class="mb-n6"
                    variant="solo"
                    v-model="selectedpassword"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                  @input="validateForm"
                  v-model="selectedConfirmpassword"
                    label="Confirm Passwords*"
                    type="password"
                    required
                    density="compact"
                    class="mb-n6"
                    variant="solo"
                  ></v-text-field>
                  <p class="mt-2" v-if="errorMessage" style="color:red">{{ errorMessage }}</p>
                </v-col>


              </v-row>
          </v-container>
            <div class="pa-4 text-end">
              <v-btn
              class="text-none mr-2"
              color="green"
              min-width="92"
              @click="saveaccount()"
            >
              Save Account
            </v-btn>


          </div>
          </v-container>

        </v-sheet>

      </v-main>

    </v-layout>
  </v-card>

  </template>

<script>
import { mapGetters,mapActions } from 'vuex';
import NavBar from '../components/NavBar'

export default {
  name: 'App',

  components: {
    NavBar,
  },


  data () {
    return {
      toggleValue: 0,
      dialogduplicate:false,
      isLoading: false,
      dialogVisible:false,
      dialogerror:false,
      loadingProgress: 0,
      fullNames: [],
      officeIDs:[],
      namesData: [], // Array to store names data
      selectedFullName:'',
      selectedLastName:'',
      selectedidoffice:'',
      selectedMiddleName:'',

      selectedStatus:'',
      selectedFirstName:'',
      selectedDesignation:'',
      selectedOfficeID:'',
      selectedOffice:'',
      selectedUsername:'',
      selectedpassword:'',
      selectedConfirmpassword:'',
      errorMessage: '',
      selectedControlno:'',


    }

  },
  computed:{
    ...mapGetters("office", { Officeslist: "getOffices" }),
      ...mapGetters('users', {userlist: 'getUsers'}),
      displayValue() {
         return this.toggleValue === 1 ? 'Yes' : 'No';
       }
},

created(){
  // this.isLoading=true
  this.fetchUsers()
  // .then((e)=>{this.isLoading=false}).catch((e)=>{console.log(e)})
 /*  setTimeout(() => {
    this.fetchFullNames()
  }, 1000); */
 /*  setTimeout(() => {

   }, 1000 ); */

   this.fetchOfficesss()
    this.fetchFullNames()
    this.simulateLoading(() => {

}, );
},
  methods: {

    ...mapActions('users', ['fetchUsers']),
    ...mapActions("office", ["fetchOffices"]),
    ...mapActions('account', ['registerAccountUsers']),
    // simulateLoading() {
    //   const interval = 20; // Change this to control the speed of loading
    //   const totalSteps = 50; // Adjust this based on the total number of steps you want
    //   let currentStep = 0;

    //   this.isLoading = true;

    //   const loadingInterval = setInterval(() => {
    //     currentStep++;
    //     this.loadingProgress = (currentStep / totalSteps) * 100;

    //     if (currentStep >= totalSteps) {
    //       if(this.examinee.length >0){
    //         clearInterval(loadingInterval);
    //       this.isLoading = false;
    //       this.loadingProgress = 0;
    //       this.fetchFullNames();
    //       }else{
    //         currentStep=0
    //       }

    //     }
    //   }, interval);
    // },
    simulateLoading() {
      const interval = 20; // Change this to control the speed of loading
      const totalSteps = 50; // Adjust this based on the total number of steps you want
      let currentStep = 0;

      this.isLoading = true;

      const loadingInterval = setInterval(() => {
        currentStep++;
        this.loadingProgress = (currentStep / totalSteps) * 100;

        ////KINI TAWAGON AFTER SA TUYOK


      //////////////////////////////////

        if (currentStep >= totalSteps) {
          if(this.userlist.length >0){
            clearInterval(loadingInterval);
          this.isLoading = false;
          this.loadingProgress = 0;
 /*   this.fetchEventsHistory() */
          }else{
            currentStep=0
          }

        }
      }, interval);
    },

    validateForm() {
                    if (this.selectedpassword !== this.selectedConfirmpassword) {
                        this.errorMessage = 'Passwords do not match';
                        return false;
                    }
                    this.errorMessage = '';
                    return true;
                },


    saveaccount()
    {

      if (this.errorMessage == 'Passwords do not match' || this.selectedLastName.length == 0  || this.selectedUsername.length == 0 || this.selectedpassword.length == 0 || this.selectedConfirmpassword.length == 0 || this.selectedOffice.length == 0 )
      {
        this.dialogerror = true;
      }

      else {
      /*  this.dialogVisible = true; */
      let data = new FormData();
      data.append('lastname', this.selectedLastName);
      data.append('firstname', this.selectedFirstName);
      data.append('middlename', this.selectedMiddleName);
      data.append('status', this.selectedStatus);

      data.append('designation', this.selectedDesignation);
      data.append('office_id', this.selectedidoffice);
      data.append('admin', this.toggleValue);
      data.append('username', this.selectedUsername);
      data.append('password', this.selectedpassword);
      data.append('Controlno', this.selectedControlno);

      this.registerAccountUsers(data).then(e => {
        /*   this.navigateTo('/walup'); */
        console.log("value of e=",e)
        if (e == 1){
          this.dialogduplicate = true;
        }else{
          this.dialogVisible = true;
          this.selectedidoffice = '',
          this.selectedFullName = '';
        this.selectedLastName = '';
        this.selectedFirstName = '';
        this.selectedMiddleName = '';
        this.selectedStatus = '';
        this.selectedDesignation = '';
        this.selectedOfficeID = '';
        this.selectedadmin = '';
        this.toggleValue = '';
        this.selectedUsername = '';
        this.selectedUsername = '';
        this.selectedpassword = '';
        this.selectedConfirmpassword = '';
        this.selectedControlno = '';
        this.selectedOffice = '';


        }

}
).catch(e => console.log(e.message));

      }

    },

   hideAlertAfterDelay() {
      setTimeout(() => {
        this.alertMessage = false;
      }, 2000); // 3000 milliseconds = 3 seconds
    },


    async fetchOfficesss() {
try {
  // const response = await axios.get('http://10.0.1.23:80/PEESOCESPRO/users.php');
  // Handle the specific data format with "users" property
  if ( Array.isArray(this.Officeslist)) {
    console.log("array------------",this.Officeslist);
    this.officeData = this.Officeslist.map(user => {

      return {

        office: user.office,
        id: user.id,

       /*  fullname: user.fullname,
        lastname: user.lastname,
        firstname: user.firstname,
        middlename: user.middlename,
        status: user.status,
        designation: user.designation,
        Controlno: user.Controlno, */
      };

    });

    this.officeIDs = this.officeData.map(officeData => officeData.office).sort();
    console.log("OFFICE LISSSTTT=",this.officeIDs);

  } else {
    console.error('Invalid data format:', response.data);
  }
} catch (error) {
  console.error('Error fetching data:', error);
}
},

    async fetchFullNames() {
try {
  // const response = await axios.get('http://10.0.1.23:80/PEESOCESPRO/users.php');
  // Handle the specific data format with "users" property
  if ( Array.isArray(this.userlist)) {
    console.log("array------------");
    this.namesData = this.userlist.map(user => {

      return {

        office_id: user.office_id,
        fullname: user.fullname,
        lastname: user.lastname,
        firstname: user.firstname,
        middlename: user.middlename,
        status: user.status,
        designation: user.designation,
        Controlno: user.Controlno,

      };
    });

    this.fullNames = this.namesData.map(nameData => nameData.fullname).sort();
  } else {
    console.error('Invalid data format:', response.data);
  }
} catch (error) {
  console.error('Error fetching data:', error);
}

},

updateSelectedInfo() {
      const selectedNameData = this.namesData.find(nameData => nameData.fullname == this.selectedFullName);
      if (selectedNameData) {
        this.selectedOfficeID = selectedNameData.office;
      /*   this.selectedFirstName = selectedFirstName.fullName; */
        this.selectedLastName = selectedNameData.lastname;
        this.selectedFirstName = selectedNameData.firstname;
        this.selectedMiddleName = selectedNameData.middlename;
        this.selectedStatus = selectedNameData.status;
        this.selectedDesignation = selectedNameData.designation;
        this.selectedControlno = selectedNameData.Controlno;

      } else {
        this.selectedOfficeID = '';
        this.selectedLastName = '';
        this.selectedFirstName = '';
        this.selectedMiddleName = '';
        this.selectedStatus = '';
        this.selectedDesignation = '';
        this.selectedControlno = '';
      }
    },

    updateSelectedOffice() {
      const selectedNameData = this.officeData.find(officeData => officeData.office == this.selectedOffice);
      console.log("selectedNameDATA ID",this.selectedOffice)

      if (selectedNameData) {
        this.selectedOffice = selectedNameData.office;
      /*   this.selectedFirstName = selectedFirstName.fullName; */
        this.selectedidoffice = selectedNameData.id;
      } else {
        this.selectedidoffice = '';
      }
    },


  },


  watch: {
    selectedFullName: 'updateSelectedInfo', // Call updateSelectedInfo whenever selectedFullName changes
    selectedOffice: 'updateSelectedOffice', // Call updateSelectedInfo whenever selectedFullName changes
  },

mounted() {
    this.fetchFullNames();
    this.fetchOfficesss();

  },


    };


</script>
<style scoped>
.image {
    border: 2px solid #4caf4f00;
}
.custom-card {
  border-radius: 20px; /* Adjust the radius as needed */
  border: 2px solid #5ec030; /* Border color */
}

.colordivider{
background-color:#5ec030;
}

.submitbotton{
  color: white;
  background-color: rgba(15, 83, 15, 0);
 }

.fade-transition-enter-active, .fade-transition-leave-active {
  transition: opacity 1s;
}
.fade-transition-enter, .fade-transition-leave-to {
  opacity: 0;
}
/* .green-card {
  background-color: rgba(1, 36, 20, 0.356);
  color: white;
} */

  .loading-progress-bar {
  width: 100%;
  height: 10px;
  background-color: #ccc;
}

.loading-text {
  position: absolute;
  font-size: 16px;
  color: #333;
}

.loading-progress {
  height: 100%;
  background-color: #3498db;
  transition: width 0.2s ease-in-out;
}
.login-form {
  max-width: 100%;
  margin: 0 auto;

  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
}

.login-title {
  text-align: center;
}
</style>
