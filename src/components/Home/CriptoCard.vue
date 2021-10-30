<template>
  <v-app>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-card hover v-for="coin in coins" :key="coin.id" class="mb-5 pa-5" max-width="28rem">
            <v-card-text>
              <v-row align="center">
                <v-col cols="4"> </v-col>
                <v-col cols="4">
                  <v-img
                    :src="coin.image"
                    :alt="coin.name"
                    width="10rem"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-title>
              <h3 v-text="coin.name"></h3>
              <v-spacer></v-spacer>
              <h3 v-text="coin.symbol" class="text-uppercase"></h3>
              <v-spacer></v-spacer>
              <h3>${{ coin.current_price }} USD</h3>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <Sparkline />
            </v-card-text>
            <v-divider></v-divider>
            <v-container>
              <v-card-title>
                Valor actual:
                <v-spacer></v-spacer>
                Volumen 24H
              </v-card-title>
              <v-card-title>
                $ {{ coin.current_price }} USD
                <v-spacer></v-spacer>
                {{ coin.total_volume }}
              </v-card-title>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
  <!--v-container grid-list-md fluid>
  <v-layout align-start row wrap pb-4 justify-start>
  <v-card max-width="500" class="mx-auto text-xs-center">
    <v-list >
      <v-list-item v-for="coin in coins" :key="coin.id">
        <v-row>
          <v-col>
            <v-card class="mb-5">
          <v-list-item-icon>
        <v-img :src="coin.image" :alt="coin.name" width="8rem"> </v-img>
      </v-list-item-icon>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="justify-center" v-text="coin.name">
          </v-list-item-title>
          <v-list-item-title class="text-uppercase" v-text="coin.symbol">
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="justify-center">
            {{ coin.current_price }} USD
          </v-list-item-title>
          <v-divider inset></v-divider>

          <v-list-item-title>
            Volumen 24H {{ coin.total_volume }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
        </v-card>
          </v-col>
        </v-row>
        
         
      

      </v-list-item>
     
      <v-divider inset></v-divider>
    </v-list>
  </v-card>
  </v-layout>
</v-container-->
</template>

<script>
export default {
  name: "App",
  components: {
    Sparkline: () => import("@/components/Home/Sparkline"),
  },
  data() {
    return {
      coins: [],
    };
  },

  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data), console.log(data);
  },
};
</script>

<style>
</style>