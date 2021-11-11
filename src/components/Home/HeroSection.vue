<template>
    <div>
        <section class="hero-section pb-5">
         <v-container>
        <v-row>
          <v-col cols="6">
            <div class="hero-text">
            <h1 class="text-h1 text-left font-weight-bold">. . .</h1>
            <h1 class="text-h1 text-left  font-weight-bold pb-5">
              CRYTO FUND
            </h1>
            <h3 class="text-h5 text-left  font-weight-regular pb-5">
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
              src="https://cdn.discordapp.com/attachments/900147313304027266/907404002667409459/cryptoFundLogo3d.png"
              width="500"
              alt="logo"
            />
            </div>
          </v-col>
        </v-row>
         </v-container>
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
    background-image: url("../../assets/fondo3.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
}
.hero-text, .hero-img{
  margin-top: 110px;
}

</style>