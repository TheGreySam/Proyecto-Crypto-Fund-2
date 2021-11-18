<template>
  <div id="app">
    <SectionHero msg="Fondos" />
    <template>
      <div>
        <v-app-bar dark prominent src="../assets/bitcoin-img.jpeg">
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>
          <v-card class="d-flex align-center mb-6">
            <v-app-bar-nav-icon>
              <img src="cryptoFundLogo3d.png" width="55" alt="" />
            </v-app-bar-nav-icon>

            <v-toolbar-title v-if="this.$store.state.currentUser">
              Billetera {{ this.$store.state.currentUser.fullName }} 1
            </v-toolbar-title>
          </v-card>

          <v-spacer></v-spacer>
          <v-avatar size="150" class="p-5" tile>
            <v-img src="wallet.png"></v-img>
          </v-avatar>
        </v-app-bar>
      </div>
    </template>
    <div>
      <v-row>
        <v-col sm="6" md="6" cols="12">
          <UserInfo />
         
        </v-col>

        <v-col sm="6" md="6" cols="12">
           <AddCoins />
          <EditarCoins />
          <GraficoCripto />
          <Bucle />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Bucle from "@/components/Fondo/Bucle";
import AddCoins from "@/components/Fondo/AddCoins"
import GraficoCripto from "@/components/Fondo/GraficoCripto";
import SectionHero from "../components/SectionHero.vue";
import UserInfo from "@/components/Fondo/UserInfo";
import Porcentaje from "@/components/Fondo/Porcentaje";
import Currency from "@/components/Fondo/Currency";
import EditarCoins from "@/components/Fondo/EditarCoins";

export default {
  name: "App",
  components: {
    GraficoCripto,
    AddCoins,
    SectionHero,
    UserInfo,
    Porcentaje,
    Currency,
    EditarCoins,
    Bucle
  },
};
</script>

<style></style>
