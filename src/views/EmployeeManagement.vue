<template>
    <v-card  height="1000" flat color="#F9FAFC" >
  <v-layout>
  <NavBarUser/>

  <v-main class="mt-n5">
  <div class="container123">
  <v-container >

  </v-container>

  <v-container>

    <v-row class="mt-md-n2 mt-md-1 ">

      <v-col cols="12" sm="3" md="3" lg="2">
  <v-btn class=" ml-md-1 mt-1 mt-lg-n1 mt-sm-1 colorforbutton" color="success"    rounded  @click="openaddemployeedialog()" >ADD EMPLOYEES</v-btn>
  </v-col>


  <v-col class="mt-lg-n1 mt-sm-2 mr-md-6 " cols="12" sm="6"  md="3">
  <input v-model="search" class="textbox "  placeholder="Search Employee">
  </v-col>

  <v-col cols="12" sm="3" md="2" >
  <v-btn class=" ml-md-1 mt-1 mt-lg-n1 mt-sm-1 colorforbutton" color="success"    rounded  @click="setofficedialog = true" >SET OFFICE HEAD</v-btn>
  </v-col>

  <v-dialog  v-model="setofficedialog" persistent=""  max-width="300">
  <v-card >
    <v-row >
      <button @click="setofficedialog = false" class="close-button "><strong>X</strong></button>
      <v-col cols="12" class="mt-5">
     <!--    <h1 v-if="selectedControlNo">Control Number: {{ selectedControlNo }}</h1> -->
       <!-- <v-combobox label="Select Office" v-model="selectedoffice" :items="Opisdaw" class="mx-4" >

       </v-combobox> -->

       <v-combobox
        prepend-inner-icon="mdi-account"
        class="mx-2 mt-4"
        density="compact"
        variant="solo"
          v-model="selectedofficeName"
          :items="OfficeFullname_Array"
          label="Select Office Head"


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
<v-dialog  v-model="add_employees_dialog" persistent  origin='center' max-width="1000" >

<v-card>
<v-container>
<v-row >
  <v-col class="mt-1 ml-n3 mx-2" cols="12" sm="6"  md="6">
  <input v-model="searchaddemployee" class="textbox"  placeholder="Search Employee">
</v-col>

  <v-data-table
         density="compact"
         :headers="headers_add_employees"
         :items="sortedItems_addemployees"
         :search="searchaddemployee"
         :items-per-page="4"
        class="my_class td mx-1"
         :single-select="false">
         <template v-slot:item="{ item }">
            <tr >
              <td><v-checkbox class="mt-3 ml-5"    density="compact" v-model="item.selected" @input="selectRow(item)"></v-checkbox></td>
              <!-- <td>{{ item.fullname }}</td>
              <td>{{ item.designation }}</td> -->
              <td class=  "mobile-hide"  :style="{ textAlign: 'left' }">{{ item.columns.Controlno }}</td>
              <td  :style="{ textAlign: 'left' }">{{ item.columns.fullname}}</td>
              <td :style="{ textAlign: 'left' }">{{ item.columns.designation }}</td>
            </tr>
          </template>
          <template #bottom></template>
        </v-data-table>
        <v-col class="d-flex justify-end">
      <!--   <v-card-actions class="d-flex justify-end"> -->
          <v-btn variant="outlined"  @click="saveAllData()" class="mx-2" color="green">ADD</v-btn>
          <v-btn variant="outlined" @click="cancelDialog" color="error">CANCEL</v-btn>
     <!--    </v-card-actions> -->
      </v-col>

      <!--  <tbody>
        <tr v-for="(item, index) in selectedItems" :key="index">
          <td>{{ item.value.office_id }}</td>

          <td>{{ item.value.office }}</td>
          <td>{{ item.value.fullname }}</td>
          <td>{{ item.value.Controlno }}</td>
          <td>{{ item.value.designation }}</td>
          <td>{{ item.value.status }}</td>
          <td>{{ item.value.time }}</td>
          <td >{{ item.value.Remarks }}</td>
        </tr>
      </tbody>  -->
</v-row >
</v-container>
</v-card>

