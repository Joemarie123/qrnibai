<template>
    <v-card  height="1000" flat color="#F9FAFC" >
  <v-layout>
<NavBar/>

<v-main class="mt-n13">

  <v-dialog v-model="Edit_PoUp" max-width="650px" persistent >
    <v-card color="#F9FAFC" class='rounded-lg'>

<v-container>
<v-row>
<!--   <v-text-field v-model="transfer_EventID">

</v-text-field>
<h1>{{ transfer_EventID }}</h1> -->

<button @click="Edit_PoUp = false" class="close-button "><strong>X</strong></button>
<v-col cols="12"  sm="12" md="12" class="my-5 ml-7 mt-2" >
<p class="classeventdetails" :style="{ color: '#70b354' }"><strong>Edit User Account</strong></p>

</v-col>
 <!--  {{ Edit_Office_ID }} -->
<v-col  cols="10" sm="10" md="10"
class="ml-10 mt-n5">


<v-row>
 <!--  {{ toggleValue }} -->
  <v-col cols="12"  sm="3" md="3" class="ml-n8 mt-md-n1 ml-md-n4 mt-sm-n2 ml-sm-n4">
<p class="classfortitle ml-5">Full Name:</p>
</v-col>

<v-col cols="12" sm="9" md="9" class="mt-n3 mt-md-n0 mt-sm-n0" >
  <v-combobox
        prepend-inner-icon="mdi-account"
        class=""
        density="compact"
        variant="solo"
          v-model="selectedFullName"
          :items="fullNames"
          label="Select a Full Name"

        ></v-combobox>

</v-col>


<v-col cols="12"  sm="3" md="3" class="ml-n8 mt-md-n2 ml-md-n4 mt-sm-n2 ml-sm-n4">
<p class="classfortitle ml-5">User Name:</p>
</v-col>

<v-col cols="12" sm="9" md="9" class="mt-n3 mt-md-n0 mt-sm-n0" >
<v-text-field height="10" variant="outlined"  density="compact" label="User Name" v-model="Edit_Username" ></v-text-field>
</v-col>
</v-row>

</v-col>



                <v-col  cols="10" sm="10" md="10"   class="ml-10 mt-n8">
<v-row>

<v-col cols="12" md="3" sm="3" class="ml-n8 mt-n1 mt-md-2 ml-md-n4 mt-sm-2 ml-sm-n4" >
<p class="classfortitle ml-5" >Office:</p>
</v-col>

<v-col cols="12" md="6" sm="9" class="mt-n4 mt-md-1 mt-sm-1">


  <v-combobox
        density="compact"
        variant="solo"
          v-model="selectedOffice"
          :items="officeIDs"
          label="Select OFFICE"
        ></v-combobox>



</v-col>
<v-col cols="12" md="3" class="">
          <v-row>

              <v-col cols="2">
                  <v-switch
    v-model="switchModel"
    hide-details
    color="success"
  ></v-switch>
</v-col>
<v-col cols="7" class="mt-4 ml-5">
  <p>{{ userType }}</p>
  </v-col>
</v-row>
                </v-col>

</v-row>


</v-col>
<v-col  cols="10" sm="10" md="10" class="ml-10 mt-n1 "
>
<!-- <v-row class="d-flex justify-center mt-n2 ">

  <h4 class="mt-n7">User Details</h4>

</v-row> -->

</v-col>


<v-col  cols="10" sm="10" md="10"   class="ml-10 mt-n8">
<v-row >

<v-col cols="12" md="3" sm="3" class="ml-n8 mt-n1 mt-md-2 ml-md-n4 mt-sm-2 ml-sm-n4" >
<p class="classfortitle ml-5" >Full Name:</p>
</v-col>
 <!--  <h1>{{ Edit_lastnameKini }}</h1> -->
<!-- <v-col cols="12" md="3" sm="9" class="mt-n4 mt-md-1 mt-sm-1">
<v-text-field height="10" variant="outlined" readonly="" density="compact" v-model="Edit_lastnameKini"  label="Last Name"></v-text-field>
</v-col> -->

<v-col cols="12" md="3" sm="9" class="mt-n4 mt-md-1 mt-sm-1">
<v-text-field height="10" variant="outlined" readonly="" density="compact" v-model="Edit_lastname"  label="Last Name"></v-text-field>
</v-col>

