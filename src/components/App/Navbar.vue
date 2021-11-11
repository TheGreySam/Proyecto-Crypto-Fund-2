<template>
<v-app-bar
class="header"
elevation="0"
>
  <v-app-bar-nav-icon>
    <router-link to="/" class="logo"
          ><img src="https://cdn.discordapp.com/attachments/900147313304027266/907404002667409459/cryptoFundLogo3d.png" width="55" alt=""
        /></router-link>
  </v-app-bar-nav-icon>
    <v-toolbar-title>Crypto Fund</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
        <router-link to="/" class="btn about" >Inicio</router-link>
        <router-link to="/mercado" class="btn money">Mercado</router-link>
        <router-link to="/fondo" class="btn graf">Fondos</router-link>
  

        <template v-if="$store.state['session/currentUser']">
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
    computed: {
        links() {
            
        
        const links = [
            {
                text: "Home",
                to: "/"
            },
            {
                text: "Mercado",
                to: "/mercado"
            }
        ]
    //     if (this.$store.state.getters["session/isAdmin"]) {
    //         links.push({
    //             text: "Fondos",
    //             to: "/fondo"
    //         })

    // }
    return links
        }
    }
    

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
.about, .money, .graf{
  margin-right: 15px;
}

</style>
