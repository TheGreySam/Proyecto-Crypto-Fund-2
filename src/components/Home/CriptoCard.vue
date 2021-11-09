<template>
  <v-app>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-card
            hover
            v-for="coin in $store.state.criptoInfo.data"
            :key="coin.id"
            class="mb-5 pa-5"
            max-width="28rem"
          >
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
              <h3 v-text="coin.symbol" class="text-uppercase text-left"></h3>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-text>
              <v-sheet
                class="v-sheet--offset mx-auto"
                color="cfwhite"
                elevation="0"
                max-width="calc(100% - 32px)"
              >
                <v-sparkline
                  
                  :value="coin.sparkline_in_7d.price"
                  :color="coin.price_change_percentage_24h > 0
                  ? `success`
                  : `red`"
                  line-width="1"
                  padding="16"
                  
                ></v-sparkline>
              </v-sheet>
            </v-card-text>
            <v-divider></v-divider>
            <v-container>
              <v-card-title>
                Valor actual: 
                ${{
                  coin.current_price.toLocaleString("de-DE", {
                    maximumSignificantDigits: 10,
                  })
                }}
                USD
              </v-card-title>
              <v-card-title>
              Vol. 24H: ${{ coin.total_volume.toLocaleString("de-DE") }} USD
              </v-card-title>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
};
</script>

<style></style>
