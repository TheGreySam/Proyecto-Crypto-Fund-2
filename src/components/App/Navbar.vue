<template>
     <div>
        <v-app-bar app color="dark" dark>
            <img src="../../assets/Crypto Fund Logo.png" width="55" alt="">
            <v-toolbar-title>
                <router-link to="/" class="btn home">Crypto fund</router-link>
                </v-toolbar-title>
            <v-spacer></v-spacer>

            transition-group name="fade" tag="div">
        <template v-if="$store.state.session.user">
          <v-btn
            v-for="(link, $index) in links"
            :key="$index"
            text
            :to="link.to"
          >
            
            {{ link.text }}
          </v-btn>
        </template>
      </transition-group>
           
            <v-spacer></v-spacer>
            <a>   
                <router-link to="/login" class="btn login">Inicia sesión</router-link>
                <v-icon>mdi-login</v-icon>
            </a>
             <a>   
                <router-link to="/login" class="btn login" :color="">Registro</router-link>
                <v-icon>mdi-login</v-icon>
            </a>
        </v-app-bar>
    </div>
</template>


<script>
export default{
    computed: {
        links: [
            {
                text: "Home",
                to: "/"
            },
            {
                text: "Mercado",
                to: "/mercado"
            }
        ],
        if (this.$store.state.getters["session/isAdmin"]) {
            links.push({
                text: "Fondos",
                to: "/fondo"
            })

    }

    }
    

}
</script>
<style scoped>
.btn{
    color: #fff;
    text-decoration: none;
}
.about{
    margin-right: 10px;
}
</style>