<v-dialog v-model="dialogforadded" persistent max-width="280">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Successfully Added</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">
        <v-btn color="green" text @click="closeandupdate()">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>

  </v-dialog>

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
      :items="Pangalan"
      :headers="headers"
      :items-per-page="10"
      class="my_class td btn-hover color-1 elevation-1"
      tile

    >

<!-- <template #bottom></template> -->
      <template v-slot:item.actions="{ item }">
        <v-dialog v-model="dialogVisible" max-width="400">
          <v-card>
            <v-card-title class="headline">Confirm Action</v-card-title>
            <v-card-text>Are you sure you want to delete the item?</v-card-text>
            <v-card-actions>
              <v-btn color="red" text @click="cancelAction">No</v-btn>
              <v-btn color="green" text @click="executeAction()">Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn color="red" variant="outlined" @click="openConfirmationDialog(item)">
          <v-row>
            <p>Remove</p>
            <v-icon right class="white--text mx-1">mdi-delete</v-icon>
          </v-row>
        </v-btn>
      </template>
    </v-data-table>

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

  import NavBarUser from "@/components/NavBarUser.vue";
  import HtmlQrCodes from "@/views/HtmlQrCodes.vue";
  import axios from 'axios';

  import { mapActions, mapGetters } from 'vuex';



  export default {

  components: {
    NavBarUser,
    HtmlQrCodes,
  },

  data() {
  return {
    selectedofficeName:'',
    OfficeFullname_Array:[],
    isLoading: false,
    loadingProgress: 0,
    setofficedialog:false,
    add_employees_dialog:false,
    dialogforadded:false,
    deletecontrono:'',
   // selectedRemark: "",
   dialogVisible: false,
   selectedItem: null,
   showModal:false,
   showDialog: false,
    selectedOffice: "",
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
      remarks: ['Absent','Late'],


    createevents:false,

    items: [ /* Your data goes here */ ],
    selectedItems: [],
    // items: [
    //   { title: "My Account", icon: "mdi-account",  },
    //   { title: "Settings", icon: "mdi-clock" },
    //   { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
    // ],

    headers: [
    {

        key: "Controlno",
        sortable: false,
        title: "ID",
        align: ' d-none d-sm-table-cell',
      },
        { key: "fullname", title: "Full Name", class: 'header-id', sortable: true },
        { key: "designation", title: "Position", align: ' d-none d-sm-table-cell', sortable: false, },
        { key: "actions", title: "Actions", sortable: false, },


      ],


      headers_add_employees: [
      { key: "Checkbox", title: "Check Box", sortable: false, },

    {
        key: "Controlno",
        sortable: false,
        title: "Control No",
        align: ' d-none d-sm-table-cell',
      },

        { key: "fullname", title: "Full Name", sortable: false },
        { key: "designation", title: "Position",  sortable: false, },

      ],
     /*  items: [
        { Controlno: '09223' , fullname: 'John Doe', designation: 'Manager', selected: false },
        { Controlno: '09223' , fullname: 'Jane Smith', designation: 'Developer', selected: false },
        { Controlno: '09223' , fullname: 'Jane Smith', designation: 'Developer', selected: false },
        { Controlno: '09223' , fullname: 'Jane Smith', designation: 'Developer', selected: false },
        // Add more sample data here
      ], */

  };
  },

  computed: {
    ...mapGetters('employees', {Pangalan: ['getEmployees']} ),
    ...mapGetters('employees', {AddEmployeesbai: ['getAdd_Employees']} ),


    sortedItems() {
      // Sort the items array based on fullname
      return this.Pangalan.slice().sort((a, b) => {
        // Use localeCompare to sort strings alphabetically
        return a.fullname.localeCompare(b.fullname);
      });
    },

    sortedItems_addemployees() {
      // Sort the items array based on fullname
      return this.AddEmployeesbai.slice().sort((a, b) => {
        // Use localeCompare to sort strings alphabetically
        return a.fullname.localeCompare(b.fullname);
      });
    },
 /*    ...mapGetters('users', {fetechEmployees: ['getUsers']} ), */
   /*  ...mapGetters("office", { Offices: "getOffices" }), */


   /*  filteredUsers() {

      return this.fetechEmployees.filter(user => user.office_id === this.userData.office_id);
    },

    filteredItems() {
      if (!this.userData.office_id) {
        return this.Offices;
      }
      const id = parseInt(this.userData.office_id);
      return this.Offices.filter((item) => item.id === id);
    },
    */

  },

  created() {

/*     this.fetchOffices().then(req=>{

  this.fetchData();
  this.searchByOffice();

})
 */
 let data = new FormData;
    const adminrecords=JSON.parse(localStorage.getItem('user'))
    ///// console.log("ID=",adminrecords.office_id)
    this.userData.office_id = adminrecords.office_id

    data.append('office_id',adminrecords.office_id)


    this.fetchemployees(data).then(res=>{
      this.employees=this.Pangalan
      this.fetchAdd_employees();
      ///// console.log("employees=",this.employees)
    })

    this.fetchAdd_employees(data).then(res=>{
      this.AddEmployees=this.AddEmployeesbai
      this.fetchAdd_employees();
       /*  this.searchByOffice(); */
    })
 this.simulateLoading(() => {

}, );


  },


  methods: {
/*  ...mapActions('events', ['fetchPangalan']),
  ...mapActions('users', ['fetchUsers']),
  ...mapActions('office', ['fetchOffices']), */
  ...mapActions('employees', ['fetchemployees']),
  ...mapActions('employees', ['fetchAdd_employees']),
  ...mapActions('office', ['fetchOffices']),

/*   ...mapGetters('users', {empleyado: ['getEmpleyados']} ), */

async fetchOfficesss() {
try {
  // const response = await axios.get('http://10.0.1.23:80/PEESOCESPRO/users.php');
  // Handle the specific data format with "users" property
  if ( Array.isArray(this.Pangalan)) {
    /// console.log("array------------",this.Pangalan);
    this.officeData = this.Pangalan.map(user => {

      return {

        fullname: user.fullname,
        Controlno: user.Controlno,

       /*  fullname: user.fullname,
        lastname: user.lastname,
        firstname: user.firstname,
        middlename: user.middlename,
        status: user.status,
        designation: user.designation,
        Controlno: user.Controlno, */
      };

    });

    this.OfficeFullname_Array = this.officeData.map(officeData => officeData.fullname).sort();
    /// console.log("PANGALAN=",this.OfficeFullname_Array);

  } else {
    console.error('Invalid data format:', response.data);
  }
} catch (error) {
  console.error('Error fetching data:', error);
}
},



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
          if(this.Pangalan.length >0){
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


  cancelDialog() {
    this.selectedItems = []
      this.add_employees_dialog = false;
    },

    openaddemployeedialog()
    {
      this.selectedItems = []
      this.add_employees_dialog = true
      this.search = ""

    },

    kinidaw()
    {
      let data = new FormData;
    const adminrecords=JSON.parse(localStorage.getItem('user'))
    ///// console.log("ID=",adminrecords.office_id)
    this.userData.office_id = adminrecords.office_id

    data.append('office_id',adminrecords.office_id)



    this.fetchemployees(data).then(res=>{
      this.employees=this.Pangalan
      this.fetchAdd_employees();
      ///// console.log("employees=",this.employees)
    })

    this.fetchAdd_employees(data).then(res=>{
      this.AddEmployees=this.AddEmployeesbai
      this.fetchAdd_employees();
       /*  this.searchByOffice(); */
    })

    },

     closeandupdate()
    {
      this.selectedItems = []
      this.add_employees_dialog = false,
      this.dialogforadded = false
      this.kinidaw()
      this.searchaddemployee = ''
    },


    async saveAllData() {
    // this.dialogVisible = true;
    this.dialogforadded = true;

    for (let i = 0; i < this.selectedItems.length; i++) {
      // ///// console.log("selecteditems=",this.selectedItems[i].value.Controlno)
      this.saveEmployees.push({value:{controlno:this.selectedItems[i].value.Controlno,office_id:this.userData.office_id}});
    }
    ///// console.log("selecteditems=",this.saveEmployees)
    // const data= this.selectedItems;
    // data.append('data',this.selectedItems);
    // ///// console.log("Data NI=",data);
    // const data = new FormData();
    // data.append('data',JSON.stringify(this.selectedItems));
    // this.employeeremarks=this.selectedItems;
    // ///// console.log("employeeremarks=",this.employeeremarks);

    // this.saveallremarks();

    let res = await axios.post(`/addtooffice.php`, this.saveEmployees);
      ///// console.log("radsf",res.data)
    /*   this.selectedItems = [];  */
      this.passremark=true;

      let data = new FormData;
  const adminrecords=JSON.parse(localStorage.getItem('user'))
  ///// console.log("ID=",adminrecords.office_id)

  ///// console.log("EventName=",this.$route.params.Event_name)
  data.append('event_id', localStorage.getItem('ID'))

  this.eventayde = localStorage.getItem("ID");

  data.append('office_id',adminrecords.office_id)
  this.saveEmployees = [];
    },



    selectRow(item) {
      if (item.selected) {
        // If the checkbox is checked, add the item to selectedItems
        this.selectedItems.push({
          value: { ...item.columns, office_id: this.userData.office_id },
        });
      } else {
        // If the checkbox is unchecked, remove the item from selectedItems
        const indexToRemove = this.selectedItems.findIndex(
          (selectedItem) => selectedItem.value.Controlno === item.columns.Controlno
        );
        if (indexToRemove !== -1) {
          this.selectedItems.splice(indexToRemove, 1);
        }
      }
    },


 /*    searchByOffice() {
  ///// console.log("offices=",this.Offices)
    const id = parseInt(this.userData.office_id);
    const selectedItem = this.Offices.find(item =>

      item.id == id
    );


    ///// console.log("id=" + id + " selecteditem=" + selectedItem);
    this.selectedOffice = selectedItem ? selectedItem.office : "";
  },
 */

    filteredUsers() {
    // Filter the users based on office_id
    return this.fetechEmployees.filter(user => user.office_id === this.userData.office_id);
  },

  filteredItems() {
    if (!this.userData.office_id) {
      return this.Offices;
    }
    const id = parseInt(this.userData.office_id);
    return this.Offices.filter((item) => item.id === id);
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
    cancelAction() {
      this.dialogVisible = false;
    },
    async executeAction() {
      const controlno = this.deletecontrono;
      ///// console.log('Controlno:', controlno);
      const formData = new FormData();
      formData.append('controlno', controlno);

      try {
        const response = await fetch('https://database.tagumcity.gov.ph/HRQR/removeemployee.php', {
          method: 'POST',
          body: formData,
        });
        ///// console.log('Response:', response);

        if (response.ok) {
          this.kinidaw()
          // Employee removed successfully, update the local data
          const index = this.Pangalan.findIndex((e) => e.controlno === controlno);
          if (index !== -1) {
            this.Pangalan.splice(index, 1);

          }

        } else {
          // Handle error here if needed
          console.error('Error:', response.statusText);
        }

        this.dialogVisible = false;
      } catch (error) {
        // Handle fetch error here if needed
        console.error('Error:', error);
        this.dialogVisible = false;
      }

      this.search = ""
    },

    //// CODE FOR DELETE
/*     cancelAction() {
    this.dialogVisible = false;
  },

  async createProduct(id) {
           this.idToDelete = id;
          this.dialogVisible = true;
  },
  async executeAction() {
    this.dialogVisible = false;
    await this.removeemployees(this.idToDelete);
    await this.fetchUsers();
  }, */
     //// END CODE FOR DELETE

  },


  async mounted() {
    this.fetchOfficesss();
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

.colorforbutton{
  background-color: rgba(4, 51, 40, 0.895)!important;
  color: aliceblue!important;
}
.mobile-hide {
  display: table-cell; /* Default display for table cells */
}

@media (max-width: 767px) {
  .mobile-hide {
    display: none; /* Hide on screens narrower than 768 pixels */
  }
}
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
  /* .scanner-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(168, 34, 34, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  } */

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
  width: 310px;
  height: 33px;
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
