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
      <v-btn block outlined color="cforange" @click="addCoins"> Guardar </v-btn>
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
  
actions: {
    //Agregar juguetes a firestore
    addToy(state, juguete) {
      const { Código, Nombre, Stock, Precio } = juguete
      if (Código.length > 1 && Nombre.length > 1 && Stock.length > 1 && Precio.length > 2) {
        juguete.Precio = Number(juguete.Precio);
        juguete.Stock = Number(juguete.Stock);
        firebase
          .firestore()
          .collection("juguetes")
          .add(juguete);
      }
      else {
        let errores = ""
        if (juguete.Código == "") {
          errores = errores + "Código, "
        }
        if (juguete.Nombre == "") {
          errores = errores + "Nombre, "
        }
        if (juguete.Stock == "") {
          errores = errores + "Stock, "
        }
        if (juguete.Precio == "") {
          errores = errores + "Precio"
        }
        alert("Los siguientes campos son requeridos: " + errores)
      }
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
