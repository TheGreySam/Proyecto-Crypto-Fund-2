<template>
  <div>
    <v-card class="x-1 mb-1 pb-4 px-4">
       <v-container>
      <v-card-title class="text-center">Debe seleccionar la moneda y la cantidad</v-card-title>
      
        <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <v-select
        v-model="selected.nameCoin"
        :items="coins"
        item-text="name"
        item-value="name"
        label="Seleccionar"
      ></v-select>
</v-col>
    
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <v-text-field
        type="number"
        v-model.number="selected.valueCoin"
        label="Cantidad"
        required
      ></v-text-field>
      </v-col>
     
      <v-col
        cols="12"
        sm="4"
      >
      <v-btn block outlined color="cfdarkblue" @click="Agregar"> Agregar
        <v-icon dark>
        mdi-plus
      </v-icon> </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
      <v-btn block outlined color="cfdarkblue" @click="editar"> Editar 
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
      <v-btn block outlined color="cfdarkblue" @click="borrar"> Borrar 
          <v-icon> mdi-delete </v-icon>
      </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="12"
      >
      <v-btn block outlined color="cfdarkblue" @click="actualizar"
        >Actualizar</v-btn
      >
      </v-col>
      
      </v-row>
      </v-container>
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
        this.$swal({
          title: "Estás seguro de borrar el curso?",
          text: "No Podrás revertir los cambios!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, quiero borrarlo!",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal("La Moneda se ha borrado exitosamente").then(() => {
              this.addCoins();
              this.actualizar();
              this.actualizar();
            });
          }
        });
      } else {
        this.$swal("La Moneda que quieres borrar no existe");
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
        this.$swal({
          title: "Estás seguro de editar la Moneda?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, quiero editarla!",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal("La Moneda se ha editado exitosamente").then(() => {
              this.addCoins();
              this.actualizar();
            });
          }
        });
      } else {
        this.$swal("La Moneda que quieres editar no existe");
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
          this.$swal({
            title: "Estás seguro de agregar la Moneda?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, quiero agregarla!",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$swal("La Moneda se ha agregado exitosamente").then(() => {
                this.addCoins();
                this.actualizar();
              });
            }
          });
        } else {
          this.walletOne.push(this.selected);
          console.log(this.walletOne);
          this.$store.dispatch("subscribeToAuthStateChange");
          this.selected = { nameCoin: "", valueCoin: "" };

          this.$swal({
            title: "Estás seguro de agregar la Moneda?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, quiero agregarla!",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$swal("La Moneda se ha agregado exitosamente").then(() => {
                this.addCoins();
                this.actualizar();
              });
            }
          });
        }
      } else {
        this.walletOne.push(this.selected);
        console.log(this.walletOne);
        this.$store.dispatch("subscribeToAuthStateChange");
        this.selected = { nameCoin: "", valueCoin: "" };

        this.$swal({
          title: "Estás seguro de agregar la Moneda?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, quiero agregarla!",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal("La Moneda se ha agregado exitosamente").then(() => {
              this.addCoins();
              this.actualizar();
            });
          }
        });
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
      this.calculo();
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
      this.$store.state.data = this.dataCoins;
    }
    
  },
  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data), console.log(data);
    this.id = this.$store.state.currentUser.id;
    this.actualizar()
  },
};
</script>

<style></style>
