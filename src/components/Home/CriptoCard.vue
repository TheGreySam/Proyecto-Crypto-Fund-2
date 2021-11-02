<template>
  <v-app>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-card hover v-for="coin in $store.state.criptoInfo.data" :key="coin.id" class="mb-5 pa-5" max-width="28rem">
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
            </v-card-title>
            <v-card-text>
              <h3 v-text="coin.symbol" class="text-uppercase"></h3>
            </v-card-text>

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
      
    </v-container>
  </v-app>

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

};
</script>

<style></style>
