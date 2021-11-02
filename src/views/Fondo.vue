<template>
  <div id="app">
    <v-container>
      <v-card class="mx-auto">
      <v-toolbar color="cforange" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Tu fondo 1</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <GraficoTortaCripto />
      <GraficoTortaPorcentaje />
    </v-card>
    <v-layout> </v-layout>
    </v-container>
    
  </div>
</template>

<script>
import GraficoTortaCripto from "@/components/Fondo/GraficoTortaCripto";
import GraficoTortaPorcentaje from "@/components/Fondo/GraficoTortaPorcentaje";


export default {
  name: "App",
  components: { GraficoTortaCripto, GraficoTortaPorcentaje },
  
}
</script>

<style>

</style>
