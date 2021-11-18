<template>
  <div>
    <v-card lclass="mx-1 mb-1 mt-5 p-2">
     
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

      
      <v-btn block outlined color="cforange" @click="addCoins"> Guardar </v-btn>
      <v-btn block outlined color="cforange" @click="actualizar">
        actualizar
      </v-btn>
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
      dataCoins: [],
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
      this.$store.dispatch("subscribeToAuthStateChange");
      this.selected = { nameCoin: "", valueCoin: "" };
      this.walletOne = [];
      
    },

    actualizar() {
      this.$store.dispatch("subscribeToAuthStateChange");
      this.calculo()
    },
    calculo() {
      this.dataCoins = [];
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
            price: valueCoinApi,
          };
          if (nameCoinFire == nameCoinApi) {
            this.dataCoins.push(data);
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
    this.id = this.$store.state.currentUser.id;
  },
};
</script>

<style></style>
