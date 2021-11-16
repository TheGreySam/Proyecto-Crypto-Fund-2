<template>
  <main class="v-main">
    <div class="v-main__wrap">
      <MainSection />

    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  components: {
    MainSection: () => import("../components/Home/Main.vue"),
    
    
  },
};
</script>