<v-col cols="12" md="3" sm="9" class="mt-n4 mt-md-1 mt-sm-1 ">
<v-text-field height="10" readonly="" variant="outlined" density="compact" v-model="Edit_firstname" label="First Name"></v-text-field>
</v-col>

<v-col cols="12" md="3" sm="9" class="mt-n4 mt-md-1 mt-sm-1 ml-n1">
<v-text-field height="10" readonly="" variant="outlined" density="compact" v-model="Edit_middlename" label="Middle Name"></v-text-field>
</v-col>


</v-row>


</v-col>
<v-col  cols="10" sm="10" md="8" class="ml-10 mt-n8"
>
<v-row>

<!-- <v-col cols="12" md="4" sm="3" class="ml-n8 mt-n1 mt-md-2 ml-md-n4 mt-sm-2 ml-sm-n4">
<p class="classfortitle ml-5">First Name:</p>
</v-col>

<v-col cols="12" md="9" sm="9" class="mt-n4 mt-md-1 mt-sm-1 ml-n10">
<v-text-field height="10" readonly="" variant="outlined" density="compact" v-model="Edit_firstname" label="First Name"></v-text-field>
</v-col> -->
</v-row>
</v-col>


<v-col  cols="10" sm="10" md="10" class="ml-10 mt-n8"
>
<v-row class="mt-n4">

<v-col cols="12" md="4" sm="3" class="ml-n8 mt-n1 mt-md-2 ml-md-n6 mt-sm-2 ml-sm-n4">
<p class="classfortitle ml-7">Status:</p>
</v-col>

<v-col cols="12" md="9" sm="9" class="mt-n4 mt-md-1 mt-sm-1 ml-n10">
<v-text-field height="10" readonly="" variant="outlined" density="compact" v-model="Edit_status" label="Status"></v-text-field>
</v-col>
</v-row>

</v-col>

<v-col  cols="10" sm="10" md="10" class="ml-10 mt-n8"
>
<v-row>

<v-col cols="12" md="4" sm="3" class="ml-n8 mt-n1 mt-md-2 ml-md-n4 mt-sm-2 ml-sm-n4">
<p class="classfortitle ml-5">Designation:</p>
</v-col>

<v-col cols="12" md="9" sm="9" class="mt-n4 mt-md-1 mt-sm-1 ml-n12">
<v-text-field height="10" readonly="" variant="outlined" density="compact" v-model="Edit_Designation" label="Designation"></v-text-field>
</v-col>
</v-row>

</v-col>

</v-row>




<v-col>
<!-- {{ formattedTime_From }}
{{ formattedTime_To }} -->
<!-- <p>Selected Time From: {{ this.selectedTime_From }}</p>
<p>Selected Time To: {{ selectedTime_To }}</p> -->
</v-col>
<v-row>

<v-col cols="12" sm="12" md="11" class="d-flex justify-end my-5 mt-n4 ml-n7 ">

<v-btn color="green" class="pa-2 ml-5 mt-n1"
outlined dark
@click="Edit_account()">
Submit
</v-btn>


</v-col>

</v-row>
</v-container>
</v-card>


</v-dialog>


<div class="mt-16 container123">

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

    <v-row>
      <v-col :class="{'d-flex justify-end': !isMobile, 'd-flex justify-start': isMobile}"  cols="12">
      <v-btn color="success" @click="CLickni_Events()"  rounded-lg variant="outlined"> + Create Account</v-btn>
    </v-col>

      <v-col cols="12" lg="3" xl="2">
    <h3 class="ml-1 ml-lg-8 mt-n2" :style="{ color: 'green' }">User Account List</h3>
  </v-col>

  <v-col class="ml-lg-n16  mt-n4" cols="6">
    <input v-model="search" class="textbox"  placeholder="Search Employee">
 <!--   <v-text-field  density="compact"    append-inner-icon="mdi-magnify" variant="outlined"  label="Search Event"></v-text-field> -->
  </v-col>

      <v-col cols="12">

        <v-card class='rounded-lg mt-n4'>

        <v-data-table
        :search="search"
         item-key="id"
       :headers="headers"
       :items="accountlist"
      :items-per-page="15"
       class="elevation-1"
       density="compact"
  >

  <template v-slot:item.actions="{ item }">

    <v-row>
      <v-col cols="2" class="mt-n3 ">

<!-- <v-btn variant="text" color="green" > -->

<v-icon left color="success" size="x-small"  @click="edit_User_Employee(item)" class="white--text ">mdi-lead-pencil</v-icon>
<!-- </v-btn> -->
</v-col>

