<template>
  <div>
    <v-card>
      <v-container>
        <h1 class="text-h5 text-center py-5">Criptomonedas Agrupadas</h1>
        <div class="Chart">
          <DoughnutExample
            elevation="2"
            ref="skills_chart"
            :chart-data="chartData"
            :options="options"
            class="pb-5"
          >
          </DoughnutExample>
          <v-row v-for="(val, i) in currentDataSet" :key="i">
            <v-col cols="12" md="3">
              <v-select
                @change="convert"
                v-model="selected[i]"
                
                :items="coins"
                item-text="name"
                item-value="name"
                label="I have"
              ></v-select>
            </v-col>
            <v-col cols="12" md="3">
              <input
                class="demo"
                type="text"
                :value="currentDataSet[i]"
                @input="updateAmount($event.target.value, i)"
              />
            </v-col>
            <v-col cols="12" md="2">
              <h5 class="text-h5">{{ currentDataSet[i] }} %</h5>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn
                elevation="2"
                fab
                class="btn-session"
                @click="addExperience"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="2">
              <div class="mr-5">
                <v-btn elevation="2" fab class="btn-session" @click="remove(i)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card>
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
      selected: [],
      options,
      chartData: {
        labels: [""],
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
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false"
    );
    const data = await res.json();
    (this.coins = data), console.log(data);
  },

  methods: {
    convert(index) {
      this.chartData.labels.splice(index, 1, this.selected[0]);
      this.updateChart();
    },

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
      this.selected == ""
      this.chartData.labels.push(this.selected);
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
.btn-session {
  border-radius: 0;
  color: #fff;
  background: -prefix-linear-gradient(left top, #464b96, #fa7921);
  background: linear-gradient(to bottom right, #464b96, #fa7921);
  font-size: 12px;
}
</style>
