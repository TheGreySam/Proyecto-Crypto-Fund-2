import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mercado from "../views/Mercado.vue";
import Fondo from "../views/Fondo.vue";

import Store from '../store'

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name:"Home",
    component: Home,
    meta: {
      requiredLogin: false
    }
  },
  {
    path: "/mercado",
    name:"Mercado",
    component: Mercado,
    meta: {
      requiredLogin: false
    }
  },
  {
    path: "/fondo",
    name:"Fondo",
    component: Fondo,
   meta: {
     requiredLogin: true
   }
  },
  
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  
  if (to.meta.requiredLogin) {
    if (Store.state.session.currentUser) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})
export default router;
