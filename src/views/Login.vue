<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <div class="login-form">
            <v-alert class="my-8" v-if="alertMessage" :value="true" type="error" transition="fade-transition">
              {{ alertMessage }}
            </v-alert>
            <div class="text-center mt-3">
              <img class="logo" src="/public/Tagum.png" width="115">
            </div>
            <v-card-title class="my-4 mt-n1 login-title">
              <v-row>
                <v-col col="12">
                  <b>Attendance Reporting and</b>
                </v-col>
                <v-col col="12" class="mt-n6">
                  <b>Monitoring System</b>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              <form @submit.prevent="login">
                <v-text-field
                  class="mx-5 mt-n1"
                  prepend-inner-icon="mdi-account"
                  density="compact"
                  variant="underlined"
                  v-model="usernamenako"
                  label="User Name"
                ></v-text-field>
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
                <v-row>
                  <v-col class="mx-4 d-flex justify-center" cols="11">
                    <v-btn class="" rounded type="submit" block rounded-lg color="success" @click="Login_Events()">
                      Login
                    </v-btn>
                  </v-col>
                </v-row>
              </form>
            </v-card-text>
          </div>
        </v-col>
      </v-row>
      <!-- Loading overlay -->
      <v-overlay :value="isLoading">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-overlay>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isLoading: true,
      usernamenako: '',
      password: '',
      alertMessage: '',
    };
  },
  created() {
    localStorage.clear();
  },
  methods: {
    ...mapActions("users", { Loginbai: "login"}),

    hideAlertAfterDelay() {
      setTimeout(() => {
        this.alertMessage = '';
      }, 2000); // 2000 milliseconds = 2 seconds
    },



    Login_Events() {
      this.isLoading = true; // Set loading state

      let data = new FormData();
      data.append('username', this.usernamenako);
      data.append('password', this.password);

      this.Loginbai(data)
        .then(e => {
          if (e == 0) {
            this.alertMessage = 'Email or Password is incorrect.';
            this.hideAlertAfterDelay();
          } else {
            if (e == 1) {
              this.alertMessage = 'LOGIN AS ADMIN';
              this.hideAlertAfterDelay();
              this.$router.push('/OfficeHomeEvents');
            } else {
              this.$router.push('/OfficeHomeEvents');
            }
          }
        })
        .catch(e => console.log("Error =>", e))
        .finally(() => {
          this.isLoading = false; // Clear loading state
        });
    },
  },
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
}

.login-title {
  text-align: center;
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
</style>
