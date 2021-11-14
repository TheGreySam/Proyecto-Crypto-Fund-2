<template>
    <div>
        <section class="hero-section pb-5">
          <v-parallax dark src="../../assets/fondo3.jpg" height="600">
         <v-container>
        <v-row>
          <v-col cols="6">
            <div class="hero-text">
            <h1 class="text-h1 text-left font-weight-bold">. . .</h1>
            <h1 class="text-h1 text-left  font-weight-bold pb-5">
              CRYPTO FUND
            </h1>
            <h3 class="text-h5 text-left  font-weight-regular pb-5">
              Tus inversiones de criptomonedas suelen estar repartidas en varios
              Exchanges y Wallets ¿ Te gustaría administrar todas desde un mismo
              lugar ?
            </h3>
            <v-btn
              depressed
              x-large
              color="cforange"
              class="white--text hero-btn"
              @click.stop="$store.dispatch('toggleDrawer')"
            >
              REGÍSTRATE GRATIS
              <v-icon>mdi-arrow-right</v-icon>
              
            </v-btn>
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
          </v-parallax>
      </section>
    </div>
</template>

<script>
export default {
    name: 'Herosection',
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
.hero-btn{
  margin-top: 20px;
  border-radius: 0;
  color: #fff;
  background: -prefix-linear-gradient(left top, #464b96, #FA7921);
  background: linear-gradient(to bottom right, #464b96, #FA7921);
  font-size: 12px;
}
</style>