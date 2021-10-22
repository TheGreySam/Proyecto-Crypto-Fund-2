<template>
  <v-card
    class="mx-auto"
    
    tile
  >
  <Carousel />
    <v-list rounded>
      <v-subheader></v-subheader>
      <v-list-item-group
        
      
      >
        <v-list-item
          v-for="coin in coins"
          :key="coin.id"
        >
          <v-list-item-icon>
            <v-img 
            :src="coin.image" 
            :alt="coin.name" 
            width="2rem">
            </v-img>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="coin.name">
                            
            </v-list-item-title>
          </v-list-item-content>
          <br>
          <v-list-item-content>
            <v-list-title class="text-uppercase">
              {{coin.symbol}}
            </v-list-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-title>
              {{coin.current_price}} USD
            </v-list-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-title>
              Volumen 24H {{coin.total_volume}}
            </v-list-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: "App",
    components: {
          Carousel: () =>
          import("../components/Home/Carousel.vue")

      },
    data(){
    return {
      coins: []
    }
  },

  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    this.coins = data,
    console.log(data);
  },
  
  }
</script>
