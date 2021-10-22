<template>
  <v-card
    max-width="375"
    class="mx-auto text-xs-center"
    
  > 
    
    

    <v-list 
    two-line
    v-for="coin in coins"
    :key="coin.id"
    >
        <v-list-item-icon>
            <v-img 
            :src="coin.image" 
            :alt="coin.name" 
            width="8rem">
            </v-img>
          </v-list-item-icon>
      <v-list-item>
        
        <v-list-item-content>
          <v-list-item-title class="justify-center">(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

        
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(323) 555-6789</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
       

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>ali_connors@example.com</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        

        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: "App",
    data(){
    return {
      coins: []
    }
  },

  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    this.coins = data,
    console.log(data);
  },
  
  }
</script>