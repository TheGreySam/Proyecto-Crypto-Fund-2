<template>
    <div>
    <section class="about-section">
        <v-container>
            <v-row>
             <v-col cols="7" class="d-flex justify-center">
                <div class="hero-img">
                <img
                class="img-about1"
                src="../../assets/about1.png"
                width="400"
                alt="logo"
                />
                <img
                class="img-about2"
                src="../../assets/about2.png"
                width="400px"
                alt="logo"
                />
                </div>
            </v-col>
            <v-col cols="5">
                <div class="about-text">
                <h2 class="text-h2 font-weight-bold pb-5 text-shadow about-title">Sobre Nosotros</h2>
                <h3 class="text-h5 text-left  font-weight-regular pb-5">
                Somos una plataforma donde actuarás como tu propio administrador
                de inversiones del mundo de las criptomonedas. permitiéndote
                obtener valores y estadísticas sobre el manejo de tus fondos
                electrónicos de manera sencilla, organizada y eficiente.
                </h3>
                </div>
            </v-col>
            </v-row>
        </v-container>
    </section>
    </div>
</template>

<script>
export default {
    name: 'Abouthome',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.about-section{
    margin-top: 100px;
}
.img-about1{
position: relative;
}
.img-about2{
    position: relative;
    bottom: 200px;
    left: 100px;
}
.about-text{
    margin-top: 100px; 
}
.about-title{
 color: #252850;
}
</style>