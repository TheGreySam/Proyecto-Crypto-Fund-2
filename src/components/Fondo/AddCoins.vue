<template>
  <div>
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <!--v-select
              v-model="selected.nameCoin"
              :items="coins"
              item-text="name"
              item-value="name"
              label="Ingresa tu moneda"
            ></v-select>

            <v-text-field
              type="number"
              v-model.number="selected.valueCoin"
              label="Ingresa la cantidad"
              required
            ></v-text-field>

            <v-btn block outlined color="cforange" @click="Agregar">
              Agregar
            </v-btn>
            <v-btn block outlined color="cforange" @click="addCoins">
              Guardar
            </v-btn-->
            <v-form ref="form" v-model="valid" lazy-validation>
              
              <v-text-field
                v-model="walletOne.name"
                label="Ingrese nombre de la moneda"
                required
              ></v-text-field>
              <v-text-field
                v-model="walletOne.quantity"
                label="Ingrese la cantidad"
                required
              ></v-text-field>
              <v-text-field
                v-model="walletOne.value"
                label="Ingrese el valor"
                required
              ></v-text-field>
              <div id="botones">
                <v-btn @click="addCoin(walletOne)" outlined>Agregar juguete</v-btn>
              </div>
            </v-form>
          </v-col>
          <v-col>
            <p>{{ this.id }}</p>
            <p>Balance</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Firebase from "firebase";
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.get_Coins();
  },
  data() {
    return {
      coins: [],
      inputed: "",
      selected: { nameCoin: "", valueCoin: "" },
      walletOne: {
        name: "",
        value: "",
        quantity: "",
      },
      id: {},
    };
  },
  computed: {
    ...mapState(["usuarios"]),
  },
  methods: {
    ...mapActions(["get_Coins", "addCoin"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    //Agregar() {
    //this.walletOne.push(
    //this.selected,
    //this.$store.state.currentUser.walletOne[0]
    //);
    //console.log(this.walletOne);
    //},

    //addCoins() {
    //Firebase.firestore().collection("usuarios").doc(this.id).update({
    //walletOne: this.walletOne,
    //});
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

<style></style>
