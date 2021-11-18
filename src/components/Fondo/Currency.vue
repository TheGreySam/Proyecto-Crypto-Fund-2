<template>
  <v-card>
    <v-container>
      <h1>Calcula el valor de tus Criptomonedas</h1>
      <v-select
        @change="convert"
        v-model="selected[0]"
        :items="coins"
        item-text="name"
        item-value="current_price"
        label="I have"
      ></v-select>
       
      <v-text-field @input="convert" v-model="inputed"></v-text-field>

      <v-select
        @change="convert"
        v-model="selected[1]"
        :items="coins"
        item-text="name"
        item-value="current_price"
        label="I have"
      ></v-select>

      <h1> Tienes {{ this.result }} </h1>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      coins: [],
      selected: [],
      inputed: "",
      result: null,
      
    };
  },

  methods: {
    convert() {
      // First selected valute details
      let firstValue = this.selected[0];
      console.log(firstValue);

      let secondValue = this.selected[1];
      console.log(secondValue);
      // Second selected valute details
      let result = ( firstValue * this.inputed ) / secondValue;
      // Rounding to ten thousandths
      this.result = result
    },
  },

  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data), console.log(data);
    (this.coinsdos = data), console.log(data);
  },
};
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

// #app {
// 	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
// 	background-size: 400% 400%;
// 	animation: gradient 15s ease infinite;

//   @keyframes gradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
// }

h1,
h2,
h3 {
  font-family: "Indie Flower";
}

.bg--light {
  background: #fcfcfc;
}

.exchange {
  max-width: 50px;
}
</style>
