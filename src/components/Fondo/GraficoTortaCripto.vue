<template>
  <div id="app">
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card max-width="500" outlined elevation="2" class="pa-2">
            <v-card-title class="pa-6 pb-3">
              <h1 class="text-h5">Criptomonedas Agrupadas</h1>
            </v-card-title>
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
                      <v-card-text class="pa-5">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <!-- <input
                              type="range"
                              min="0"
                              max="100"
                              placeholder="coin"
                              :value="currentDataSet[i]"
                              @input="updateAmount($event.target.value, i)"
                            /> -->
                          </v-col>
                          <v-col cols="8" sm="2">
                            <input
                              class="demo"
                              type="text"
                              :value="chartData.labels[i]"
                              @input="updateName($event.target.value, i)"
                            />
                          </v-col>
                          <v-col cols="8" sm="2">
                            <h3>{{ currentDataSet[i] }} %</h3>
                          </v-col>

                          <v-col cols="8" sm="4">
                            <v-select
                              :items="coins"
                              label="Crypto"
                              dense
                              outlined
                            ></v-select>
                          </v-col>
                          <v-col> </v-col>

                          <v-col cols="2" sm="2">
                            <v-btn
                              elevation="2"
                              fab
                              class="btn-session"
                              @click="addExperience"
                            >
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="2" sm="2">
                            <v-btn
                              elevation="2"
                              fab
                              class="btn-session"
                              @click="remove(i)"
                            >
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
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
      coins: [],
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

  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data), console.log(data);
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
