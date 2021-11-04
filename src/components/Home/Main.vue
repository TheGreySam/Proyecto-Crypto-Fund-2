<template>
  <div>
    <v-container>
      <section class="hero-section pb-5">
        <v-row no-gutters>
          <v-col cols="12" sm="12" lg="8" xl="7">
            <h1 class="text-h2 text--h1 text-lg-left text-center font-weight-bold cfdarkblue--text">
              . . .
            </h1>
            <h1
              class="text-h2 text-md-h1 text-lg-left text-center font-weight-bold cfdarkblue--text pb-5"
            >
              CRYTO FUND
            </h1>
            <h3 class="text-h6 text-md-h4 text-lg-left text-centerfont-weight-regular pb-5">
              Tus inversiones de criptomonedas suelen estar repartidas en varios
              Exchanges y Wallets ¿ Te gustaría administrar todas desde un mismo
              lugar ?
            </h3>
            <v-btn
              depressed
              x-large
              color="cforange"
              class="white--text d-lg-flex"
              @click.stop="$store.dispatch('toggleDrawer')"
            >
              REGÍSTRATE GRATIS
            </v-btn>
          </v-col>
          <v-col
            lg="4"
            xl="5"
            class="d-flex justify-center hidden-sm-and-down"
          >
            <img
              class="hidden-md-and-down"
              src="../../assets/Crypto Fund Logo.png"
              width="500"
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
            <h1 class="text-h3 text-md-h1 font-weight-bold pb-5 text-shadow">
              Sobre Nosotros
            </h1>
            <v-container>
              <h4 class="text-h6 text-md-h4 font-weight-regular pt-5 mt-5 text-shadow">
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
.text-shadow {
  text-shadow: 0px 3px #000000;
}
</style>
