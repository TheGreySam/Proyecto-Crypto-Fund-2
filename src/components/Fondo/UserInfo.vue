<template>
<div>
      
      <v-row>
        <v-col >
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <p> {{ $store.state.currentUser ? $store.state.currentUser.email : "No existe" }}</p>
              <v-spacer></v-spacer>
              
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters class="pb-5">
                <v-col cols="5">
                  <span
                   style="font-size: 24px">
                    {{ $store.state.currentUser ? $store.state.currentUser.email : "No existe" }}
                    </span>
                </v-col>
                <v-col cols="6">
                   {{ $store.state.currentUser ? $store.state.currentUser.email : "No existe" }}
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between pb-3">
                <v-col cols="5">
                  <div>Registrations</div>
                  <div>860</div>
                </v-col>
                <v-col cols="3">
                  <div>Sign Out</div>
                  <div>32</div>
                </v-col>
                <v-col cols="4" xl="2">
                  <div>Rate</div>
                  <div>3.25%</div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
</div>
    
</template>