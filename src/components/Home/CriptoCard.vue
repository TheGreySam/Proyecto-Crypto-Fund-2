<template>
<v-container grid-list-md fluid>
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

      <v-divider inset></v-divider>
    </v-list>
  </v-card>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      coins: [],
    };
  },

  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data), console.log(data);
  },
};
</script>