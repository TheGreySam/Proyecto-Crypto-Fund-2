<template>
  <div>
    <v-app-bar app color="cforange">
      <v-toolbar-title class="pt-2">
        <router-link to="/" class="logo"
          ><img src="../../assets/Crypto Fund Logo.png" width="55" alt=""
        /></router-link>
      </v-toolbar-title>
     <v-spacer></v-spacer>
        <router-link to="/" class="btn about" >Home</router-link>
        <router-link to="/mercado" class="btn money">Mercado</router-link>
        <router-link to="/fondo" class="btn money">Fondos</router-link>  
        <v-spacer></v-spacer>

        <LoginCard />
      </v-app-bar>
    </div>
</template>

<script>
export default{
     components:{
        LoginCard: () => import("../Login/LoginCard.vue"),

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
.about, .money {
  margin-right: 10px;
}
</style>
