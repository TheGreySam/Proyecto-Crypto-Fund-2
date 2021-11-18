<template>
 <div>
        <v-app-bar  prominent src="../assets/fondos.jpg" height="450px">
          <template v-slot:img="{ props }">
            <v-img
            class="img-hero"
              v-bind="props"
              gradient="to top right, rgba(143,101,59,.7), rgba(70,70,69,.7), rgba(6,5,2,.7), rgba(143,101,59,.7)"
            ></v-img>
          </template>
           <v-container>
        <v-row>
          <v-col cols="12">
            <div class="hero-text">
            <h2 class="text-h2 font-weight-bold white--text">. . .</h2>
            <h2 class="text-h2 font-weight-bold pb-5 text-title white--text">
              CRYPTO FUND
            </h2>
            <h3 class="text-h5 font-weight-regular white--text pb-5">
              {{ msg }}
            </h3>
             <v-icon class="white--text">mdi-arrow-down</v-icon>
            </div>
          </v-col>
        </v-row>
         </v-container>
        </v-app-bar>
      
    
        <!-- <section class="hero-section pb-5">
         <v-container>
        <v-row>
          <v-col cols="12">
            <div class="hero-text">
            <h2 class="text-h2 font-weight-bold">. . .</h2>
            <h2 class="text-h2 font-weight-bold pb-5 text-title">
              CRYPTO FUND
            </h2>
            <h3 class="text-h5 font-weight-regular pb-5">
              {{ msg }}
            </h3>
             <v-icon class="white--text">mdi-arrow-down</v-icon>
            </div>
          </v-col>
        </v-row>
         </v-container>
      </section> -->
    </div>
</template>

<script>

export default {
    name: 'Herosection',
     props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.hero-section{
    position: relative;
    color: #fff;
}
.hero-text{
  margin-top: 110px;
  text-align: center;
}


</style>