<template>
<div>
  <v-footer
    dark
    padless
  >
  
    <v-card
      class="flex"
      flat
      tile
    >
     
    <v-card-text class="footer-fondo" white--text>
     
        <div class="footer my-4 text-center">
        <v-row>
            <v-col cols="12" sm="4" md="4" lg="4">
                <div class="px-8">
                    <img class="img-footer" src="../../assets/bit.webp" width="120" height="120" alt="imgen">
                    <p>Como empresa permitimos visualizar información sobre los valores de las criptomonedas en tiempo real.</p>
                </div>
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4">
                <div class="px-8">
                    <img class="img-footer" src="../../assets/cryptoFundLogo3d.png" width="120" height="120"  alt="imgen">
                    <p>Crypto Fund, permite realizar distintas operaciones con los datos proporcionados por el usuario.</p>
                </div>
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4">
                <div class="px-8">
                    <img class="img-footer" src="../../assets/cripto.jpeg" width="120" height="120" alt="imgen">
                    <p>Crypto Fund, es una plataforma donde actuarás como tu propio administrador de inversiones del mundo Crypto.</p>
                </div>
            </v-col>
        </v-row>
        </div>  
         
    </v-card-text>
     
      <v-card-text class="py-2 white--text text-center">
       <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="copi white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Copyright Crypto Fund</strong>
      </v-card-text>
    </v-card>

  </v-footer>
</div>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style scoped>
.footer{
  color: #fff;
}
.footer-fondo{
  background-image: url("../../assets/fondow.jpeg");
}
.img-footer{
    border-radius: 50%;
}
.copi{
  padding-bottom: 65px;
}
</style>