<template>
  <div>
    <v-container>
      <section class="hero-section pb-5">
        <v-row>
          <v-col cols="6">
            <h1 class="text-h1 text-left font-weight-bold cfdarkblue--text">. . .</h1>
            <h1 class="title-home text-h1 text-left  font-weight-bold cfdarkblue--text pb-5">
              CRYTO FUND
            </h1>
            <h3 class="text-h4 text-left  font-weight-regular pb-5 subtitle-home">
              Tus inversiones de criptomonedas suelen estar repartidas en varios
              Exchanges y Wallets ¿ Te gustaría administrar todas desde un mismo
              lugar ?
            </h3>
            <v-btn
              text
              x-large
              class="btn-home"
              @click.stop="$store.dispatch('toggleDrawer')"
            >
              REGÍSTRATE GRATIS
            </v-btn>
          </v-col>
          <v-col cols="6" class="d-flex justify-center">
            <img
            class=""
              src="../../assets/Crypto Fund Logo.png"
              width="450"
              alt="logo"
            />
          </v-col>
        </v-row>
      </section>
    </v-container>
    <section>
      <v-parallax dark src="../../assets/bitcoin-img.jpeg" height="600">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h1 font-weight-bold pb-5 text-shadow">Sobre Nosotros</h1>
            <v-container>
              <h4 class="text-h4 font-weight-regular pt-5 mt-5 text-shadow">
                Somos una plataforma donde actuarás como tu propio administrador
                de inversiones del mundo de las criptomonedas. permitiéndote
                obtener valores y estadísticas sobre el manejo de tus fondos
                electrónicos de manera sencilla, organizada y eficiente.
              </h4>
            </v-container>
          </v-col>
        </v-row>
      </v-parallax>
    </section>
    <section>
      <Carousel />
    </section>
  </div>
</template>

<script>

export default {
  components: {
    Carousel: () => import("../Home/Carousel.vue"),
  },
};
</script>

<style scoped>
.title-home{
   animation-duration: 3s;
  animation-name: slidein; 
}
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
.text-shadow {
  text-shadow: 0px 3px #000000;
}
.btn-home{
  border: 2px solid #FA7921;
  border-radius: 0;
}
.btn-home:hover{
  background-color: #FA7921;
  color: #fff;
  transition: 1s all ease;
}

 
</style>
