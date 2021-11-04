<template>
  <v-app>
     <v-carousel
    cycle
    height="550"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
    <v-container>
          <div class="text-h2 mx-auto">
              <v-row>
                  <v-col lg="12">
                    {{ slide }}
                    <CriptoCard />
                  </v-col>
              </v-row>
          </div>
    </v-container>
    </v-carousel-item>
  </v-carousel>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Sparkline: () => import("@/components/Home/Sparkline"),
    CriptoCard: () => import("../Home/CriptoCard.vue")
  },
  data() {
    return {
      coins: [],
        slides: [
          '',
          '',
          '',
        ],
    };
  },

};
</script>

<style></style>