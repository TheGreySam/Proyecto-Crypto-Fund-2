<template>
  
          <v-card class="mx-1 mb-1 mt-5">
            <v-card-title class="pa-6 pb-2">
               <p v-if="this.$store.state.currentUser">Bienvenido {{this.$store.state.currentUser.fullName}}</p>
          
            </v-card-title>
            <v-card-title class="pa-6 pb-2">
           
              <p v-if="this.$store.state.currentUser">Tu Correo es: {{this.$store.state.currentUser.email}}</p>
            </v-card-title>
             <v-card-title class="pa-6 pb-2">
           
              <p v-if="this.$store.state.currentUser">Plan {{this.$store.state.currentUser.rol}}</p>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters class="pb-5">
                <v-col cols="5">
                  <span
                   style="font-size: 24px">
                   12, 678</span>
                </v-col>
                <v-col cols="6">
                  asd
                </v-col>
              </v-row>
             
            </v-card-text>
          </v-card>
      
</template>