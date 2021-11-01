<template>
  <main class="v-main" style="padding: 56px 0px 0px">
    <div class="v-main__wrap">
      <v-container>
        <Carousel />
        <Prueba />
 
      </v-container>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  components: {
    Carousel: () => import("../components/Home/Carousel.vue"),
    Lista: () => import("../components/Lista/Lista.vue"),
    Prueba: () => import("../components/Login/RegistrationCard.vue"),
  },
  data() {
    return {
      coins: [],
    };
  },

  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data), console.log(data);
  },
};
</script>
