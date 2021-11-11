<template>
    <div class="section-started">
        <v-container >
            <h2 class="title-section text-h2 font-weight-bold pb-5">Es fácil iniciarse</h2>
       
        <v-stepper v-model="e1">
            <v-stepper-header>
            <v-stepper-step
                color="cfdarkblue lighten-1"
                :complete="e1 > 1"
                step="1"
            >
            Regístrate
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                color="cfdarkblue lighten-1"
                :complete="e1 > 2"
                step="2"
            >
                Explora la plataforma
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step   color="cfdarkblue lighten-1" step="3">
                Empieza a operar
            </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
            <v-stepper-content step="1">
                <v-card
                class="mb-12"
                color="cforange lighten-1"
                height="200px"
                >
                <p class="text-started font-weight-bold">Crea una cuenta usando tu dirección de email</p>
                </v-card>

                <v-btn
                    class="btn-started"
                @click="e1 = 2"
                >
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
                <v-card
                class="mb-12"
                color="cforange lighten-1"
                height="200px"
                >
                <p class="text-started font-weight-bold">Comprueba lo que es invertir sin poner en riesgo tu dinero</p>
                </v-card>

                <v-btn
                    class="btn-started"
                @click="e1 = 3"
                >

                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
                <v-card
                class="mb-12"
                color="cforange lighten-1"
                height="200px"
                >
                <p class="text-started font-weight-bold">Haz buen uso de tus estrategias de trading</p>
                </v-card>

                <v-btn
                class="btn-started"
                @click="e1 = 1"
                >

                <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-stepper-content>
            </v-stepper-items>
            </v-stepper>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'ProyectoCryptoFundCopiGetstarted',

    data() {
        return {
              e1: 1,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.title-section{
  text-align: center;
  color: #252850;
  margin-bottom: 40px;
}
.text-started{
    color: #fff;
    text-align: center;
    font-size: 26px;
    padding-top: 80px;
}
.btn-started{
  margin-top: 20px;
  border-radius: 0;
  color: #fff;
  background: -prefix-linear-gradient(left top, #464b96, #FA7921);
  background: linear-gradient(to bottom right, #464b96, #FA7921);
  font-size: 12px;
}
.section-started{
    margin: 80px 0;
}
</style>