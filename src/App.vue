<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <TicketPrice />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    Navbar: () => import("./components/App/Navbar"),
    Footer: () => import("./components/App/Footer.vue"),
    TicketPrice: () => import("./components/App/TicketPrice.vue")
  },
  mounted() {
     this.$store.dispatch("criptoInfo/subscribe")
    this.$store.dispatch("subscribeToAuthStateChange");
    // window.addEventListener("beforeunload", function(event) {
    //              
    // });
  },
}
</script>

<style>
* {
  font-family: "Rubik", sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
