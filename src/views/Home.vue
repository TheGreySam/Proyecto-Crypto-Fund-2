<template>
  <main class="v-main" style="padding: 56px 0px 0px">
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
