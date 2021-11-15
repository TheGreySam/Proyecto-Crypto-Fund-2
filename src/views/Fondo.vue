<template>
  <div id="app"  class="cfgray">
    <SectionHero msg="Fondos" class="pb-5"/>
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
            <img src="cryptoFundLogo3d.png" width="55" alt="" />
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

      <v-card class="mx-auto pb-5 mb-5 cforange">
        <div>
          <v-row>
            <v-col md="6" cols="12">
              <div class="px-5 py-5"><UserInfo /></div>
              <div class="px-5 py-5"><Porcentaje /></div>
              <div class="px-5 py-5"><Currency /></div>
            </v-col>

            <v-col md="6" cols="12">
              <AddCoins class="px-5 py-5"/>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AddCoins from "@/components/Fondo/AddCoins"
import GraficoCripto from "@/components/Fondo/GraficoCripto";
import SectionHero from "../components/SectionHero.vue";
import UserInfo from "@/components/Fondo/UserInfo";
import Porcentaje from "@/components/Fondo/Porcentaje";
import Currency from "@/components/Fondo/Currency";

export default {
  name: "App",
  components: {
    GraficoCripto,
    AddCoins,
    SectionHero,
    UserInfo,
    Porcentaje,
    Currency,
  },
};
</script>

<style></style>
