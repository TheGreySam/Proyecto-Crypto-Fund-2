<template>
<v-container>
  <div>
  <CriptoCard />
  <br>
  <v-carousel cycle :show-arrows="false" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      contain
    ></v-carousel-item>
  </v-carousel>
</div>
<br>
</v-container>

  
</template>

<script>
  export default {
      components: {
          CriptoCard: () =>
          import("@/components/Home/CriptoCard.vue")

      },
    data () {
      return {
        items: [
          
        ],
      }
    },
  }
</script>