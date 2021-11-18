<template>
  <div>
    <v-card class="mx-1 mb-1 mt-5 p-2">
      <v-container>
          <v-card-title class="pa-3 pb-1">
               <p v-if="this.$store.state.data">Balance total: {{this.$store.state.data}}</p>
          
            </v-card-title>
        <v-simple-table class="mb-5">
          <template v-slot:default>
              <thead>
            <tr>
              <th v-for="title in titles" :key="title" class="text-subtitle-1">
                {{ title }}
              </th>
            </tr>
          </thead>
            <tbody>
              <tr data
                v-for="(data, index) in $store.state.data"
                :key="index"
              >
                <td class="text-subtitle-1">{{ data.name }}</td>
                <td class="text-uppercase text-subtitle-1 font-italic">
                  {{ data.price }}
                </td>
                <td class="text-uppercase text-subtitle-1 font-italic">
                  {{ data.valueCoin }}
                </td>
                <td class="text-uppercase text-subtitle-1 font-italic">
                  {{ data.price * data.valueCoin }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
    data() {
    return {
      titles: ["Nombre", "Precio", "Cantidad", "Total"],
      
    };
  },
}
</script>