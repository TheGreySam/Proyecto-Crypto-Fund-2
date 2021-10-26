import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        cfwhite: "#FFFFFF",
        cfgray: "#A3A3A3",
        cfdarkblue: "#252850",
        cfdarkgray: "#35374B",
        cforange: "#FA7921",
      },
    },
  },
});

export default vuetify;