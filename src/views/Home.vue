<template>
  <main class="v-main" style="padding: 56px 0px 0px">
    <div class="v-main__wrap">
      <v-container>
        <Carousel />
 
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
  },

  
};
</script>
