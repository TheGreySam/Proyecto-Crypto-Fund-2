<template>
  <div id="app">
    <SectionHero msg="Fondos" />
    <v-container>
      <v-card class="mx-auto">
        <v-toolbar color="cfdarkblue" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Tu fondo 1</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container>
          <v-row class="pt-5 mx-3">
            <v-col md="4" cols="12">
              <v-card class="elevation-3">
                <v-card-title class="pa-6 pb-3">
                  <p>Visits Today</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template>
                      <v-btn>
                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        >Item
                        <v-list-item-title>Titulo</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-card-text class="pa-6 pt-0">
                  <v-row no-gutters class="pb-5">
                    <v-col cols="5">
                      <span style="font-size: 24px"> 12, 678</span>
                    </v-col>
                    <v-col cols="6"> asd </v-col>
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
            <v-col md="4" cols="12">
              <v-card >
                <v-card-title>
                  <p>Criptomonedas Agrupadas</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template>
                      <v-btn>
                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-title> item </v-list-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-card-text class="pa-6 pt-0">
                  <v-row no-gutters class="pb-5">
                    <v-col>
                      <GraficoTortaCripto />
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="4" cols="12">
              <v-card >
                <v-card-title class="pa-6 pb-3">
                  <p>Porcentaje participantes</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template>
                      <v-btn>
                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-title> item</v-list-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-card-text class="pa-6 pt-0">
                  <v-row no-gutters class="pb-5">
                    <v-col>
                      <GraficoTortaPorcentaje />
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import GraficoTortaCripto from "@/components/Fondo/GraficoTortaCripto";
import GraficoTortaPorcentaje from "@/components/Fondo/GraficoTortaPorcentaje";
import SectionHero from "../components/SectionHero.vue";

export default {
  name: "App",
  components: { GraficoTortaCripto, GraficoTortaPorcentaje, SectionHero },
};
</script>

<style></style>
