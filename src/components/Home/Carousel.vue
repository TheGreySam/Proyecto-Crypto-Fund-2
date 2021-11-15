<template >
<div class="card-cript">
  <v-container >
    <div class="mb-10">
      <div class="section-title">
      <h2 class="title-section text-h2 font-weight-bold pb-5 text-shadow">Invierte en los activos más populares del mundo</h2>
      <v-icon class="text-white">mdi-arrow-down</v-icon>
      </div>

       <v-row>
         <v-col v-for="coin in $store.state.criptoInfo.data" :key="coin.id" cols="12" md="6" lg="4">
            <CriptoCard :coin="coin" class="mx-auto" />
         </v-col>
      </v-row>
  
    </div>
  </v-container>
  </div>
</template>

<script>
export default {
  components: {
    CriptoCard: () => import("@/components/Home/CriptoCard.vue"),
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>
<style scoped>
.section-title{
  text-align: center;
  color: #fff;
  margin-bottom: 40px;
}
.text-white{
  color: #fff;
}
.card-cript{
  background-image: url("../../assets/footer.jpeg");
  background-position: center;
}
</style>