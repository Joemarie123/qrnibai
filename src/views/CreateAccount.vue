<template>
 
  <v-card  height="1000" flat color="#F9FAFC" >
    <v-layout  >
     
      <NavBar/>
      
      <v-main  class="mt-16">
        
        <v-sheet
       
          class="custom-card elevation-12 rounded-xl d-flex align-center justify-center flex-wrap text-center mx-auto px-4 mt-6"
          elevation="4"
          rounded
          max-width="70%"
          width="100%"
        >
          <v-container>
            <v-container>
              <span class="text-h4 ">CREATE OFFICE ADMIN ACCOUNT</span>
            </v-container>
          <!--   <v-divider :thickness="5" color="green" class=" mb-4"></v-divider> -->
            <v-container>
              <v-row >

                <v-col cols="6" offset="4">
              <!--     <v-combobox
                     class="ml-1 rounded-xl"
                     label="Search Full Name"
                    density="compact"
                    variant="solo"
                  
                    :items="fullNames"
                    v-model="selectedFullName"
                  ></v-combobox> -->
                  
                <div v-if="isLoading" class="loading-progress-bar my-10 "  >
             
             <div class="loading-progress " :style="{ width: loadingProgress + '%' }">
             
             </div>
             
             <div class="loading-text">Please Wait...</div>
           </div>
                  <v-combobox
        prepend-inner-icon="mdi-account"
        class="mx-2"
        density="compact" 
        variant="solo"
          v-model="selectedFullName"
          :items="fullNames"
          label="Select a Full Name"
         
        ></v-combobox>


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
                    label="Last Name"
                    v-model="selectedLastName"
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    label="Status"
                    v-model="selectedStatus"
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                  v-model="selectedFirstName"
                    label="First Name "
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    label="Designation"
                    v-model="selectedDesignation"
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                  v-model="selectedMiddleName"
                    label="Middle Name"
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    label="Office ID"
                    v-model="selectedOfficeID"
                    variant="solo"
                    density="compact"
                    class="mb-n6"
                  ></v-text-field>
                </v-col>


              </v-row>

              </v-col>
            </v-container>

    
              </v-card>
            </v-col>
                <v-col cols="12" md="12">
                  <h2 >Login Credentials</h2>
                </v-col>
                <v-divider :thickness="5" color="green" class="mb-4"></v-divider>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Username"
                    required
                    density="compact"
                    class="mb-n6"
                    variant="solo"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                    density="compact"
                    class="mb-n6"
                    variant="solo"
                  ></v-text-field>
                </v-col>
              </v-row>
          </v-container>
            <div class="pa-4 text-end">
              <v-btn
              class="text-none mr-2"
              color="green"
              min-width="92"
              @click="dialog = false"
            >
              Save Account
            </v-btn>
            
            <v-btn
              class="text-none"
              color="orange"
              min-width="92"
              variant="outlined"
              @click="dialog = false"
            >
              Cancel
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
      isLoading: false,
      loadingProgress: 0,
      fullNames: [],
      namesData: [], // Array to store names data
      selectedFullName:'',
      selectedLastName:'',
      selectedMiddleName:'',
      selectedStatus:'',
      selectedFirstName:'',
      selectedDesignation:'',
      selectedOfficeID:'',
      
    }

  },
  computed:{
      ...mapGetters('users', {userlist: 'getUsers'}),
},
  
created(){
  // this.isLoading=true
  this.fetchUsers()
  // .then((e)=>{this.isLoading=false}).catch((e)=>{console.log(e)})
 /*  setTimeout(() => {
    this.fetchFullNames()
  }, 1000); */
  setTimeout(() => { 
    this.fetchFullNames()
   }, 3000 ); 

  
},
  methods: {
    ...mapActions('users', ['fetchUsers']),

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

   hideAlertAfterDelay() {
      setTimeout(() => {
        this.alertMessage = false;
      }, 2000); // 3000 milliseconds = 3 seconds
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
      
      };
    });

    this.fullNames = this.namesData.map(nameData => nameData.fullname).sort();;
  } else {
    console.error('Invalid data format:', response.data);
  }
} catch (error) {
  console.error('Error fetching data:', error);
}
},





updateSelectedInfo() {
      const selectedNameData = this.namesData.find(nameData => nameData.fullname === this.selectedFullName);
      if (selectedNameData) {
        this.selectedOfficeID = selectedNameData.office_id;
      /*   this.selectedFirstName = selectedFirstName.fullName; */
        this.selectedLastName = selectedNameData.lastname;
        this.selectedFirstName = selectedNameData.firstname;
        this.selectedMiddleName = selectedNameData.middlename;
        this.selectedStatus = selectedNameData.status;
        this.selectedDesignation = selectedNameData.designation;

   
      } else {
        this.selectedOfficeID = '';
        this.selectedLastName = '';
        this.selectedFirstName = '';
        this.selectedMiddleName = '';
        this.selectedStatus = '';
        this.selectedDesignation = '';
      
      }
    },
  },
  watch: {
    selectedFullName: 'updateSelectedInfo', // Call updateSelectedInfo whenever selectedFullName changes
  },

mounted() {
    this.fetchFullNames();

  },


    };


</script>
<style scoped>
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
