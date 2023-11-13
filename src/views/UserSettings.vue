
<template>
  <v-card  height="1000" flat color="#F9FAFC" >
  <v-layout>
  <NavBarUser/>

  <v-main>

   
    <v-row class="mx-4 ">
        <v-col cols="12" xl="4" lg="4"  md="4" sm="4" class="d-flex justify-center mt-5">
            <h3 class="ml-md-8 mt-n2" :style="{ color: 'green' }">USER SETTINGS</h3>
  
    </v-col>
    <v-col>
        
    </v-col>
    </v-row>

        <v-row class="mx-4">
            <v-col cols="12" md="5" xl="4" lg="4" sm="7">
                <v-card> 
                  <v-row>
                    
                    <v-col cols="4" class="ml-3 mt-4">
                  <p><b>UserName:</b></p>
                </v-col>

                <v-col cols="5" class="ml-n7 ml-sm-n12">
                    <v-text-field
                    readonly
                    class=""
                prepend-inner-icon="mdi-account"
               density="compact" 
               variant="underlined"
              v-model="userData.username">
                </v-text-field>
              </v-col>

              <v-col cols="3" class="mt-2 ml-n4 ">
                <v-btn rounded class="rounded-lg"  color="success" @click="dialog_username = true">
                  <v-row>
                    <!-- <v-icon right class="white--text ">mdi-account-edit</v-icon> -->
            <p class="mx-1">Change</p>
          
          </v-row>
                </v-btn>
              </v-col>
           
                    <v-col cols="4" class="ml-3 mt-n6 ">
                  <p><b>Password:</b></p>
                </v-col>

                <v-col cols="7" class="ml-n8 mt-n12 ml-sm-n12"  >
                  <v-btn  class="my-4 rounded-lg" rounded  type="submit" block rounded-lg  color="success" @click="dialog_password = true"  >
                 Change Password
                </v-btn>
              </v-col>
              </v-row>
               
              <v-dialog v-model="dialogupdated" persistent max-width="280">
    <v-card >



      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline" style="font-size: 18px;">Successfully Updated</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">  
        <v-btn color="green" text @click="dialogupdated = false">OK</v-btn>
      </v-card-actions>
  
    </v-card>
  </v-dialog>
  
  <v-dialog v-model="dialogerror" persistent max-width="280">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Password Not Match</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
          <!--   <v-img src="/public/errormessage.jpg" ></v-img> -->
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">  
        <v-btn color="green" text @click="dialogerror = false">OK</v-btn>
      </v-card-actions>
  
    </v-card>
  </v-dialog>


              <v-dialog v-model="dialog_username" persistent="" max-width="250px"  >
                <v-card>
              <v-container>

                <v-row>
                  
                  <v-col cols="12" sm="12" md="12" >
                    <button @click="dialog_username = false" class="close-button "><strong>X</strong></button>                 
          <v-col cols="12"  sm="12" md="12" class="my-1 ml-3 mt-2" >
              <p class="classeventdetails" :style="{ color: '#70b354' }"><strong>EDIT USERNAME</strong></p>
         </v-col>


                  </v-col>

                  <v-col>
                    <v-text-field
                    class="my-n3"
                prepend-inner-icon="mdi-account"
               density="compact" 
               variant="underlined"
               label="New User Name"
              v-model="newusername">
                </v-text-field>
                  </v-col>

                  </v-row>

                  <v-row class="mt-n6">
                    <v-col>
                    <v-text-field
                    class=""
                prepend-inner-icon="mdi-key"
               density="compact" 
               variant="underlined"
               type="password"
               label="Confirm Password"
              v-model="oldPassword">
                </v-text-field>
                  </v-col>
                 
              <!--     <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-if="successMessage">{{ successMessage }}</p> -->
                  </v-row>

                  <v-row class="mt-n10">
  
                    <v-col cols="12"   >
                  <v-btn  class="my-4 rounded-lg"   type="submit" density="compact"  block rounded-lg  color="success" @click="updateUsername()"  >
                 Update
                </v-btn>
              </v-col>
              
             
                  </v-row>
                  

                </v-container>
                  </v-card>
              </v-dialog>


              <v-dialog v-model="dialog_password" persistent="" max-width="250px"  >
                <v-card>
              <v-container>

                <v-row>
                  
                  <v-col cols="12" sm="12" md="12" >
                    <button @click="dialog_password = false" class="close-button "><strong>X</strong></button>                 
          <v-col cols="12"  sm="12" md="12" class="my-1 ml-3 mt-2" >
              <p class="classeventdetails" :style="{ color: '#70b354' }"><strong>Change Password</strong></p>
         </v-col>


                  </v-col>

                  <v-col cols="12" sm="12" md="12" class="mt-n6 ml-8" >
                   <p class="classusername"><b>User Name:</b> {{ userData.username }}</p>
                  </v-col>


                  <v-col>
                    <v-text-field
                    class=""
                prepend-inner-icon="mdi-key"
               density="compact" 
               variant="underlined"
               label="Old Password"
               type="password"
               v-if="submitbutton"
              v-model="oldPassword_edit">
                </v-text-field>
                  </v-col>

                  </v-row>

                  <v-row class="mt-n6">
                    <v-col>
                    <v-text-field
                    class=""
                prepend-inner-icon="mdi-key"
               density="compact" 
               variant="underlined"
               label="New Password"
               type="password"
               v-if="showNewPassword"
              v-model="newPassword_edit">
                </v-text-field>
                  </v-col>


                  </v-row>

                  <v-row class="mt-n6">
                    <v-col>
                    <v-text-field
                    class=""
                prepend-inner-icon="mdi-key"
               density="compact" 
               variant="underlined"
               label="Confirm New Password"
               type="password"
               v-if="showNewPassword"
              v-model="newConfirmPassword_edit">
                </v-text-field>
                  </v-col>


                  </v-row>



                  <v-row class="mt-n10">
                    <v-col cols="12"   >
                  <v-btn v-if="submitbutton" class="my-4 rounded-lg"   type="submit" density="compact"  block rounded-lg  color="success" @click="submitPassword()"  >
               SUBMIT
                </v-btn>
              </v-col>

              <v-col cols="12"   >
                  <v-btn v-if="showNewPassword"  class="my-4 rounded-lg"   type="submit" density="compact"  block rounded-lg  color="success" @click="updatePassword()"  >
                 Update
                </v-btn>
              </v-col>
              
          <!--     <v-col cols="12"  class="mt-n12"  >
                  <v-btn   class="my-4 rounded-lg" density="compact"  rounded   block rounded-lg  color="red"   >
                Close
                </v-btn>
              </v-col> -->
                  </v-row>

                </v-container>
                  </v-card>
              </v-dialog>


              <v-dialog v-model="dialogpasswordnotmatch" persistent max-width="280">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Password Not Match</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
           <!--  <v-img src="/save.png" ></v-img> -->
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">  
        <v-btn color="green" text @click="dialogpasswordnotmatch = false">OK</v-btn>
      </v-card-actions>
  
    </v-card>
  </v-dialog>


  
  <v-dialog v-model="dialogoldpassworddidnotmatch" persistent max-width="370">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Current Password Not Match</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
           <!--  <v-img src="/save.png" ></v-img> -->
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">  
        <v-btn color="green" text @click="dialogoldpassworddidnotmatch = false">OK</v-btn>
      </v-card-actions>
  
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialogsuccessfullyupdated" persistent max-width="290">
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
        <v-btn color="green" text @click="dialogforupdateclose()">OK</v-btn>
      </v-card-actions>
  
    </v-card>
  </v-dialog>


  <v-dialog v-model="dialogsuccessfullyupdated_username" persistent max-width="290">
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
        <v-btn color="green" text @click="dialogforupdateclose_username()">OK</v-btn>
      </v-card-actions>
  
    </v-card>
  </v-dialog>



             <!--    <p class="mx-5 my-7 mt-n1 d-flex justify-end underline-on-hover"  >Forgot Password?</p> -->
          
            <!--     <v-row>
                    <v-col class="mx-4 my-5 d-flex justify-center" cols="11">
                <v-btn  class="" rounded  type="submit" block rounded-lg  color="success" @click="Login_Events()"  >
                 SAVE
                </v-btn>
             
            </v-col>
            
            </v-row> -->
          
            </v-card>
            </v-col>
        </v-row>
  </v-main>
