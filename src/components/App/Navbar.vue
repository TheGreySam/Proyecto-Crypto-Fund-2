<template>
  <div>
    <v-app-bar app color="cfdarkblue" dark>
      <v-toolbar-title class="pt-2">
        <router-link to="/" class="btn home"
          ><img src="../../assets/Crypto Fund Logo.png" width="55" alt=""
        /></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

           <router-link to="/" class="btn about">Home</router-link>
           <router-link to="/mercado" class="btn money">Mercado</router-link>
            <router-link to="/fondo" class="btn money">Fondos</router-link>
           
      
           
            <v-spacer></v-spacer>
            <a>   
                <router-link to="/login" class="btn login">Inicia sesión</router-link>
                <v-icon>mdi-login</v-icon>
            </a>
             <a>   
                <router-link to="/login" class="btn login">Registro</router-link>
                <v-icon>mdi-login</v-icon>
            </a>
        </v-app-bar>
    </div>
</template>

      <v-spacer></v-spacer>
      <a>
        <router-link to="/login" class="btn login">Inicia sesión</router-link>
        <v-icon>mdi-login</v-icon>
      </a>
      <a>
        <router-link to="/login" class="btn login">Registro</router-link>
        <v-icon>mdi-login</v-icon>
      </a>
    </v-app-bar>
  </div>
</template>

<script>
export default{
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
.btn {
  color: #fff;
  text-decoration: none;
}
.about {
  margin-right: 10px;
}
</style>
