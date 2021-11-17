<template>
<v-card>
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
          <!--td>{{ wallet.data.name }}</td>
          <td>{{ wallet.data.value }}</td>
          <td>$ {{ wallet.data.quantity }}</td-->   
          <td>
            <v-btn x-small @click="eliminarCoin(wallet.id)" outlined>Eliminar</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</v-card>
  
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.get_Coins();
  },
  
  data() {
    return {
      alert: false,
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
    ...mapActions(["get_Coins", "deleteCoins"]),
 
    eliminarCoin(id) {
      this.$swal({
      title: '¿Estas seguro de eliminar este moneda?',
      type: 'warning',
      width: 600,
      padding: '3em',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat`,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si! Eliminar',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value){
          this.$swal(
            'Eliminada',
            'La moneda fue eliminada correctamente',
            'success'
          )
          this.deleteCoins(id)
        }
      })
    }
  },
};
</script>