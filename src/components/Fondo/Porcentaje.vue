<template>
  <v-card class="mx-1 mb-1 pa-2 mt-5">
    <v-card-title class="pa-6 pb-3">
      <form @submit.prevent="calculate">
        <div>
          <label>points given</label>
          <input class="demo" elevation="2" v-model.number="pointsGiven" />
        </div>
        <div>
          <label>points possible</label>
          <input class="demo" v-model.number="pointsPossible" />
        </div>
        <v-btn 
        type="submit"
        elevation="2"
        large
        color="primary"
        >
        calculate
        </v-btn>
      </form>
      <div>percentage: {{ percentage }}%</div>
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      pointsGiven: 0,
      pointsPossible: 0,
      percentage: 0,
    };
  },
  computed: {
    formValid() {
      const { pointsGiven, pointsPossible } = this;
      return +pointsGiven >= 0 && +pointsPossible > 0;
    },
  },
  methods: {
    calculate() {
      if (!this.formValid) {
        return;
      }
      const { pointsGiven, pointsPossible } = this;
      this.percentage = (pointsGiven / pointsPossible) * 100;
    },
  },
};
</script>

<style>
.demo {
 
  border: 1px solid rgb(0, 0, 0);
  border-radius: 2px;
 
 
}
</style>