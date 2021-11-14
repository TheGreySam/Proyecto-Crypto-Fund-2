<template>
    <div>
        <section class="hero-section pb-5">
          <v-parallax dark src="../../assets/fondo3.jpg" height="600">
         <v-container>
        <v-row>
          <v-col cols="6">
            <div class="hero-text">
            <h1 class="text-h1 text-left text-shadow font-weight-bold">. . .</h1>
            <h1 class="text-h1 text-left text-shadow font-weight-bold pb-5">
              CRYPTO FUND
            </h1>
            <h3 class="text-h5 text-left text-shadow font-weight-regular pb-5">
              Tus inversiones de criptomonedas suelen estar repartidas en varios
              Exchanges y Wallets ¿ Te gustaría administrar todas desde un mismo
              lugar ?
            </h3>
           
            <RegistratitonCard />
            </div>
          </v-col>
          <v-col cols="6" class="d-flex justify-center">
            <div class="hero-img">
            <img
              src="../../assets/cryptoFundLogo3d.png"
              width="500"
              alt="logo"
            />
            </div>
          </v-col>
        </v-row>
         </v-container>
          </v-parallax>
      </section>
    </div>
</template>

<script>
export default {
    name: 'Herosection',
    components: {
      RegistratitonCard: () => import("../Login/RegistrationCard.vue")
    }
};
</script>

<style lang="scss" scoped>
.hero-section{
    position: relative;
    color: #fff;
    background-color: #000;
  //  background-image: url("../../assets/fondo3.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
}
.hero-text, .hero-img{
  margin-top: 10px;
}
.text-shadow {
  text-shadow: 0px 3px #000000;
}

</style>