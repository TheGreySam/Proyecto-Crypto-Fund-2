<template>
  <div>
    <v-btn block outlined color="cforange" @click="calculo">Buscar</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coins: [],
      walletOne: [],
      dataCoins: []
    };
  },
  methods: {
    calculo() {
      this.dataCoins = []
      let dataCurrentUser = this.$store.state.currentUser.walletOne;
      let dataCoin = this.coins;

      dataCurrentUser.forEach((coin, index) => {
        let indiceFire = index;
        let nameCoinFire = coin.nameCoin;
        let valueCoinFire = coin.valueCoin;
        console.log(nameCoinFire, indiceFire, valueCoinFire);

        dataCoin.forEach((coin, index) => {
          let indiceApi = index;
          let nameCoinApi = coin.name;
          let valueCoinApi = coin.current_price;
          let data = {
            name: nameCoinFire,
            valueCoin: valueCoinFire,
            price: valueCoinApi
          }
          if (nameCoinFire == nameCoinApi) {
            this.dataCoins.push(data)
          }
        });
      });
    },
  },
  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data), console.log(data);
  },
};
</script>

<style></style>
