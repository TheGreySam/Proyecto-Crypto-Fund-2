<template>
<div>
<SectionHero msg="Mercado" />
  <v-container>
    <h1 class="text-center py-5">Lista de Monedas</h1>

    <v-form ref="form">
      <v-text-field
        dark
        outlined
        class="px-5"
        placeholder="Buscar Moneda"
        background-color="grey darken-4"
        color="white"
        @keyup="searchCoin()"
        v-model="textSearch"
      ></v-text-field>
    </v-form>

    <v-simple-table dark class="px-5 mx-5 mb-10">
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="title in titles" :key="title" class="text-subtitle-1">
              {{ title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(coin, index) in filteredCoins" :key="index">
            <td class="font-italic">
              {{ index + 1 }}
            </td>
            <td class="pl-5">
              <v-img :src="coin.image" :alt="coin.name" width="2rem"> </v-img>
            </td>
            <td class="text-subtitle-1">{{ coin.name }}</td>
            <td class="text-uppercase text-subtitle-1 font-italic">
              {{ coin.symbol }}
            </td>
            <td class="text-subtitle-1">
            $ {{
                coin.current_price.toLocaleString("de-DE", {
                  maximumSignificantDigits: 10,
                })
              }}
            </td>
            <td
              :class="[
                coin.price_change_percentage_24h > 0
                  ? `success--text text-subtitle-1`
                  : `red--text text-subtitle-1`,
              ]"
            >
              {{ coin.price_change_percentage_24h }} %
            </td>
            <td class="text-subtitle-1">
              $ {{ coin.total_volume.toLocaleString("de-DE") }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</div>
</template>

<script>
export default {
  name: "App",
  components: {
    SectionHero: () => import("../components/SectionHero.vue")
  },

  data() {
    return {
      loading: false,
      coins: [],
      filteredCoins: [],
      titles: [
        "#",
        "Logo",
        "Moneda",
        "Simbolo",
        "Precio (USD)",
        "Cambio de Precio (24h)",
        "Vol. 24h (USD)",
      ],
      textSearch: "",
    };
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
  methods: {
    searchCoin() {
      this.filteredCoins = this.coins.filter((coin) =>
        coin.name.toLowerCase().includes(this.textSearch.toLowerCase()) || coin.symbol.toLowerCase().includes(this.textSearch.toLowerCase())  
      );
    },
  },
};
</script>

<style scoped></style>
