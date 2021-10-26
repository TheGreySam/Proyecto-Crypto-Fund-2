<template>
  <v-app>
      <Navbar />
      <v-parallax
      height="100%"
    dark
    src="assets\Crypto Fund Logo.png"
    contain
  >
  <br>
  <v-main>
     <transition mode="out-in" name="fade">
          <router-view  />
        </transition>
    
  </v-main>
   <v-container>
        <LoginCard />
        <RegistrationCard />
      </v-container>
  
  <br>
      
        
      </v-parallax>
      <Footer/>
    </v-app>
  
       

</template>

<script>
export default {
  name: "App",

  components: {
    Navbar: () => import("./components/App/Navbar"),
    Footer: () => import("./components/App/Footer.vue"),
    LoginCard: () => import("./components/Login/LoginCard.vue"),
    RegistrationCard: () => import("./components/Login/RegistrationCard.vue")

  }
}


</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
