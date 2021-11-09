<template>
  <v-card hover class="mb-5 pa-5 mx-auto">
    <v-card-text>
      <v-row align="center">
        <v-col cols="4"> </v-col>
        <v-col cols="4">
          <v-img :src="coin.image" :alt="coin.name" width="10rem"></v-img>
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
      <v-sheet
        class="v-sheet--offset mx-auto"
        color="cfwhite"
        elevation="0"
        max-width="calc(100% - 32px)"
      >
        <v-sparkline
          :value="coin.sparkline_in_7d.price"
          :color="coin.price_change_percentage_24h > 0 ? `success` : `red`"
          line-width="1"
          padding="16"
        ></v-sparkline>
      </v-sheet>
    </v-card-text>
    <v-divider></v-divider>
    <v-container>
      <v-card-title class="card-title-cripto">
        Valor actual: $
        {{
          coin.current_price.toLocaleString("de-DE", {
            maximumSignificantDigits: 10,
          })
        }}
        USD
      </v-card-title>
      <v-card-title class="card-title-cripto">
        Volumen 24H: {{ coin.total_volume.toLocaleString("de-DE") }} USD
      </v-card-title>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "App",
  props: {
    coin: { type: Object, required: true },
  },

  data() {
    return {
      coins: [],
    };
  },
};
</script>

<style>
.card-title-cripto {
  font-size: 16px;
}
</style>
