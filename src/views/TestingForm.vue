<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="txruserId" label="User ID" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="username" label="Username" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="oldPassword" label="Old Password" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="newPassword" label="New Password" outlined v-if="showNewPassword"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="confirmPassword" label="Confirm Password" outlined v-if="showNewPassword"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12" md="4">
          <v-btn @click="submitPassword" color="primary">Submit</v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn @click="updatePassword" color="primary" v-if="showNewPassword">Update</v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn @click="closeForm" color="primary">Close</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      txruserId: "",
      username: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      showNewPassword: false
    };
  },
  methods: {
    submitPassword() {
      // Create a new FormData object and append userId, username, and oldPassword to it
      const data = new FormData();
      data.append('userid', this.txruserId);
      data.append('username', this.username);
      data.append('oldpassword', this.oldPassword);


      // Send a POST request to the API endpoint using FormData
      axios.post('https://database.tagumcity.gov.ph/HRQR/usersettings.php', data)
      .then(res => {
        // If the old password is correct, show the new password and confirm password fields
        if (res.data.auth == "success") {
          this.showNewPassword = true;
        } else {
          // Handle incorrect old password case here
          console.log('Incorrect old password');
        }
      })
      .catch(error => {
        // Handle API request error here
        console.error('Error occurred while validating old password:', error);
      });
    },
    updatePassword() {
      // Add your logic for updating password here
      console.log("Updated Password");
    },
    closeForm() {
      // Add your logic for closing the form here
      console.log("Form Closed");
    }
  }
};
</script>

<style>
/* Add your custom styles here if needed */
</style>
