<template>
  
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <p> {{ $store.state.currentUser ? $store.state.currentUser.email : "No existe" }}</p>
              <v-spacer></v-spacer>
              <p> {{ $store.state.currentUser ? $store.state.currentUser.fullName : "No existe" }}</p>
              <v-menu>
                <template>
                  <v-btn>
                    <v-icon color="textColor">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>Item
                    <v-list-item-title>Titulo</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
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
      
</template>