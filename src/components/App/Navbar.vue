<template>
<v-app-bar
class="header"
elevation="0"
>
  <v-app-bar-nav-icon>
    <router-link to="/" class="logo"
          ><img src="cryptoFundLogo3d.png" width="55" alt="logo"
        /></router-link>
  </v-app-bar-nav-icon>
    <v-toolbar-title class="text-shadow hidden-xs-and-down title-page">Crypto Fund</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
        <router-link to="/" class="btn home text-shadow">Inicio</router-link>
        <router-link to="/mercado" class="btn money text-shadow">Mercado</router-link>
        <router-link to="/fondo" class="btn graf text-shadow" v-show="$store.state.currentUser">Fondos</router-link>
  

        <template v-if="$store.state.currentUser">
          <SingOutLogin />
        </template>
        <template v-else>
          <LoginCard />
        </template> 
</v-app-bar>
</template>

<script>
export default{
     components:{
        LoginCard: () => import("../Login/LoginCard.vue"),
        SingOutLogin: () => import("../Login/SingOutLogin.vue")
    },
}
</script>
<style scoped>
.header{
  position: absolute;
  color: #fff;
  z-index: 1;
  background-color: transparent !important;
}
.logo{
   border-bottom: none !important; 
}
.router-link-exact-active{
    border-bottom: 1px solid #000;
}
.btn {
  color: #fff;
  text-decoration: none;
}
.btn:hover{
    opacity: 0.60;
}
.home, .money, .graf{
  margin-right: 15px;
}
.home, .title-page{
  display: none;
}
.text-shadow {
  text-shadow: 0px 3px #000000;
}
@media screen and (min-width: 768px){
  .home, .title-page{
  display: block;
}
}
</style>
