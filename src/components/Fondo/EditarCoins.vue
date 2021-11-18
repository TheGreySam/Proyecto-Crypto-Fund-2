<template>
  <div>
    <v-container>
      <h1 class="text-center py-5">Tu Billetera</h1>

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
            
            <tr v-for="(coin, index) in $store.state.currentUser.walletOne" :key="index">
             
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
      coins: [],
      filteredCoins: [],
      titles: ["Nombre moneda", "Cantidad"],
      textSearch: "",
    };
  },
};
</script>
