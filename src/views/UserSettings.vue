
<template>
  <v-card  height="1000" flat color="#F9FAFC" >
  <v-layout>
  <NavBarUser/>

  <v-main>

   
    <v-row class="mx-4 ">
        <v-col cols="3" class="d-flex justify-center mt-5">
            <h3 class="ml-md-8 mt-n2" :style="{ color: 'green' }">USER SETTINGS</h3>
  
    </v-col>
    <v-col>
        
    </v-col>
    </v-row>

        <v-row class="mx-4">
            <v-col cols="4">
                <v-card>
                  <v-row>
                    
                    <v-col cols="4" class="ml-7 mt-4">
                  <p><b>UserName:</b></p>
                </v-col>

                <v-col cols="5" class="ml-n8">
                    <v-text-field
                    readonly
                    class=""
                prepend-inner-icon="mdi-account"
               density="compact" 
               variant="underlined"
              v-model="userData.username">
                </v-text-field>
              </v-col>
              <v-col cols="3" class="mt-2">
                <v-btn rounded class="rounded-lg"  color="success" @click="dialog_username = true">
                  <v-row>
                    <v-icon right class="white--text ">mdi-account-edit</v-icon>
            <p class="mx-1">Change</p>
          
          </v-row>
                </v-btn>
              </v-col>
           
                    <v-col cols="4" class="ml-7 mt-n6" >
                  <p><b>Password:</b></p>
                </v-col>

                <v-col cols="7" class="ml-n10 mt-n12 "  >
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
            <v-img src="/errormessage.jpg" ></v-img>
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
                <div class="text-center ">
              <v-alert    density="compact"  dark
               color="blue darken-3">
                        EDIT USER NAME
               </v-alert>
                    </div>


                  </v-col>

                  <v-col>
                    <v-text-field
                    class=""
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
               label="Confirm Password"
              v-model="oldPassword">
                </v-text-field>
                  </v-col>
                 
              <!--     <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-if="successMessage">{{ successMessage }}</p> -->
                  </v-row>

                  <v-row class="mt-n10">
                    <v-col cols="6"   >
                  <v-btn  class="my-4 rounded-lg"   type="submit" density="compact"  block rounded-lg  color="success" @click="updateUsername()"  >
                 Update
                </v-btn>
              </v-col>
              
              <v-col cols="6"   >
                  <v-btn  @click="dialog_username = false" class="my-4 rounded-lg" density="compact"  rounded   block rounded-lg  color="red"   >
                Close
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
                <div class="text-center ">
              <v-alert    density="compact"  dark
               color="blue darken-3">
                        Change Password
               </v-alert>
                    </div>


                  </v-col>

                  <v-col cols="12" sm="12" md="12" class="ml-3" >
                   <p><b>User Name:</b> {{ userData.username }}</p>


                  </v-col>


                  <v-col>
                    <v-text-field
                    class=""
                prepend-inner-icon="mdi-key"
               density="compact" 
               variant="underlined"
               label="Old Password"
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
              v-model="newPassword_edit">
                </v-text-field>
                  </v-col>
                 
              <!--     <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-if="successMessage">{{ successMessage }}</p> -->
                  </v-row>

                  <v-row class="mt-n10">
                    <v-col cols="6"   >
                  <v-btn  class="my-4 rounded-lg"   type="submit" density="compact"  block rounded-lg  color="success" @click="updatePassword()"  >
                 Update
                </v-btn>
              </v-col>
              
              <v-col cols="6"   >
                  <v-btn  @click="dialog_password = false" class="my-4 rounded-lg" density="compact"  rounded   block rounded-lg  color="red"   >
                Close
                </v-btn>
              </v-col>
                  </v-row>

                </v-container>
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

    async updatePassword() {
      const data = new FormData
      data.append("userid",this.userData.ID)
      data.append("username",this.userData.username)
      data.append("oldpassword",this.oldPassword_edit)
      data.append("newpassword",this.newPassword_edit)
  try {
    const response = await axios.post('http://10.0.1.23:82/HRQR/usersettings.php', data);
      console.log("Response=",response.data)
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


    async updateUsername() {
      const data = new FormData
      data.append("userid",this.userData.ID)
      data.append("username",this.newusername)
      data.append("oldpassword",this.oldPassword)
  try {
    const response = await axios.post('http://10.0.1.23:82/HRQR/usersettings.php', data);

    if (response.data.error) {
    /*  this.dialogupdated = true */
   /*  this.errorMessage = response.data.user; */
     /*  this.successMessage = ''; */
/*      this.dialogerror = true; */
    } else {
     /*  this.dialogupdated = true;  */
      /* this.errorMessage = response.data.user; */
    /*   this.errorMessage = ''; */
    /*   this.dialogerror = true; */
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