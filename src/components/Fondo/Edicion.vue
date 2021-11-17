<template>
  <v-simple-table>
    <template v-slot:default="dialog">
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Valor</th>
          <th class="text-left">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(wallet, i) in wallets" :key="i">
          <td>{{ wallet.data.name }}</td>
          <td>{{ wallet.data.value }}</td>
          <td>$ {{ wallet.data.quantity }}</td>
          <td>
            <v-btn x-small outlined flat @click="holahola()">Editar</v-btn>
            <v-layout row justify-center>
              <v-dialog v-show="dialog" max-width="290">
                <v-card>
                  <v-card-title class="headline"
                    >Edicion de monedas</v-card-title
                  >
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                      v-model="wallet.name"
                      label="Ingrese nombre de la moneda"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="wallet.quantity"
                      label="Ingrese la cantidad"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="wallet.value"
                      label="Ingrese el valor"
                      required
                    ></v-text-field>
                    <v-btn @click="editarCoin" outlined
                      >Agregar</v-btn
                    >
                  </v-form>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green darken-1"
                      flat="flat"
                      @click.native="dialog = false"
                      >Disagree</v-btn
                    >
                    <v-btn
                      color="green darken-1"
                      flat="flat"
                      @click.native="dialog = false"
                      >Agree</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.get_Coins();
  },
  data() {
    return {
      dialog: false,
      wallet: {
        name: "",
        value: "",
        quantity: "",
      },
    };
  },
  computed: {
    ...mapState(["usuarios"]),
  },
  methods: {
    holahola() {
      this.dialog = true;
      console.log("Hola!");
    },
    ...mapActions(["get_Coins", "editCoins"]),
    editarCoin(id) {
      this.$swal({
        title: "¿Estas seguro de editar esta moneda?",
        type: "warning",
        width: 600,
        padding: "3em",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si! Editar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.value) {
          this.$swal(
            "Editado",
            "La moneda fue editado correctamente",
            "success"
          );
          this.editCoins(id);
        }
      });
    },
  },
};
</script>