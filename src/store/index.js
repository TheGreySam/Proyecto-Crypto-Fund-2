import Vue from "vue";
import Vuex from "vuex";
import Firebase from "firebase";
import Router from "../router";

import { criptoInfoModule } from "./modules/criptoInfo.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },

  getters: {
    userRol(state) {
      if (state.currentUser.rol) 
      return state.currentUser.rol 
    },
  },

  mutations: {
    SET_CURRENT_USER(state, newUser) {
      state.currentUser = newUser;
    },
    SET_USER(state, newUser) {
      state.currentUser = newUser;
    },
  },

  actions: {
    defineCurrentUser(context, user) {
      context.commit("SET_CURRENT_USER", user);
    },
    subscribeToAuthStateChange(context) {
      Firebase.auth().onAuthStateChanged((currentUser) => {
        if (currentUser) {
          Firebase.firestore()
            .collection("usuarios")
            .get()
            .then((documents) => {
              const newUser = {
                email: currentUser.email,
              };
              documents.forEach((document) => {
                const data = document.data();
                if (data.email === currentUser.email) {
                  newUser.rol = data.rol;
                  newUser.id = document.id;
                  newUser.fullName = data.fullName;
                  newUser.walletOne = data.walletOne;
                }
              });
              context.commit("SET_USER", { ...newUser });
            });
        } else {
          context.commit("SET_USER", null);
        }
      });
    },
    async signOut() {
      await Firebase.auth().signOut();
    },

    //Agregar juguetes a firestore
    addMoneda(state, walletOne) {
      const { Código, name, Stock, currentPrice } = walletOne
      if (Código.length > 1 && name.length > 1 && Stock.length > 1 && currentPrice.length > 2) {
        walletOne.currentPrice = Number(walletOne.currentPrice);
        walletOne.Cantidad = Number(walletOne.Cantidad);
        firebase
          .firestore()
          .collection("usuarios")
          .add(walletOne);
      }
      else {
       // let errores = ""
        //if (walletOne.Código == "") {
        //  errores = errores + "Código, "
        //}
        //if (walletOne.name == "") {
        //  errores = errores + "Nombre, "
        //}
        //if (walletOne.Cantidad == "") {
        //  errores = errores + "Cantidad, "
        //}
        //if (walletOne.currentPrice == "") {
        //  errores = errores + "Precio"
        //}
        //alert("Los siguientes campos son requeridos: " + errores)
      }
    },
    
    
  },
  
  modules: {
    criptoInfo: criptoInfoModule,
  },
});
