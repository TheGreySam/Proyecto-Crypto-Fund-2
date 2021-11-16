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
    <tr v-for="(walletOne, i) in walletOne" :key="i">
          <td>{{ walletOne.data.name }}</td>
          <td>{{ walletOne.data.value }}</td>
          <td>$ {{ walletOne.data.quantity }}</td>         
              
    </tr>
    </tbody>
   </template>
  </v-simple-table>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TablaDatos",
  mounted() {
    this.get_Coins();
  },
  data() {
    return {
      walletOne: {
        data: {
          name: "",
          value: "",
          quantity: "",
        },
      },
      dialog: false,
    };
  },
  computed: {
    ...mapState(["walletOne"]),
  },
  methods: {
    ...mapActions(["get_Coins"]),
  },
};
</script>

<style></style>
