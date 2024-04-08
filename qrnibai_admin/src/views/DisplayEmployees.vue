<template>
  <v-card  height="1000" flat color="#F9FAFC" >
<v-layout>
  <NavBar/>
<v-main class="mt-n5">
<div class="container123">
  <v-container >

</v-container>
<v-container>

  <v-dialog v-model="loading" persistent  max-width="350">

        <!--  <v-card>
           <v-card-text> -->

           <p style="color:rgb(255, 255, 255);"> Please Wait....</p>

             <v-progress-circular
         :size="100"
         :width="10"

         color="green"
         indeterminate
       ></v-progress-circular>
         <!--   </v-card-text>
         </v-card> -->

       </v-dialog>
     <!--   <v-dialog v-if="loading" v-model="dialogVisible" persistent max-width="300">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Successfully Updated</v-card-title>
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
  </v-dialog> -->

  <v-dialog  v-model="dialogforassignsuccessfully" persistent max-width="300">
    <v-card>
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Successfully Assign</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">
        <v-btn color="green" text @click="dialogoksuccessfullassing()">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
  <v-row class="mt-n15 mt-md-1 ">

    <v-col cols="12" sm="4" md="4" lg="3" xl="2" >
  <v-btn class="ml-md-1 mt-6 mt-lg-4 colorforbutton"  rounded-lg  @click="sendPostRequest()" variant="text">UPDATE EMPLOYEES</v-btn>
  </v-col>

  <v-col class="ml-lg-n12 mt-n5 mt-sm-4  mt-md-4 mt-lg-4 mr-md-6" cols="12" sm="6"  md="6">
  <input v-model="search" class="textbox"  placeholder="Search Employee">
</v-col>

    <v-col cols="12">
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
      <v-card v-if="!isLoading" class="rounded-lg mt-n1">

  <v-data-table
    :search="search"
    item-key="ID"
    :items="empleyado"
    :headers="headers"
    :items-per-page="15"
    class="my_class td btn-hover color-1 elevation-1"
    tile
    density="compact"
  >

<template #bottom></template>
    <template v-slot:item.actions="{ item }">

      <v-btn   class="mt-n2" density="compact" color="success" @click="assignToOffice(item.columns.controlno)" variant="outlined">
        <v-row >
          <p>Assign to Office</p>
        <!--   <v-icon right class="white--text mx-1">mdi-delete</v-icon> -->
        </v-row>
      </v-btn>

    </template>
  </v-data-table>

  <v-dialog  v-model="dialogshowoffice" persistent=""  max-width="300">
  <v-card >
    <v-row >
      <button @click="dialogshowoffice = false" class="close-button "><strong>X</strong></button>
      <v-col cols="12" class="mt-5">
     <!--    <h1 v-if="selectedControlNo">Control Number: {{ selectedControlNo }}</h1> -->
       <!-- <v-combobox label="Select Office" v-model="selectedoffice" :items="Opisdaw" class="mx-4" >

       </v-combobox> -->

       <v-combobox
        prepend-inner-icon="mdi-account"
        class="mx-2 mt-4"
        density="compact"
        variant="solo"
          v-model="selectedoffice"
          :items="Opisdaw"
          label="Select Office Name"


        ></v-combobox>
     <!--   <v-text-field label="office ID" v-model="officeaydebai">

       </v-text-field> -->
      </v-col>

    </v-row>
    <v-card-actions class="d-flex justify-center mt-n7">
      <v-btn color="green"  @click="sendRequestAssignOffice()">Assign</v-btn>
    </v-card-actions>



  </v-card>
</v-dialog>
</v-card>
    </v-col>

  </v-row>
</v-container>
</div>

</v-main>
</v-layout>
</v-card>
</template>


<script>

import NavBar from "@/components/NavBar.vue";
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
components: {
  NavBar,
},

data() {
return {

  dialogforassignsuccessfully:false,
  officeaydebai:'',
  Opisdaw:[],
  selectedoffice:'',
  /* fetchOffices:[], */
  dialogshowoffice:false,
  isLoading: false,
  loadingProgress: 0,
  add_employees_dialog:false,
  dialogforadded:false,
  deletecontrono:'',
 // selectedRemark: "",
 dialogVisible: false,
 selectedItem: null,
 showModal:false,
 showDialog: false,
 /*  selectedOffice: '', */
  selectedTime: getCurrentTime(),
  currentTime: "",
    currentDate: "",
  ID: "",
  Event_name:'',
  search: "",
  searchaddemployee:"",
  eventname:'',
    eventdate:'',
     eventfrom:'',
    eventto:'',
    eventvue:'',
    targetOfficeId: 1,
    timeThreshold: "",
    tempmessage:[],
    dataTable: [],
    message: [],
    messagealreadyscan: [],
    transferredTimes: [],
    mensahenibai: false,
    lastScannedTime: "",
    showMessage: false,
    employees:[],
    AddEmployees:[],
    saveEmployees:[],
    remarks:"",
    designation:"",
    controlno:"",
    fullname:"",
    time: "", // Add this variable
    formattedTime:"",
    status:"",
    userData: {

      office_id: '',

    },
    selectedRemarks: "",
   /*  remarks: ['Absent','Late'], */

    loading: false, // Initial loading state
  createevents:false,
  selectedControlNo: '',
  items: [ /* Your data goes here */ ],
  selectedItems: [],
  // items: [
  //   { title: "My Account", icon: "mdi-account",  },
  //   { title: "Settings", icon: "mdi-clock" },
  //   { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
  // ],

  headers: [
  {
      align: "start",
      key: "controlno",
      sortable: false,
      title: "Control N#",
      align: ' d-none',
    },
      { key: "fullname", title: " Full Name", class: 'header-id', sortable: false },
      { key: "designation", title: "Position", align: ' d-none d-sm-table-cell', sortable: false, },
      { key: "office", title: "Office", class: 'header-id', sortable: false },
      { key: "actions", title: "Actions", sortable: false, },


    ],



};
},

