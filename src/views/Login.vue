<template>
 
    <v-app>
    <v-container >
     
       
      <v-row  justify="center" >
        
        <v-col cols="12" >
            
          <v-card 
          
          :class="`elevation-${isHovering ? 24 : 6}`"
          class=" login-form " >
          <div class="text-center mt-3">
            <img class="logo" src="/public/Tagum.png" width="120">
          </div>
        


            <v-card-title class="my-4 login-title">
               
                HR Attendance System</v-card-title>
            <v-card-text>
             
                
              <v-text-field
                class="mx-2"
                prepend-inner-icon="mdi-account"
               density="compact" 
               variant="outlined"
              v-model="usernamenako"
             label="Email"
                
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
                ></v-text-field>
                

            



                 <!--  <v-text-field
              
                  ></v-text-field>
        
                  <v-text-field
                 
                  ></v-text-field> -->

                <v-row>
                    <v-col cols="12">
                <v-btn type="submit"  color="primary" @click="Login_Events()"  class="ml-2 ">
                  Login
                </v-btn>
            </v-col>
            </v-row>

             
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</v-app>
  </template>
  
  <script>
  export default {
    data() {
    return{
      usernamenako:'',
      password:'',
    }
    },
    methods: {
 

      Login_Events()
  {

    if(this.usernamenako=="hr",this.password=="hr")
    {

       this.$router.push('/HomeEvents'); 
      }

      else if (this.usernamenako=="admin",this.password=="admin"){

        this.$router.push('/OfficeHomeEvents'); 

      }

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
  