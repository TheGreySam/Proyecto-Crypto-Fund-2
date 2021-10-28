import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mercado from "../views/Mercado.vue";
import Fondo from "../views/Fondo.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name:"Home",
    component: Home,
  },
  {
    path: "/mercado",
    name:"Mercado",
    component: Mercado,
  },
  {
    path: "/fondo",
    name:"Fondo",
    component: Fondo,
  },
  
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
