<template>
    <div>
    <div>
     <v-sheet
    class="mx-auto slider-app"
    max-width="100%"
  >
    <v-slide-group
      multiple
      show-arrows
    >
      <v-slide-item
        v-for="(coin, i) in filteredCoins"
        :key="i"
        v-slot="{ active, toggle }"
      >
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="purple white--text"
          depressed
          rounded
          @click="toggle"
        >
        <v-img :src="coin.image" :alt="coin.name" width="2rem"> </v-img>
           {{ coin.name }} $ {{
                coin.current_price.toLocaleString("de-DE", {
                  maximumSignificantDigits: 10,
                })
              }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Ticketprice',
    

    data() {
        return {
            model: null,
            filteredCoins: [],
        };
    },

   async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data);
    (this.filteredCoins = data);
  },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.slider-app{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99999;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>