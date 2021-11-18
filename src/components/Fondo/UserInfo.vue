<template>
  <v-card
    class="mx-auto"
    max-width="550"
    tile
  >
    <v-img
      height="100%"
      src="../../assets/bit2.jpeg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="4"
        >
          <v-avatar
            class="profile mt-10 ml-4"
            size="165"
            tile
          >
            <v-img src="../../assets/avatar33.png"></v-img>
          </v-avatar>
        </v-col>
        <v-col
          align-self="start"
          class="pa-0"
          cols="8"
        >
        <v-card-title class="pa-3 pb-1"
             v-if="this.$store.state.currentUser.rol == 'admin'" style="background-color: #FA7921">
           
              <span v-if="this.$store.state.currentUser.rol == 'admin'" style="color: white">Tienes un plan: Premium</span>
              <span v-if="this.$store.state.currentUser.rol == 'user'">Tienes un plan: Básico</span>
             
            </v-card-title>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="text-h6" v-if="this.$store.state.currentUser">
                {{this.$store.state.currentUser.fullName}}
              </v-list-item-title>
              <v-list-item-subtitle>{{this.$store.state.currentUser.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>