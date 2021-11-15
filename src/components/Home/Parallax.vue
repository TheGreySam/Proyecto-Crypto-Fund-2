<template>
    <div>
        <section>
      <v-parallax dark src="../../assets/bitcoin-img.jpeg" height="600">
        <v-row >
          <v-col class="text-left" cols="12" md="6" lg="6">
        
          <v-card
          class="mx-auto card-parallax"
         
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
            <v-card-actions class="btn-card">
        
              <RegistrationCard />
                    
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
    components: {
      RegistrationCard: () => import("../Login/RegistrationCard.vue")
    },
};
</script>

<style lang="scss" scoped>
.title-card{
 color: #252850;
}
.card-parallax{
 max-width: 450px;
 padding: 30px;
 margin-top: 50px;
}
@media screen and (min-width: 1366px){
.card-parallax{
    margin-top: 85px;
    padding: 30px;
}
}

</style>