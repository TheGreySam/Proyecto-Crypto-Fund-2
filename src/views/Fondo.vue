<template>
  <div id="app">
    <SectionHero msg="Fondos" />
    <v-container>
      <v-card >
        <v-app-bar
       class="mx-auto"
        color="cfdarkblue"
        dark
    
        prominent
        src="../assets/bitcoin-img.jpeg"
      fade-img-on-scroll
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        >
        <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
        <v-app-bar-nav-icon>
            <img src="cryptoFundLogo3d.png" width="55" alt="">
        </v-app-bar-nav-icon>
        <v-toolbar-title>Billetera 1</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-avatar size="100" class="p-2" tile>
              <v-img src="wallet.png"></v-img>
            </v-avatar>
      </v-app-bar>
      </v-card>
      
      <v-card class="mx-auto">
        <div>
          <v-row>
            <v-col sm="6" md="5" cols="12">
              <UserInfo />
              <Porcentaje />
              <Currency />
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
import Currency from "@/components/Fondo/Currency";

export default {
  name: "App",
  components: {
    GraficoTortaCripto,
    GraficoTortaPorcentaje,
    SectionHero,
    UserInfo,
    Porcentaje,
    Currency
  },
};
</script>

<style>
</style>