<v-col cols="3" class="mt-n3 ">
<!-- <v-btn variant="text" color="red" class="mt-n3 "> -->

<v-icon left color="red" size="x-small"  @click="Show_Dialog_Deleted(item)" class="white--text">mdi-delete</v-icon>
<!-- </v-btn> -->
</v-col>

<v-col cols="3" class="mt-n3 ">
<!-- <v-btn variant="text" color="red" class="mt-n3 "> -->
<v-icon left color="blue darken-3" size="x-small"  @click="Show_Dialog_Reset(item)" class="white--text">mdi-tooltip-edit</v-icon>
<!-- </v-btn> -->
</v-col>

<v-dialog v-model="Dialog_Successfully_Deleted" max-width="400">
    <v-card >
     <!--  {{ this.Delete_id_Events }} -->
      <v-card-title class="headline">Confirm Action</v-card-title>
      <v-card-text>Are you sure you want to delete the item?</v-card-text>
      <v-card-actions>
        <v-btn color="red" text @click="Dialog_Successfully_Deleted = false">No</v-btn>
        <v-btn color="green" text @click="Delete_User_Activate()">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="Dialog_Successfully_Reset" max-width="400">
    <v-card >
     <!--  {{ this.Delete_id_Events }} -->
      <v-card-title class="headline">Confirm Action</v-card-title>
      <v-card-text>Are you sure you want to Reset the Password?</v-card-text>
      <v-card-actions>
        <v-btn color="red" text @click="Dialog_Successfully_Reset = false">No</v-btn>
        <v-btn color="green" text @click="Reset_User()">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


  <v-dialog v-model="Dialog_Deleted" persistent max-width="280">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline d-flex justify-center">Successfully Deleted</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">
        <v-btn color="green" text @click="Dialog_Deleted = false">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>

  <v-dialog v-model="Dialog_Reset" persistent max-width="280">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline d-flex justify-center">Successfully Reseted</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">
        <v-btn color="green" text @click="Dialog_Reset = false">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>

<v-dialog v-model="dialogUpdated" persistent max-width="300">
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
        <v-btn color="green" text @click="dialogUpdated = false">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>


    </v-row>

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
import NavBar from "@/components/NavBar.vue";
import { mapActions, mapGetters } from 'vuex';

