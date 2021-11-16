<template>
  <v-card class="mx-1 mb-1">
    <v-container>
      <v-row>
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <!--v-text-field
          v-model="walletOne.Código"
          :rules="codigoRules"
          label="Ingrese código del juguete"
          required
        >HHHHH</v-text-field>
        <v-text-field
          v-model="walletOne.name"
          label="Ingresa tu moneda"
          required
        >HHHHHH</v-text-field-->
            <v-select
              v-model="selected.nameCoin"
              :items="coins"
              item-text="name"
              item-value="name"
              label="Añade tu moneda"
            ></v-select>
            <v-text-field
              v-model="walletOne.Cantidad"
              label="Ingresa cantidad"
              required
            ></v-text-field>
            <!--v-text-field
              v-model="walletOne.Precio"
              label="Ingrese precio del juguete"
              required
            ></v-text-field-->
            <p></p>
            <div id="botones">
              <v-btn @click="addMoneda(walletOne)" outlined>Guardar</v-btn>
            </div>
          </v-form>
        </v-col>
        <v-col>
          <h3>Balance actual:</h3>
          <p>
            {{ this.$store.state.currentUser.walletOne[0].nameCoin }} equivale a
           
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import Firebase from "firebase";
import { mapActions, mapState } from "vuex";
export default {
 
  data: () => ({
    alert: false,
    coins: [],
    selected: { nameCoin: "", valueCoin: "" },
    walletOne: {
      Código: "",
      Nombre: "",
      Cantidad: "",
      Precio: "",
    },
    valid: true,
    Código: "",
   // codigoRules: [(v) => !!v || "Código es requerido"],
  }),

  computed: {
    ...mapState(["juguetes"]),
  },
  methods: {
      addMoneda() {
      Firebase.firestore().collection("usuarios").doc(this.id).update({
        walletOne: this.walletOne,
      });
    },
    //...mapActions(["get_Toys", "addMoneda"]),
    //validate() {
    //  this.$refs.form.validate();
    //},
    //reset() {
    //  this.$refs.form.reset();
    //},
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
<style>
</style>