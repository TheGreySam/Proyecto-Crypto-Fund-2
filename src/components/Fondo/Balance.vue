<template>
  
          <v-card class="mx-1 mb-1 mt-5">
            <v-card-title class="pa-6 pb-2">
               <p>Balance</p>
          
            </v-card-title>
            <v-card-text></v-card-text>
            <v-card-title class="pa-6 pb-2">
              <p v-if="this.$store.state.currentUser">{{this.$store.state.currentUser.walletOne}} $</p>
            </v-card-title>
            <v-card-title v-for="(index, coin) in this.$store.state.currentUser.walletOne" :key="index" class="pa-6 pb-2">
              {{coin.valueCoin}} $
            </v-card-title>
            <v-card-title>
                {{total}}
            </v-card-title>
           
          </v-card>
      
</template>

<script>

export default {
  data() {
    return {
      coins: [],
      filteredCoins: [],
    };
  },
  //total: function(){

  //let total = [];

  //Object.entries(this.walletOne).forEach(([key, coin]) => {
    //  total.push(coin.valueCoin) // the value of the current key.
  //});

  //return total.reduce(function(total, num){ return total + num }, 0);

//},
  //const coinCurrentPrice = store.state.currentUser. * store.state.manzanasApi.precioManzanasApi,

  total: function() {
  let total = store.state.currentUSer.valueCoin * store.state.coins.current_price
  return total
  },

  async mounted() {
    this.loading = true;
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data), console.log(data);
    (this.filteredCoins = data), console.log(data);
    this.loading = false;
  },
};

</script>
 if name.coin === coin.name

 