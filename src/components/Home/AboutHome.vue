<template>
  <div>
    <section class="about-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" lg="7" class="d-flex justify-center">
            <div class="hero-img">
              <img
                class="img-about1 mx-auto"
                src="../../assets/about1.png"
                alt="logo"
              />
              <img
                class="img-about2 mx-auto hidden-sm-and-down"
                src="../../assets/about2.png"
                alt="logo"
              />
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="5">
            <div class="about-text">
              <h2 class="text-h2 font-weight-bold pb-5 about-title">
                Sobre Nosotros
              </h2>
              <h3 class="text-h5 text-left font-weight-regularpb-5">
                Somos una plataforma donde actuarás como tu propio administrador
                de inversiones del mundo de las criptomonedas, permitiéndote
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
  name: "Abouthome",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.img-about1 {
  width: 100%;
}
.img-about2 {
  width: 100%;
}
.about-title {
  text-align: center;
  color: #252850;
}
@media screen and (min-width: 1024px){
 .about-section {
   margin-top: 100px;
 }
 .img-about1 {
  position: relative;
  width: 400px
  }
  .img-about2 {
  position: relative;
     bottom: 95px;
    left: 41px;
    width: 400px;
  }
  .about-text {
  margin-top: 100px;
 }
 .about-title {
  text-align: left;
}
}
@media screen and (min-width: 1366px){
  .img-about2 {
    position: relative;
     bottom: 100px;
    left: 160px;
    width: 400px;
  } 
  
}
</style>
