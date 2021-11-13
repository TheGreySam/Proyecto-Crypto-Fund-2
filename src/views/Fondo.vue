<template>
  <div id="app">
    <SectionHero msg="Fondos" />
    <v-container>
      <v-card class="mx-auto">
        <v-toolbar color="cfdarkblue" dark>
          <v-row>
            <v-col>
              <img
                src="https://cdn.discordapp.com/attachments/900147313304027266/907404002667409459/cryptoFundLogo3d.png"
                width="55"
                alt=""
              />

              <v-toolbar-title>Billetera 1</v-toolbar-title>

              <v-spacer></v-spacer>
            </v-col>
            <v-col cols="12" sm="4">
              <v-avatar size="100" class="ml-n10 mt-6" tile>
                <v-img src="wallet.png"></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-toolbar>

        <div>
          <v-row>
            <v-col sm="6" md="5" cols="12">
              <UserInfo />
              <Porcentaje />
            </v-col>

            <v-col>
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
import Porcentaje from "@/components/Fondo/Porcentaje";

export default {
  name: "App",
  components: {
    GraficoTortaCripto,
    GraficoTortaPorcentaje,
    SectionHero,
    UserInfo,
    Porcentaje,
  },
};
</script>

<style>
</style>
