<template>
    <div>
        <section>
      <v-parallax dark src="../../assets/bitcoin-img.jpeg" height="600">
        <v-row >
          <v-col class="text-left" cols="6">
        
              <v-card
    class="mx-auto card-parallax"
    max-width="450"
  >
    <v-card-text>
      <div>Crypto Fund</div>
      <p class="text-h4  title-card">
        Suscríbete para estar actualizado 
      </p>
     
      <div class="text--primary">
        Crea una cuenta para comenzar a utilizar la plataforma.
      </div>
    </v-card-text>
    <v-card-actions>
      
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
            
    </v-card-actions>
  </v-card>
            
          </v-col>
        </v-row>
      </v-parallax>
    </section>
  
    </div>
</template>

<script>
export default {
    name: 'Parallax',

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
.title-card{
 color: #252850;
}
.card-parallax{
    margin-top: 85px;
    padding: 30px;
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