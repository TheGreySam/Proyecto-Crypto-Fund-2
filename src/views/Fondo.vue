<template>
  <div id="app">
    <SectionHero msg="Fondos" />
    <v-container>
      <v-card class="mx-auto">
        <v-toolbar color="cfdarkblue" dark>
          <img
            src="https://cdn.discordapp.com/attachments/900147313304027266/907404002667409459/cryptoFundLogo3d.png"
            width="55"
            alt=""
          />

          <v-toolbar-title>Billetera 1</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar>

        <div>
          <v-row>
            <v-menu offset-y>
              <template>
                <v-btn>Latest Reports</v-btn>
              </template>
            </v-menu>
          </v-row>
          <v-row>
            <v-col sm="6" md="5" cols="12">
              <UserInfo />
            </v-col>
      
            <v-col>
              <v-card-title class="pa-6 pb-3">
                <p>Criptomonedas Agrupadas</p>
                <v-spacer></v-spacer>
              </v-card-title>

              <GraficoTortaCripto />
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </div>
</template>


<script>
import GraficoTortaCripto from "@/components/Fondo/GraficoTortaCripto";
import GraficoTortaPorcentaje from "@/components/Fondo/GraficoTortaPorcentaje";
import SectionHero from "../components/SectionHero.vue";
import UserInfo from "@/components/Fondo/UserInfo";

export default {
  name: "App",
  components: {
    GraficoTortaCripto,
    GraficoTortaPorcentaje,
    SectionHero,
    UserInfo,
  },
};
</script>

<style>
</style>
