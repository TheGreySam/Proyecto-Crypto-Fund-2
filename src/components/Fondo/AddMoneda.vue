<template>
  <div>
    <div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="walletOne.Código"
          :rules="codigoRules"
          label="Ingrese código del juguete"
          required
        >HHHHH</v-text-field>
        <v-text-field
          v-model="walletOne.name"
          label="Ingrese nombre del juguete"
          required
        >HHHHHH</v-text-field>
        <v-text-field
          v-model="walletOne.Stock"
          label="Ingrese stock del juguete"
          required
        ></v-text-field>
        <v-text-field
          v-model="walletOne.Precio"
          label="Ingrese precio del juguete"
          required
        ></v-text-field>
        <div id="botones">
          <v-btn @click="addToy(walletOne)" outlined>Agregar juguete</v-btn>
        </div>
      </v-form>
    </div>    
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.get_Toys();
  },
  data: () => ({
    alert: false,
    walletOne: {
      Código: "",
      Nombre: "",
      Stock: "",
      Precio: "",
    },
    valid: true,
    Código: "",
    codigoRules: [(v) => !!v || "Código es requerido"],
  }),

  computed: {
    ...mapState(["juguetes"]),
  },
  methods: {
    ...mapActions(["get_Toys", "addToy"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
<style>

</style>