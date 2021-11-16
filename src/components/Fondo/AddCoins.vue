<template>
  <div>
    <v-card class="mx-1 mb-1">
      <v-select
        v-model="selected.nameCoin"
        :items="coins"
        item-text="name"
        item-value="name"
        label="Añade tu moneda"
      ></v-select>

      <v-text-field
        type="number"
        v-model.number="selected.valueCoin"
        label="Cantidad"
        required
      ></v-text-field>
      <h1>{{ this.id }}</h1>
      <v-btn block outlined color="cforange" @click="Agregar"> Agregar </v-btn>
      <v-btn block outlined color="cforange" @click="addMoneda"> Guardar </v-btn>
        <h1>{{ this.$store.state.currentUser.walletOne[0].nameCoin }}</h1>
        
      
    </v-card>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data() {
    return {
      coins: [],
      inputed: "",
      selected: { nameCoin: "", valueCoin: "" },
      walletOne: [],
      id: {},
      headers: [
        { text: 'Moneda', value: 'moneda' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: 'Acciones', value: 'actions' }
      ]
    };
  },
  methods: {
    Agregar() {
      this.walletOne.push(this.selected);
      console.log(this.walletOne);
    },
    addCoins() {
      Firebase.firestore().collection("usuarios").doc(this.id).update({
        walletOne: this.walletOne,
      });
    },
  },
  

    

  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data), console.log(data);
    this.id = this.$store.state.currentUser.id;
  },
};
</script>

<style></style>
