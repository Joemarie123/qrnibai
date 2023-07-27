<template>
    <v-layout>
      <v-app-bar>
        <template v-slot:prepend>
          <v-avatar :size="50">
            <v-img src="/Tagum.png" alt="altText"></v-img>
          </v-avatar>
        </template>
        <v-app-bar-title
          ><span :style="{ color: 'green' }">HOME EVENTS</span></v-app-bar-title
        >
        <v-spacer></v-spacer>
        <v-avatar class="mx-2 my-2" :size="50">
          <v-img src="img5.png"></v-img>
        </v-avatar>
      </v-app-bar>
  
      <v-main>
        <v-sheet
          class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 mt-6"
          elevation="4"
          rounded
          max-width="70%"
          width="100%"
        >
          <v-container>
            <v-container>
              <span class="text-h4">EDIT ACCOUNT</span>
            </v-container>
            <v-divider :thickness="5" color="green" class="mb-4"></v-divider>
            <v-container>
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
                <v-col cols="12" md="12" class="mt-6">
                  <h2 >Login Credentials</h2>
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
              Save
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
          
        </v-sheet>
        
      </v-main>
      
    </v-layout>
  </template>