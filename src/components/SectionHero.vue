<template>
    <div>
        <section class="hero-section pb-5">
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

.text-title  {
  background: linear-gradient(-45deg, #ffffff, #ee7752, #e73c7e, #23a6d5, #23d5ab, #fff);
  -webkit-background-clip: text;
   background-size: 400% 400%;
  color: transparent; 
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  } 
}
</style>