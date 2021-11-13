<template>
    <div>
        <section class="hero-section pb-5">
         <v-container>
        <v-row>
          <v-col cols="12">
            <div class="hero-text">
            <h2 class="text-h2 font-weight-bold">. . .</h2>
            <h2 class="text-h2 font-weight-bold pb-5">
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
      </section>
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
    background-color: #000;
    background-image: url("../assets/fondos.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
}
.hero-text{
  margin-top: 110px;
  text-align: center;
}

</style>