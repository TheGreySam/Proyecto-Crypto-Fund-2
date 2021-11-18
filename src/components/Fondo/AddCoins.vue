<template>
  <div>
    <v-card>
      <v-select
        v-model="selected.nameCoin"
        :items="coins"
        item-text="name"
        item-value="name"
        label="I have"
      ></v-select>

      <v-text-field
        type="number"
        v-model.number="selected.valueCoin"
        label="Cantidad"
        required
      ></v-text-field>
      <h1>{{ this.id }}</h1>
      <v-btn block outlined color="cforange" @click="Agregar"> Agregar </v-btn>
      <h1 v-if="this.walletOne[0]" class="text-h5">Estas agregando:</h1>
      <div v-if="this.walletOne[0]">
        <h1
          v-for="(wallet, index) in this.walletOne"
          :key="index"
          class="text-subtitle-1"
        >
          {{ wallet.valueCoin }} {{ wallet.nameCoin }}
        </h1>
      </div>

      <v-btn block outlined color="cforange" @click="editar"> Editar </v-btn>
      <v-btn block outlined color="cforange" @click="borrar"> Borrar </v-btn>
      <v-btn block outlined color="cforange" @click="addCoins"> Guardar </v-btn>
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
      id: "",
      indice: "",
    };
  },

  methods: {
    borrar() {
      let dataCurrentUser = this.$store.state.currentUser.walletOne;

      let funciona = 0;
      console.log(funciona);

      for (let i = 0; i <= dataCurrentUser.length - 1; i++) {
        let indice = i;
        if (
          this.$store.state.currentUser.walletOne[i].nameCoin ===
          this.selected.nameCoin
        ) {
          funciona = 1;
          const indicedos = indice;
          this.indice = indicedos;
          console.log(funciona, indicedos);
        } else {
          console.log("No Funciona");
        }
      }
      if (funciona === 1) {
        this.$store.state.currentUser.walletOne.splice(this.indice, 1);
        
      } else {
      }
    },
    editar() {
      let dataCurrentUser = this.$store.state.currentUser.walletOne;

      let funciona = 0;
      console.log(funciona);

      for (let i = 0; i <= dataCurrentUser.length - 1; i++) {
        let indice = i;
        if (
          this.$store.state.currentUser.walletOne[i].nameCoin ===
          this.selected.nameCoin
        ) {
          funciona = 1;
          const indicedos = indice;
          this.indice = indicedos;
          console.log(funciona, indicedos);
        } else {
          console.log("No Funciona");
        }
      }
      if (funciona === 1) {
        this.$store.state.currentUser.walletOne[this.indice].valueCoin =
            this.selected.valueCoin;
       
      } else {
      }
    },
    Agregar() {
      let dataCurrentUser = this.$store.state.currentUser.walletOne;
      if (dataCurrentUser !== undefined) {
        let funciona = 0;
        console.log(funciona);

        for (let i = 0; i <= dataCurrentUser.length - 1; i++) {
          let indice = i;
          if (
            this.$store.state.currentUser.walletOne[i].nameCoin ===
            this.selected.nameCoin
          ) {
            funciona = 1;
            const indicedos = indice;
            this.indice = indicedos;
            console.log(funciona, indicedos);
          } else {
            console.log("No Funciona");
          }
        }

        if (funciona === 1) {
          this.$store.state.currentUser.walletOne[this.indice].valueCoin =
            this.$store.state.currentUser.walletOne[this.indice].valueCoin +
            this.selected.valueCoin;
        } else {
          this.walletOne.push(this.selected);
          console.log(this.walletOne);
          this.$store.dispatch("subscribeToAuthStateChange");
          this.selected = { nameCoin: "", valueCoin: "" };
        }
      } else {
        this.walletOne.push(this.selected);
        console.log(this.walletOne);
        this.$store.dispatch("subscribeToAuthStateChange");
        this.selected = { nameCoin: "", valueCoin: "" };
      }
    },

    addCoins() {
      let dataCurrentUser = this.$store.state.currentUser.walletOne;
      if (dataCurrentUser !== undefined) {
        for (let i = 0; i <= dataCurrentUser.length - 1; i++) {
          this.walletOne.push(dataCurrentUser[i]);
        }
      }
      Firebase.firestore().collection("usuarios").doc(this.id).update({
        walletOne: this.walletOne,
      });
      this.selected = { nameCoin: "", valueCoin: "" };
      this.walletOne = [];
      this.$store.dispatch("subscribeToAuthStateChange");
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
