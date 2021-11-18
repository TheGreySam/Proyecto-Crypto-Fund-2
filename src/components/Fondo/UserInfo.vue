<template>
  
          <v-card >
            <v-card-title class="pa-6 pb-2">
               <p v-if="this.$store.state.currentUser">Bienvenido {{this.$store.state.currentUser.fullName}}</p>
          
            </v-card-title>
            <v-card-title class="pa-6 pb-2">
           
              <p v-if="this.$store.state.currentUser">Tu Correo es: {{this.$store.state.currentUser.email}}</p>
            </v-card-title>
             <v-card-title class="pa-6 pb-2">
           
              <p v-if="this.$store.state.currentUser.rol == 'admin'">Tienes un plan Premium</p>
              <p v-if="this.$store.state.currentUser.rol == 'user'">Tienes un plan Básico</p>
             
            </v-card-title>
            
          </v-card>
      
</template>