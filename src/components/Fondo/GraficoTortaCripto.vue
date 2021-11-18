<template>
  <div id="app">
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card max-width="500" outlined elevation="2" class="pa-2">
            
            <div class="Chart">
              <DoughnutExample
                elevation="2"
                ref="skills_chart"
                :chart-data="chartData"
                :options="options"
              >
              </DoughnutExample>
            </div>
            <v-btn block outlined color="cforange" @click="grafico">
              Agregar
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DoughnutExample from "@/components/DoughnutExample";
import randomColor from "randomcolor";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    animateRotate: false,
  },
};

export default {
  name: "App",
  components: { DoughnutExample },
  data() {
    return {
      coins: [],
      options,
      totalTotal: [],
      totalDefinitivo: 0,
      dataa: [],

      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: [randomColor()],
            data: [],
          },
        ],
      },
    };
  },
 

  methods: {
    updateChart() {
      this.$refs.skills_chart.update();
    },
    grafico() {
       this.chartData.datasets[0].data = []
       this.chartData.datasets[0].backgroundColor = []
       this.chartData.labels = []

      this.$store.state.data.forEach((coin) => {
        let name = coin.name;
        let valor = coin.price;
        let cantidad = coin.valueCoin;
        let total = valor * cantidad;
        console.log(total);
        this.chartData.labels.push(name);
        this.chartData.datasets[0].data.push(total);
        this.chartData.datasets[0].backgroundColor.push(randomColor());
        this.updateChart();
        console.log(this.chartData.datasets[0].data);
        this.dataa = [];
        this.totalTotal = []
      });
    },
    
  },
  mounted: function() {
    this.$nextTick(this.grafico());
  },

  
};
</script>

<style scoped>
.btn-session {
  border-radius: 0;
  color: #fff;
  background: -prefix-linear-gradient(left top, #464b96, #fa7921);
  background: linear-gradient(to bottom right, #464b96, #fa7921);
  font-size: 12px;
  margin-left: 20px;
}
</style>
