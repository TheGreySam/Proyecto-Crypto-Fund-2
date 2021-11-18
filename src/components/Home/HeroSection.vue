<template>
    <div>
        <section class="hero-section pb-5">
          <v-parallax dark src="../../assets/fondo3.jpg" height="600">
         <v-container>
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <div class="hero-text">
            <h1 class=" text-left text-title font-weight-bold">. . .</h1>
            <h1 class=" text-left text-title font-weight-bold pb-5">
              CRYPTO FUND
            </h1>
            <h3 class=" text-left text-subtitle font-weight-regular pb-5">
              Tus inversiones de criptomonedas suelen estar repartidas en varios
              Exchanges y Wallets ¿ Te gustaría administrar todas desde un mismo
              lugar ?
            </h3>
           
            <RegistratitonCard />
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="6" class="d-flex justify-center ">
            <div class="hero-img">
            <img
            class="hidden-sm-and-down hero-logo"
              src="../../assets/cryptoFundLogo3d.png"
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
.hero-logo{
  @keyframes movimiento-lateral {
      from {
          left: 0px;
      }
      to {
          left: 100px;
      }
    }   
      animation-name: movimiento-lateral;
      animation-duration: 7s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      width: 100px;
      background-color: transparent;
      color: #fff;
      position: relative;
      padding: 2px;
}

 .text-title, .text-subtitle {
   text-shadow: 0px 3px #000000;
 }
 .text-title{
   font-size: 3rem;
   
 }
 .text-subtitle{
   font-size: 22px;
 }
@media screen and (min-width: 1024px){
  .hero-logo{
    width: 400px;
  } 
  .text-title{
   font-size: 3.75rem;
 }
}
@media screen and (min-width: 1366px){
  .text-title{
   font-size: 4.75rem;
 } 
 .hero-section{
    position: relative;
    color: #fff;
    background-color: #000;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
}
.hero-text, .hero-img{
  margin-top: 10px;
}
}


</style>