computed: {
  ...mapGetters('users', {empleyado: ['getEmpleyados']} ),
  ...mapGetters('office', {userlist: 'getOffices'}),

  sortedItems() {
      // Sort the items array based on fullname
      return this.empleyado.slice().sort((a, b) => {
        // Use localeCompare to sort strings alphabetically
        return a.fullname.localeCompare(b.fullname);
      });
    },


},

created() {

 /*  this.simulateLoading(() => {

}, ); */

      this.fetchOffices()
      this.fetchEmpleyados()

      this.simulateLoading(() => {

}, );


      setTimeout(() => {
      this.fetchOpis()
    }, 1000);

},



methods: {
...mapActions('users', ['fetchEmpleyados']),
...mapActions('office', ['fetchOffices']),

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
          if(this.empleyado.length >0){
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

dialogoksuccessfullassing(){
  this.fetchEmpleyados()
  this.fetchOffices()
  this.fetchOpis()
  this.dialogforassignsuccessfully = false
},

// async sendRequestAssignOffice() {
//       try {
//         const data = new FormData
//         data.append('Controlno', this.selectedControlNo);
//       /*   console.log("Control NO afg",this.selectedControlNo) */
//         data.append('Office_ID', this.officeaydebai);

//         console.log('FormData:', data);


//       //  const response = await this.$axios.post('https://database.tagumcity.gov.ph/HRQR/adminassigntooffice.php', formData);
//         const response = await axios.post('https://database.tagumcity.gov.ph/HRQR/adminassigntooffice.php', data);

//         // Handle the response here, e.g., show a success message or update your component's state
//         console.log('API Response:', response.data.user);
//       } catch (error) {
//         // Handle errors, e.g., show an error message to the user
//         console.error('Error occurred while sending the request:', error);
//       }
//     },


    async sendRequestAssignOffice() {
      const data = new FormData
      data.append('controlno', this.selectedControlNo);
      data.append('office_id', this.officeaydebai);

  try {
    const response = await axios.post('https://database.tagumcity.gov.ph/HRQR/adminassigntooffice.php', data);
      console.log("Response=",response.data)
      this.selectedoffice = "";
      this.dialogshowoffice = false;
      this.dialogforassignsuccessfully = true;
    if (response.data.error) {
    /*  this.dialogupdated = true */

     this.errorMessage = response.data.user;

      this.successMessage = '';

/*    this.dialogerror = true; */
    } else {
     /*  this.dialogupdated = true;  */
       this.errorMessage = response.data.user;
       this.errorMessage = '';
    /*   this.dialogerror = true; */
    }
  } catch (error) {
    console.error('Error updating username:', error);
    this.errorMessage = 'An error occurred while updating the username.';
    this.successMessage = '';
  }
},


assignToOffice(controlno) {
  console.log("Control NO",controlno)
    this.selectedControlNo = controlno;
    this.dialogshowoffice = true;

  },


  async fetchOpis() {
try {
if ( Array.isArray(this.userlist)) {
  console.log("array------------");
  this.namesData = this.userlist.map(user => {

   return {

  office: user.office,
    id: user.id,
    };
  });

  this.Opisdaw = this.namesData.map(nameData => nameData.office).sort();;
  console.log("Opis Daw",this.Opisdaw)
} else {
  console.error('Invalid data format:', response.data);
}
} catch (error) {
console.error('Error fetching data:', error);
}
},

async sendPostRequest() {
  this.loading = true;
    try {
      const response = await axios.post('/updateemployees.php');
      console.log('API Response:', response.data);

      this.dialogVisible = true


    } catch (error) {
      console.error('Error occurred:', error);
      // Handle errors here
    } finally {
      this.loading = false;
    }
  },

cancelDialog() {
    this.add_employees_dialog = false;
  },

  openaddemployeedialog()
  {
    this.add_employees_dialog = true
    this.search = ""
    this.selectedItems = []
  },


  updateSelectedInfo() {
    console.log("selected opffice=",this.selectedoffice)
    const selectedNameData = this.namesData.find(nameData => nameData.office == this.selectedoffice);
    if (selectedNameData) {
      this.officeaydebai = selectedNameData.id;
    /*   this.selectedFirstName = selectedFirstName.fullName; */



    } else {
      this.officeaydebai = '';



    }
  },


  fetchData() {
 const userDataJSON = localStorage.getItem('user');
 if (userDataJSON) {
   this.userData = JSON.parse(userDataJSON);
 }
},
openConfirmationDialog(item) {
  this.deletecontrono=item.raw.Controlno;
    this.selectedItem = item;
    this.dialogVisible = true;

  },

},

watch: {
  selectedoffice: 'updateSelectedInfo' // Call updateSelectedInfo whenever selectedFullName changes
},

async mounted() {

    this.fetchOpis()
},

beforeUnmount() {
  clearInterval(this.timer); // Clear the timer on component unmount to prevent memory leaks

  if (this.html5QrcodeScanner) {
    this.html5QrcodeScanner.stop();
  }
},
};

