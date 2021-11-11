<template>
  <div id="app">
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card
            max-width="344"
            outlined
            elevation="2"
            class="pa-5"
            color="cfdarkblue"
          >
            <v-btn
              elevation="2"
              text
              depressed
              class="btn-session"
              @click="addExperience"
            >
              Añadir Moneda
            </v-btn>

            <div class="Chart">
              <DoughnutExample
              elevation="2"
                ref="skills_chart"
                :chart-data="chartData"
                :options="options"
              >
              </DoughnutExample>
              <v-layout row wrap>
                <v-flex>
                  <div v-for="(val, i) in currentDataSet" :key="i">
                    <v-row no-gutters>
                      <v-col cols="12" sm="6" md="8">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          placeholder="coin"
                          :value="currentDataSet[i]"
                          @input="updateAmount($event.target.value, i)"
                        />
                        <h3 class="white--text">{{ currentDataSet[i] }} %</h3>
                        <input
                          class="white--text"
                          type="text"
                          :value="chartData.labels[i]"
                          @input="updateName($event.target.value, i)"
                        />
                        <v-btn
                          elevation="2"
                          text
                          depressed
                          class="btn-session"
                          @click="remove(i)"
                          >Eliminar
                        </v-btn>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col> </v-col>
                      <v-spacer></v-spacer>
                      <v-col cols="2"> </v-col>
                      <v-col cols="2"> </v-col>
                    </v-row>

                    <v-spacer></v-spacer>
                  </div>
                </v-flex>
              </v-layout>
            </div>
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
      options,
      chartData: {
        labels: ["Coin"],
        datasets: [
          {
            backgroundColor: [randomColor()],
            data: [1],
          },
        ],
      },
    };
  },
  computed: {
    currentDataSet() {
      return this.chartData.datasets[0].data;
    },
  },
  methods: {
    updateChart() {
      this.$refs.skills_chart.update();
    },
    updateAmount(amount, index) {
      this.chartData.datasets[0].data.splice(index, 1, amount);
      this.updateChart();
    },
    updateName(text, index) {
      this.chartData.labels.splice(index, 1, text);
      this.updateChart();
    },
    addExperience() {
      const currentDataset = this.chartData.datasets[0];
      this.chartData.labels.push(`${currentDataset.data.length + 1} coin`);
      currentDataset.data.push(0);
      currentDataset.backgroundColor.push(randomColor());
      this.updateChart();
    },
    remove(index) {
      const currentDataset = this.chartData.datasets[0];
      currentDataset.data.splice(index, 1);
      this.chartData.labels.splice(index, 1);
      currentDataset.backgroundColor.splice(index, 1);
      this.updateChart();
    },
    updateAmountMinus100() {
      this.chartData.datasets[0].data.splice(index, 1, amount);
      this.updateChart();
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.btn-session {
  border-radius: 0;
  color: #fff;
  background: -prefix-linear-gradient(left top, #464b96, #fa7921);
  background: linear-gradient(to bottom right, #464b96, #fa7921);
  font-size: 12px;
  margin-left: 20px;
}
</style>
