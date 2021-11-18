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
           
          </v-card>
      
</template>