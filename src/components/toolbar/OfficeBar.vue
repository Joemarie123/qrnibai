<template>
    <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
      <v-layout>
        <v-app-bar>
          <template v-slot:prepend>
            <v-avatar :size="50">
              <v-img src="/Tagum.png" alt="altText"> </v-img>
            </v-avatar>
          </template>
  
          <v-app-bar-title
            ><span :style="{ color: 'green' }">OFFICE ADMIN HOME </span></v-app-bar-title
          >
  
          <v-avatar class="mx-2 my-2" :size="40">
            <v-img src="img5.png">
              <v-menu activator="parent">
                <v-list>
                  <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="index"
                    @click="$router.push(item.route).catch((err) => {})"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-img>
          </v-avatar>
        </v-app-bar>
      </v-layout>
    </v-card>
  </template>
  <script>
  export default {
    data() {
      return {
        items: [
          { title: "Home", icon: "mdi-home", route: "/OfficeHomeEvents" },
          { title: "My Account", icon: "mdi-account", route: "/EditAccount" },
          { title: "Settings", icon: "mdi-clock" },
          // { title: "Click Me 2" },
        ],
      };
    },
  };
  </script>
  
  
  <!-- <template>
      <div>
        <v-app-bar>
          <template v-slot:prepend>
            <v-avatar :size="50">
              <v-img src="/Tagum.png" alt="altText"> </v-img>
            </v-avatar>
          </template>
          <v-app-bar-title
            ><span :style="{ color: 'green' }">HOME EVENTS</span></v-app-bar-title
          >
          <v-spacer></v-spacer>
          <v-avatar class="mx-2 my-2" :size="50">
            <v-img src="img5.png">
              <v-menu activator="parent">
                <v-list>
                  <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="index"
                    @click="$router.push(item.route).catch((err) => {})"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-img>
          </v-avatar>
        </v-app-bar>
      </div>
  </template> -->