function getCurrentTime() {
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const ampm = hours >= 12 ? "PM" : "AM";

let formattedHours = hours % 12;
formattedHours = formattedHours === 0 ? 12 : formattedHours; // Convert 0 to 12
formattedHours = formattedHours.toString().padStart(2, "0");
const formattedMinutes = minutes.toString().padStart(2, "0");

return `${formattedHours}:${formattedMinutes} ${ampm}`;
}
</script>

<style scoped >
   .textbox {
    padding: 10px;
    border: 1px solid #226218;
    border-radius: 10px;
    margin-bottom: 10px;
    height: 35px;
  }
.dialogcssbai {

width: 300px;
height: 200px;
background: pink;
padding: 24px;
}

#qr-code-full-region {

background-color: #f3f0f0;
}

@media screen and (max-width: 600px) {
#select-element {
border: 1px solid #1f7b09;
border-radius: 5px;
padding: 1px;
font-size: 10px;
width: 48px;
height: 20px;
margin-left: 5px;
}

}

.elementobai{
border: 1px solid #1f7b09; /* You can change the color code to your preferred color */
border-radius: 5px;
padding: 1px;
padding-left: 10px;
font-size: 14px;
width: 100px; /* You can adjust the width as needed */
height: 25px;
margin-left: -40px;
}
/* } */

.items-per-page-text {
/* Add your custom styles for the "Items per page" text here */
font-weight: bold;
color: #007bff;
}
.header-id {
background-color: #701c1c;
color: #9e3636;
font-weight: bold;
}


/* @media screen and (max-width: 600px) {
.v-data-table th,
.v-data-table td {
  font-size: 10px;
}
} */

.image {
  border: 1px solid #0a7a0e;
}
.my-input.v-input .v-input__slot {
border-radius: 100px;
}

.v-data-table > .v-data-table__wrapper > table {
  border-spacing: 0 0.10rem;
}


.container123 {
  max-width: 1670px;
padding-left: 20px;
padding-right: 20px;
margin: auto;
}



@media screen and (max-width: 600px) {
.container123 {

padding-left: 0px;
padding-right: 0px;
margin: auto;

}

.card {
  display: none; /* Hide the card on screens with a max-width of 768px (adjust as needed) */
}



}

.mobile-button {
display: none; /* Initially hide the button */

/* Use a media query to show the button on mobile devices */
@media (max-width: 600px) {
  display: block;
}
}

.my-header-style {
background: #666fff;
}
.classfortitle{
/*  color: #70b354; */
  font-size: 15px;
}

.classeventdetails{

  font-size: 20px;
}

.close-button {
position: absolute;
top: 5px;
right: 14px;
font-size: 16px;
background-color: transparent;
border: none;
cursor: pointer;
}
.head {
background-color: #70b354;
color: white;
}
.big-button {
padding: 20px;
font-size: 20px;
}



table {
width: 100%;
border-collapse: collapse;
}

th,
td {
padding: 3px;
border-bottom: 1px solid #ddd;
text-align: center;
}

th {
background-color: #f2f2f2;
}


.close-button {
position: absolute;
top: 5px;
right: 14px;
font-size: 16px;
background-color: transparent;
border: none;
cursor: pointer;
}
.textbox {
padding: 10px;
border: 1px solid #168904;
border-radius: 10px;
margin-bottom: 10px;
width: 340px;
height: 35px;
}



.card.purple {
background: linear-gradient(150deg, #f731db, #edebef 100%);
}

.card.green {
background: linear-gradient(150deg, #eff2eedc, #f2f0f7 100%);
}



.alreadyscan {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #fffffffb;
color: rgb(11, 231, 11);
padding: 10px;
border-radius: 5px;
z-index: 9999;
}


.success-message {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #fffffffb;
color: rgb(9, 230, 27);
padding: 10px;
border-radius: 5px;
z-index: 9999;
}

.v-btn {
text-transform:none !important;
}

.loading-spinner {
display: flex;
justify-content: center;
align-items: center;
height: 100px;
font-size: 20px;
color: #333;
background-color: #f5f5f5;
border: 1px solid #ccc;
}

.dialog {
display: flex;
justify-content: center;
align-items: center;
height: 200px;
width: 400px;
background-color: #ffffff;
border: 1px solid #ccc;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
