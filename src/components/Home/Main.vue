<template>
  <div>
      <HeroSection />
      <AboutHome />
      <Carousel />
      <GetStarted />
      <Parallax />
  </div>
</template>

<script>

export default {
  components: {
    AboutHome: () => import("../Home/AboutHome.vue"),
    HeroSection: () => import("../Home/HeroSection.vue"),
    Carousel: () => import("../Home/Carousel.vue"),
    GetStarted: () => import("../Home/GetStarted.vue"),
    Parallax: () => import("../Home/Parallax.vue"),
  },
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 0px 3px #000000;
}
</style>