</v-layout>

</v-card>


</template>

<script>
import axios from 'axios';
  import NavBarUser from "@/components/NavBarUser.vue";
export default {
  data() {
    return {
      dialog_password:false,
      dialogupdated:false,
      dialogerror:false,
      userId: '',
      newusername: '',
      oldPassword: '',
      newPassword: '',
      oldPassword_edit: '',
      newPassword_edit: '',
      newConfirmPassword_edit:'',
      dialogpasswordnotmatch:false,
      dialogsuccessfullyupdated:false,
      dialogoldpassworddidnotmatch:false,
      showNewPassword: false,
      submitbutton:true,
      dialogsuccessfullyupdated_username:false,

        userData: {
          username: '',
          ID:'',

     },

     dialog_username:false,
    };

  

  },

  components: {
    NavBarUser,
  
  },

  mounted() {
   this.fetchData();
   
 },



  methods: {

    submitPassword() {
      // Create a new FormData object and append userId, username, and oldPassword to it
      const data = new FormData();
      data.append('userid', this.userData.ID);
      data.append('username', this.userData.username);
      data.append('oldpassword', this.oldPassword_edit);


      // Send a POST request to the API endpoint using FormData
      axios.post('https://database.tagumcity.gov.ph/HRQR/usersettings.php', data)
      .then(res => {
        // If the old password is correct, show the new password and confirm password fields
        if (res.data.auth == "success") {
          this.showNewPassword = true;
          this.submitbutton = false;
        } else {
          // Handle incorrect old password case here
          this.dialogpasswordnotmatch = true
          console.log('Incorrect old password');
        }
      })
      .catch(error => {
        // Handle API request error here
        console.error('Error occurred while validating old password:', error);
      });
    },
    // updatePassword() {
    //   // Add your logic for updating password here
    //   console.log("Updated Password");
    // },
    closeForm() {
      // Add your logic for closing the form here
      console.log("Form Closed");
    },

    dialogforupdateclose()
    {
      this.dialog_password = false
      this.dialogsuccessfullyupdated = false;
      this.oldPassword_edit = '';
      this.newPassword_edit = '';
      this.newConfirmPassword_edit = '';
    },

    dialogforupdateclose_username()
    {
      this.dialog_username = false
      this.dialogsuccessfullyupdated_username = false;
    this.newusername = '';
      this.oldPassword = '';
    
    },


    async updatePassword() {

      if (this.newPassword_edit !== this.newConfirmPassword_edit) {
  this.dialogpasswordnotmatch = true
  }

/*   else if (this.oldPassword_edit !== 'expectedOldPassword') {
    this.dialogoldpassworddidnotmatch = true
}
 */
  else{
  // Passwords match, proceed with API call
  this.dialogsuccessfullyupdated = true
  const data = new FormData();
  data.append("userid", this.userData.ID);
  data.append("username", this.userData.username);
  data.append("oldpassword", this.oldPassword_edit);
  data.append("newpassword", this.newPassword_edit);
  console.log(data);
  try {
    const response = await axios.post('https://database.tagumcity.gov.ph/HRQR/usersettings.php', data);
    console.log("Response=", response.data);

    if (response.data.error) {
      this.errorMessage = response.data.user;
      this.successMessage = '';
    } else {
      this.errorMessage = '';
      this.successMessage = response.data.user;
    }
  } catch (error) {
    console.error('Error updating username:', error);
    this.errorMessage = 'An error occurred while updating the username.';
    this.successMessage = '';
  }
  this.showNewPassword = false;
  this.submitbutton = true;
}
},


    async updateUsername() {
     
      const data = new FormData
      data.append("userid",this.userData.ID)
      data.append("username",this.newusername)
      data.append("oldpassword",this.oldPassword)
  try {
    const response = await axios.post('https://database.tagumcity.gov.ph/HRQR/usersettings.php', data);

    if (response.data.auth == "failed") {
    /*  this.dialogupdated = true */
   /*  this.errorMessage = response.data.user; */
     /*  this.successMessage = ''; */
/*      this.dialogerror = true; */
      this.dialogerror = true;
      
    } else {
     /*  this.dialogupdated = true;  */
      /* this.errorMessage = response.data.user; */
    /*   this.errorMessage = ''; */
    /*   this.dialogerror = true; */
    let user=[];
    user=JSON.parse(localStorage.getItem('user'));
    user.username=this.newusername;
    
    localStorage.setItem('user',JSON.stringify(user))
    this.fetchData()
    this.dialogsuccessfullyupdated_username = true
    }
  } catch (error) {
    console.error('Error updating username:', error);
    this.errorMessage = 'An error occurred while updating the username.';
    this.successMessage = '';
  }
},

    fetchData() {
     const userDataJSON = localStorage.getItem('user');
     if (userDataJSON) {
       this.userData = JSON.parse(userDataJSON);
     }
   },


  },




};


</script>

<style>

.close-button {
position: absolute;
top: 5px;
right: 14px;
font-size: 16px;
background-color: transparent;
border: none;
cursor: pointer;
color:red
}

.classeventdetails{

font-size: 20px;
}

.classusername{

font-size: 15px;
}


</style>