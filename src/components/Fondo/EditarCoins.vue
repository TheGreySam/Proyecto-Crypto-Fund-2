<template>
  <div>
    <v-card class="mx-1 mb-1 mt-5">
      <v-container>
        

      

      <v-simple-table dark class="px-5 mx-5 mb-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th v-for="title in titles" :key="title" class="text-subtitle-1">
                {{ title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(coin, index) in $store.state.currentUser.walletOne"
              :key="index"
            >
              <td class="text-subtitle-1">{{ coin.nameCoin }}</td>
              <td class="text-uppercase text-subtitle-1 font-italic">
                {{ coin.valueCoin }}
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
  data() {
    return {
      titles: ["Nombre moneda", "Cantidad"],
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
};
</script>
