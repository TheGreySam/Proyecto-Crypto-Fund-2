<template>
     <div>
        <v-app-bar app color="dark" dark>
            <img src="../../assets/Crypto Fund Logo.png" width="55" alt="">
            <v-toolbar-title>
                <router-link to="/" class="btn home">Crypto fund</router-link>
                </v-toolbar-title>
            <v-spacer></v-spacer>
           
            <router-link to="/about" class="btn about">Nosotros</router-link>
            <router-link to="/money" class="btn money">Fondos</router-link>
           
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
