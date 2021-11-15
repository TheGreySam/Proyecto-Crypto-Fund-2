<template>
  <v-card class="mx-1 mb-1">
    <v-card-title class="pa-6 pb-2">
      <p>{{ $store.state.currentUser.email }}</p>
      <v-spacer></v-spacer>
      <p>{{ $store.state.currentUser.fullName }}</p>
    </v-card-title>
    <v-card-title class="pa-6 pb-2">
      <p>Plan {{ $store.state.currentUser.rol }}</p>
      <v-spacer></v-spacer>
      <p>ID: {{ $store.state.currentUser.id }}</p>
    </v-card-title>
  </v-card>
</template>