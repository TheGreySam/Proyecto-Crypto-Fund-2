<template>
  <v-sheet
    class="v-sheet--offset mx-auto"
    color="cfwhite"
    elevation="0"
    max-width="calc(100% - 32px)"
  >
    <v-sparkline
      :labels="labels"
      :value="value"
      color="red"
      line-width="1"
      padding="16"
    ></v-sparkline>
  </v-sheet>
  
  
</template>
<script>
export default {
  data: () => ({
    
    value: [200, 675, 410, 390, 310, 460, 250, 280],
      coins: [],
  }),

};
</script>
