<template>
       <v-simple-table>
      <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Valor</th>
          <th class="text-left">Cantidad</th>
        </tr>
      </thead>
      <tbody>
    <tr v-for="(wallet, i) in wallet" :key="i">
          <td>{{ wallet.data.fullname }}</td>
          <!--td>{{ wallet.data.value }}</td>
          <td>$ {{ wallet.data.quantity }}</td-->         
              
    </tr>
    </tbody>
   </template>
  </v-simple-table>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TablaDatos",
  created() {
    this.get_Coins();
  },
  data() {
    return {
      //walletOne: {
        //data: {
          //name: "",
          //value: "",
          //quantity: "",
        //},
      //},
      dialog: false,
    };
  },
  computed: {
    ...mapState(["wallet"]),
  },
  methods: {
    ...mapActions(["get_Coins"]),
  },
};
</script>

<style></style>
