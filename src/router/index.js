import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mercado from "../views/Mercado.vue";
import Fondo from "../views/Fondo.vue";

import Firebase from "firebase";

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
//    meta: {
//      requiredLogin: 'true'
//    }
  },
  
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//router.beforeEach((to, from, next) => {
//  const currentUser = Firebase.auth().currentUser;
//  const requiredLogin = to.meta.requiredLogin; 

//  console.log({ currentUser })

//  if(requiredLogin) {
//    if(currentUser) {
//      next();
//      console.log("true");
//    } else {
//      next({ name: "Home"});
//      console.log("false")
//    }
//  } else {
//    next()
//  }


 
//})

export default router;
