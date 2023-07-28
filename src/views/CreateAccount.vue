<template>
  <hr-bar />
  <main style="margin-top: 80px;">
    <v-card
      class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 mt-6"
      elevation="4"
      rounded
      max-width="70%"
      width="100%"
    >
      <v-container>
        <v-container>
          <span class="text-h4">CREATE OFFICE ADMIN ACCOUNT</span>
        </v-container>
        <v-divider :thickness="5" color="green" class="mb-4"></v-divider>
        <v-container>
          <v-row>
            <v-col cols="6" offset="4">
              <v-text-field
                density="compact"
                variant="solo"
                append-inner-icon="mdi-magnify"
                hide-details
                @click:append-inner="onClick"
              ></v-text-field>
            </v-col>
          </v-row>
          <br />
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Legal first name*"
                variant="solo"
                density="compact"
                class="mb-n6"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Legal middle name"
                hint="example of helper text only on focus"
                variant="solo"
                density="compact"
                class="mb-n6"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Legal last name*"
                variant="solo"
                persistent-hint
                required
                density="compact"
                class="mb-n6"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6"> </v-col>
            <v-col cols="12" md="12">
              <h2>Login Credentials</h2>
            </v-col>
            <v-divider :thickness="5" color="green" class="mb-4"></v-divider>
            <v-col cols="12" md="6">
              <v-text-field
                label="Username"
                required
                density="compact"
                class="mb-n6"
                variant="solo"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Password*"
                type="password"
                required
                density="compact"
                class="mb-n6"
                variant="solo"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <div class="pa-4 text-end">
          <v-btn
            class="text-none mr-2"
            color="green"
            min-width="92"
            @click="dialog = false"
          >
            Save Account
          </v-btn>

          <v-btn
            class="text-none"
            color="orange"
            min-width="92"
            variant="outlined"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
        </div>
      </v-container>
    </v-card>
  </main>
</template>
<script>
import HrBar from "@/components/toolbar/HrBar.vue";
export default {
  components: {
    HrBar,
  },
  data() {
    return {};
  },
};
</script>