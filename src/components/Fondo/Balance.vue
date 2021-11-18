<template>
  <div>
    <v-card class="mx-1 mb-1 mt-5 p-2">
      <v-container>
          <v-card-title class="pa-3 pb-1">
               <p >Balance total: {{this.totalCoin()}} USD</p>
          
            </v-card-title>
        <v-simple-table class="mb-5">
          <template v-slot:default>
              <thead>
            <tr>
              <th v-for="title in titles" :key="title" class="text-subtitle-1">
                {{ title }}
              </th>
            </tr>
          </thead>
            <tbody>
              <tr data
                v-for="(data, index) in $store.state.data"
                :key="index"
              >
                <td class="text-subtitle-1">{{ data.name }}</td>
                <td class="text-uppercase text-subtitle-1 font-italic">
                  {{ data.price }} USD
                </td>
                <td class="text-uppercase text-subtitle-1 font-italic">
                  {{ data.valueCoin }}
                </td>
                <td class="text-uppercase text-subtitle-1 font-italic">
                  {{ data.price * data.valueCoin }} USD
                </td>
               
              </tr>
            </tbody>
            <v-btn @click="totalCoin">Total</v-btn>
          </template>
        </v-simple-table>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
    data() {
    return {
      titles: ["Nombre", "Precio", "Cantidad", "Total"],
      data: []
    };
  },
  methods: {
    totalPrecio() {
      const precio = this.data.valueCoin * this.data.price
      console.log(precio)

    },
    totalCoin() {
        const total = this.$store.state.data.reduce((sum, value) => (sum +  (value.valueCoin * value.price)), 0);
        console.log(total)
         return total;
         
         
        
    
    //this.$store.state.data.forEach((coin) => {
      //let value = coin.valueCoin
      //let price = coin.price
      //let total = value * price
      //let totalTotal = null
      //totalTotal = total + totalTotal
      //console.log(totalTotal)
      //this.totalCoin.push(total)
    //})
    
    //console.log(this.totalCoin)
  }
  }
  
}
</script>