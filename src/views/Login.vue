<template>
 
    <v-app>
    <v-container >
     
       
      <v-row  justify="center" >
        
        <v-col cols="12" >
             
       
          <v-card 
          
          :class="`elevation-${isHovering ? 24 : 6}`"
          class=" login-form " >

          <v-alert  v-if="alertMessage"  :value="true" type="error" transition="fade-transition">
               {{ alertMessage }}
    </v-alert>
          <div class="text-center mt-3">
            <img class="logo" src="/public/Tagum.png" width="120">
          </div>
       

            <v-card-title class="my-4 login-title">
               
                HR SYSTEM QRCODES</v-card-title>
            <v-card-text>
             
              <form @submit.prevent="login">
              <v-text-field
                class="mx-2"
                prepend-inner-icon="mdi-account"
               density="compact" 
               variant="outlined"
              v-model="usernamenako"
             label="User Name"
                
                >

                </v-text-field>
                
                <v-text-field
                class="mx-2"
                prepend-inner-icon="mdi-key"
                density="compact"
                  v-model="password"
                  label="Password"
                  outlined
                  variant="outlined"
                  type="password"
                  @keyup.enter="login"
                ></v-text-field>
              
          
                <v-row>
                    <v-col cols="12">
                <v-btn type="submit"  color="primary" @click="Login_Events()"  class="ml-2 ">
                  Login
                </v-btn>

            </v-col>
            
            </v-row>
          </form>
             
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</v-app>
  </template>
  
  <script>
  import { mapGetters,mapActions } from 'vuex';
  export default {
    data() {
    return{
      usernamenako:'',
      password:'',
      alertMessage:'',
    }
    },
    methods: {
      ...mapActions("users", { Loginbai: "login"}),


      hideAlertAfterDelay() {
      setTimeout(() => {
        this.alertMessage = false;
      }, 2000); // 3000 milliseconds = 3 seconds
    },

      Login_Events()
  {
console.log("username=",this.usernamenako)
console.log("password=",this.password)
    let data= new FormData;
            data.append('username',this.usernamenako);
            data.append('password',this.password);
            this.Loginbai(data).then(e=>{
                if (e == 0) {
                  this.alertMessage='Email or Password is incorrect.'
                  this.hideAlertAfterDelay();
                    this.showResponse({
                        header: "Error",
                        subHeader: "Email or Password is incorrect.",
                        message: "Please double check your credentials."
                        
                    });
                } else {
                  if(e == 1)
                    // this.navigateTo('/TestingForm');
                    this.$router.push('/HomeEvents')
                  else
                  this.$router.push('/OfficeHomeEvents')
                  // this.navigateTo('/sample');
                }
            }).catch(e => console.log("Error =>", e));

  },

  /*    goToFormTwo() {
        this.$router.push('/HtmlQrCodes');
      }  */
      
    }
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 0 auto;

    position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  transform: translate(-50%,-50%);

  border-radius: 20px;
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);


  }

  .login-title {
    text-align: center;
  }
 
  </style>
  