export default {

  components: {
    NavBar,
  },

data() {
  return {
    Dialog_Successfully_Reset:false,
    Dialog_Deleted:false,
    dialogUpdated:false,
    isMobile: false,
    loading:false,
    Edit_PoUp:false,
    Dialog_Successfully_Deleted:false,
    Dialog_Reset:false,
    rows: [],
    fullNames: [],
    namesData: [], // Array to store names data
    officeIDs:[],
    Delete_Me_ControlNo:'',

   /*  officeData:[], */
   Edit_loginID:'',
    ID: "",
    search: "",
    eventname:'',
      eventdate:'',
       eventfrom:'',
      eventto:'',
      eventvue:'',
      toggleValue:'',
      selectedFullName:'',
      Edit_ControlNumber:'',
      Edit_officename:'',
      Edit_Office_ID:'',
      Edit_Username:'',
      Edit_lastname:'',
      Edit_firstname:'',
      Edit_middlename:'',
      Edit_status:'',
      Edit_Designation:'',
      selectedOffice:'',
      Edit_lastnameKini:'',
      Delete_Me_Reset_ControlNo:'',

    /*   Transfer_Username:'',
      Transfer_lastname:'',
      Transfer_firstname:'',
      Transfer_middlename:'',
      Transfer_status:'',
      Transfer_Designation:'', */

    items: [
      { title: "My Account", icon: "mdi-account",  },
      { title: "Settings", icon: "mdi-clock" },
      { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
      // { title: "Click Me 2" },
    ],

    headers: [
        {
        /*   align: "start", */
          key: "office_id",
          sortable: false,
          title: "Office ID",
          align: ' d-none',

        },
        { key: "lastname", title: "Last Name", sortable: false },
        { key: "firstname", title: "First Name", sortable: false },
        { key: "middlename", title: "Middle Name", sortable: false },
        { key: "status", title: "Status", sortable: false },
        { key: "designation", title: "Designation", sortable: false },
        { key: "username", title: "User Name", sortable: false },
         { key: "actions", title: "Action",  sortable: false },

      ],

  };
},


watch: {


    selectedFullName: 'updateSelectedInfo', // Call updateSelectedInfo whenever selectedFullName changes
    selectedOffice: 'updateSelectedOffice',


  },

computed: {
  ...mapGetters("office", { Officeslist: "getOffices" }),
    ...mapGetters("account", { accountlist: "getUsers" }),
    ...mapGetters('users', {userlist: 'getUsers'}),

 /*    editedOffice() {
      const matchingItem = this.Officeslist.find(item => item.id == this.Edit_Office_ID);
      return matchingItem ? matchingItem.Office : "";
    }, */
/*
    findme()
    {

    }, */


    officedisplay_AccordingtoID()
    {
      const matchingItem = this.Officeslist.find(item => item.id == this.Edit_Office_ID);
      return matchingItem ? matchingItem.Office : "";
    },


    officeOptions() {
      const office = this.samplearray.find(item => item.ID === this.Edit_Office_ID);
      return office ? [office.Office] : [];
    },

    switchModel: {
      get() {
        return this.toggleValue == 1;
      },
      set(value) {
        this.toggleValue = value ? 1 : 0;
      },


    },

    userType() {
      return this.toggleValue == 1 ? 'Admin' : 'User';
    },


    sortedItems() {
      // Sort the items array based on fullname
      return this.accountlist.slice().sort((a, b) => {
        // Use localeCompare to sort strings alphabetically
        return a.lastname.localeCompare(b.lastname);
      });
    }
  },






 created() {
    this.fetchAccountUsers();
    this.fetchUsers()
    this.fetchOffices()
   /*  this.updateOffice() */
    setTimeout(() => {

    this.fetchOfficesss()
    this.fetchFullNames()
   }, 3000 );
  },
/*
  beforeDestroy() {
    // Remove the resize event listener to prevent memory leaks
    window.removeEventListener('resize', this.handleResize);
  }, */

  mounted() {
    this.fetchFullNames();
    this.fetchOfficesss();
    // Check if the initial width is less than or equal to your mobile breakpoint
    this.isMobile = window.innerWidth <= 600; // Adjust the value based on your mobile breakpoint

    // Add a listener to update the isMobile property when the window is resized
    window.addEventListener('resize', this.handleResize);
  },


methods: {
    ...mapActions('users', ['fetchUsers']),
    ...mapActions("office", ["fetchOffices"]),
    ...mapActions('account', ['fetchAccountUsers']),
    ...mapActions('account', ['registerAccountUsers']),
    ...mapActions('users', ['deleteuser_Activate']),
    ...mapActions('users', ['Reset_user_Activate']),

    Show_Dialog_Reset(item)
    {
      console.log("ControlNo FOR Reset",item.raw.Controlno)
        this.Dialog_Successfully_Reset = true
        this.Delete_Me_Reset_ControlNo = item.raw.Controlno
        console.log("ControlNo FOR Reset",this.Delete_Me_Reset_ControlNo)
    },

    Reset_User()
    {
      this.Dialog_Successfully_Reset = false
      let data = new FormData();
      data.append('controlno', this.Delete_Me_Reset_ControlNo);
        this.Reset_user_Activate(data).then(e => {

        this.Dialog_Reset = true
        this.fetchAccountUsers()
        this.search = ""

      }
      ).catch(e => console.log(e.message));
    },

    Show_Dialog_Deleted(item)
    {
      console.log("ControlNo FOR DELETE",item.raw.Controlno)
        this.Dialog_Successfully_Deleted = true
        this.Delete_Me_ControlNo = item.raw.Controlno
        console.log("ControlNo FOR DELETE",this.Delete_Me_ControlNo)
    },

    Delete_User_Activate()
    {
      this.Dialog_Successfully_Deleted = false
      let data = new FormData();
      data.append('controlno', this.Delete_Me_ControlNo);
        this.deleteuser_Activate(data).then(e => {

        this.Dialog_Deleted = true
        this.fetchAccountUsers()
        this.search = ""
      }
      ).catch(e => console.log(e.message));
    },

    Edit_account()
    {
      /*  this.dialogVisible = true; */
      let data = new FormData();
      data.append('login_id', this.Edit_loginID);
      data.append('lastname', this.Edit_lastname);
      data.append('firstname', this.Edit_firstname);
      data.append('middlename', this.Edit_middlename);
      data.append('status', this.Edit_status);

      data.append('designation', this.Edit_Designation);
      data.append('office_id', this.Edit_Office_ID);
      data.append('admin', this.toggleValue);
      data.append('username', this.Edit_Username);
    /*   data.append('password', this.selectedpassword); */
      data.append('Controlno', this.Edit_ControlNumber);
    /*   this.sortedItems() */

      this.registerAccountUsers(data).then(e => {
        /*   this.navigateTo('/walup'); */
        if (e == 2){
            this.dialogUpdated = true
            this.fetchAccountUsers();
           /*  this.accountlist() */
        }

        console.log("value of e=",e)

      }
      ).catch(e => console.log(e.message));

    },




    updateSelectedOffice() {
      const selectedNameData = this.officeData.find(officeData => officeData.office == this.selectedOffice);
console.log("selectedNameDATA ID",this.selectedOffice)

      if (selectedNameData) {
        /* this.selectedOffice = selectedNameData.office; */
      /*   this.selectedFirstName = selectedFirstName.fullName; */
        this.Edit_Office_ID = selectedNameData.id;
      } else {
        this.Edit_Office_ID = '';
      }
    },


    async fetchOfficesss() {
try {

  if ( Array.isArray(this.Officeslist)) {
    console.log("array------------",this.Officeslist);
    this.officeData = this.Officeslist.map(user => {

      return {

        office: user.office,
        id: user.id,

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



    handleResize() {
      // Update isMobile based on the current window width
      this.isMobile = window.innerWidth <= 600; // Adjust the value based on your mobile breakpoint
    },

    CLickni_Events()
    {
      this.loading = true;
      try {
        this.$router.push('/CreateAccount');
      } catch (error) {
        console.error('Error occurred:', error);
      } finally {
        this.loading = false;
      }

    },

    updateSelectedInfo() {

const selectedNameData = this.namesData.find(nameData => nameData.fullname == this.selectedFullName);
console.log("selectedNameDATA Edit_lastnameKini",this.selectedFullName)
if (selectedNameData) {

/*   this.Edit_Office_ID = selectedNameData.office; */
/*   this.selectedFirstName = selectedFirstName.fullName; */

  /* this.Edit_lastnameKini =  selectedNameData.lastname; */

  this.Edit_lastname = selectedNameData.lastname;
  this.Edit_firstname = selectedNameData.firstname;
  this.Edit_middlename = selectedNameData.middlename;
  this.Edit_status = selectedNameData.status;
 /*  this.Edit_Designation = selectedNameData.designation;
  this.Edit_ControlNumber = selectedNameData.Controlno; */

} else {
  this.Edit_lastnameKini = '',
  this.Edit_Office_ID = '';
  this.Edit_lastname = '';
  this.Edit_firstname = '';
  this.Edit_middlename = '';
  this.Edit_status = '';
  this.Edit_Designation = '';
  this.Edit_ControlNumber = '';
}

},

    edit_User_Employee(item){
      this.Edit_PoUp = true
      console.log("User Item",item)
      this.Edit_loginID = item.raw.ID
      console.log("LOGIN ID",this.Edit_loginID)
      this.Edit_ControlNumber = item.raw.Controlno
      this.Edit_Office_ID = item.columns.office_id
      this.Edit_Username = item.columns.username
      this.Edit_lastname = item.columns.lastname
      this.Edit_firstname = item.columns.firstname
      this.Edit_middlename = item.columns.middlename
      this.Edit_status = item.columns.status
      this.Edit_Designation = item.columns.designation
      this.toggleValue =  item.value.admin

      const selectedId = parseInt(this.Edit_Office_ID);
      const officeObject = this.Officeslist.find(item => item.id == selectedId);
        console.log("Item ID", this.Officeslist)

      if (officeObject) {
        this.selectedOffice = officeObject.office;
      } else {
        this.selectedOffice = ''; // Reset if ID is not found
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

  editEvent(id) {
    // Handle edit event logic
    console.log("Edit Event:", id);
  },
  deleteEvent(id) {
    // Handle delete event logic
    console.log("Delete Event:", id);
  },

  navigateTo(path) {
        this.$router.push({ 'path': path });
      },

    redirecttoHomeEventsViewList (item) {
      console.log("item=",item.id)
    this.$router.push({ name: 'HomeEventsViewList', state: { id: item.id } })
    },


    redirecttoEventDetails (item) {
      console.log("item=",item.id)
    this.$router.push({ name: 'EventDetails', state: { id: item.id } })
    },


},

/* check() {
    console.log("this.users=", this.events);

  },
 */

};
</script>

<style scoped>
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
  width: 305px;
  height: 35px;
}
</style>
