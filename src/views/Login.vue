<template>

    <v-app>
    <v-container  >


      <v-row  justify="center" >

        <v-col cols="12" >
 <!--          <div v-if="isLoading" class=" my-10 "  >


 <v-progress-circular

:size="70"
:width="7"
color="green"
indeterminate
></v-progress-circular>

 <div class="loading-text">Please Wait...</div>
</div>
 -->

         <!--  <v-card

          :class="`elevation-6`"
          class=" login-form " > -->
<div class=" login-form">

          <v-alert class="my-8"  v-if="alertMessage"  :value="true" type="error" transition="fade-transition">
               {{ alertMessage }}
    </v-alert>
          <div class="text-center mt-3">
            <img class="logo" src="/public/Tagum.png" width="115">
          </div>


            <v-card-title class="my-4 mt-n1 login-title">
<v-row>
<v-col col="12">
  <b>Attendance Reporting and
                  </b>
</v-col>
<v-col col="12" class="mt-n6">
  <b>Monitoring System</b>
</v-col>
</v-row>

                </v-card-title>
            <v-card-text>

              <form @submit.prevent="login">

              <!--   <p><b>User Name</b></p> -->
              <v-text-field
                class="mx-5 mt-n1"
                prepend-inner-icon="mdi-account"
               density="compact"
               variant="underlined"
              v-model="usernamenako"
             label="User Name"
                >

                </v-text-field>


                <v-text-field
                class="mx-5 mt-n2"
                prepend-inner-icon="mdi-key"
                density="compact"
                  v-model="password"
                  label="Password"
                  outlined
                  variant="underlined"
                  type="password"

                ></v-text-field>
               <!--  <p class="mx-5 my-7 mt-n1 d-flex justify-end underline-on-hover"  >Forgot Password?</p> -->

                <v-row>
                    <v-col class="mx-4 d-flex justify-center" cols="11">
                <v-btn  class="" rounded  type="submit" block rounded-lg  color="success" @click="Login_Events()"  >
                  Login
                </v-btn>

            </v-col>

            </v-row>
          </form>

            </v-card-text>
          </div>
       <!--    </v-card> -->
        </v-col>
      </v-row>
    </v-container>
</v-app>
  </template>

  <script>
  import { mapActions } from 'vuex';
  export default {
    data() {
    return{
      isLoading: false,
      loadingProgress: 0,
     isHovering:'',
      usernamenako:'',
      password:'',
      alertMessage:'',
    }
    },
    created(){
      localStorage.clear()
    },
    methods: {
      ...mapActions("users", { Loginbai: "login"}),

  /*     simulateLoading() {
      const interval = 20; // Change this to control the speed of loading
      const totalSteps = 50; // Adjust this based on the total number of steps you want
      let currentStep = 0;

      this.isLoading = true;

      const loadingInterval = setInterval(() => {
        currentStep++;
        this.loadingProgress = (currentStep / totalSteps) * 100;

        if (currentStep >= totalSteps) {
          if(this.events.length >0){
            clearInterval(loadingInterval);
          this.isLoading = false;
          this.loadingProgress = 0;
    this.fetchUserEventsHistory()
          }else{
            currentStep=0
          }

        }
      }, interval);
    }, */

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
  console.log("value of e=",e)
                if (e == 0) {
                  this.alertMessage='Email or Password is incorrect.'
                  this.hideAlertAfterDelay();
                    this.showResponse({
                        header: "Error",
                        subHeader: "Email or Password is incorrect.",
                        message: "Please double check your credentials."

                    });
                } else {
                  if(e == 1){
                    this.alertMessage='Email or Password is incorrect.'
                    this.hideAlertAfterDelay();
                  /*   this.$router.push('/HomeEvents') */
                  }
                    // this.navigateTo('/TestingForm');

                  else
                  {
                   /*   console.log("LOGIN DETAILS") */
                    this.$router.push('/OfficeHomeEvents')
                  }

                  // this.navigateTo('/sample');
                }
            }).catch(e => console.log("Error =>", e));


  },


    },



  };
  </script>

  <style scoped>
  .underline-on-hover {
  text-decoration: underline;
}

.underline-on-hover:hover {
  text-decoration: none; /* Remove underline on hover */
}

  .login-form {
    max-width: 400px;
    margin: 0 auto;
    position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  transform: translate(-50%,-50%);
  border-radius: 20px;

  }

  .login-title {
    text-align: center;
  }

/*
  .bgCover {
  background-image: url("@/assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
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

  </style>
