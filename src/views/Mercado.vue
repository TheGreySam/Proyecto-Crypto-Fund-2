<template>
  <v-container>
    <h1 class="pb-5">Lista de Monedas</h1>
    <v-card class="mx-auto"  tile>
      <v-list rounded elevation="2">
        <v-list-item-group color="cforange">
          <v-list-item
            v-for="coin in $store.state.criptoInfo.data"
            :key="coin.id"
          >
            <v-list-item-icon>
              <v-img :src="coin.image" :alt="coin.name" width="2rem"> </v-img>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="coin.name"> </v-list-item-title>
            </v-list-item-content>
            <br />
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">
                {{ coin.symbol }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>
                {{ coin.current_price }} USD
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>
                Volumen 24H {{ coin.total_volume }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
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
};
</script>
