import Vue from "vue";
import Vuex from "vuex";
import Firebase from "firebase";
import Router from "../router";

import { criptoInfoModule } from "./modules/criptoInfo.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    wallet: null
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
    GET_COINS(state, wallet) {
      state.wallet = wallet;
    },
  },

  actions: {
    addCoin(state, wallet) {
      const { name, value, quantity } = wallet
      if (name.length > 1 && value.length > 1 && quantity.length > 2) {
      wallet.value = Number(wallet.value);
      wallet.quantity = Number(wallet.quantity);
      firebase
      .firestore()
      .collection("usuarios")
      .add(wallet);
    }
    //else {
      //let errores = ""
      //if (wallet.name == "") {
      //  errores = errores + "Nombre, "
      //}
      //if (wallet.value == "") {
      //  errores = errores + "Valor, "
      //}
      //if (wallet.quantity == "") {
      //  errores = errores + "Cantidad,"
      //}
      //alert("Los siguientes campos son requeridos: " + errores)
    //}
  },

    get_Coins({commit}) {
      Firebase
      .firestore()
      .collection("usuarios")
      .onSnapshot((docs) => {
        const wallet = [];
        docs.forEach((doc) => {
          wallet.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        commit("GET_COINS", wallet)
      });
    },

    deleteCoins(context, id) {
      Firebase
      .firestore()
      .collection("walletOne")
      .doc(id)
      .delete();
    },

    async editCoins(context, {id, name, value, quantity}) {
      await firebase
      .firestore()
      .collection("usuarios")
      .update({name});
      await firebase
      .firestore()
      .collection("usuarios")
      .update({value});
      await firebase
      .firestore()
      .collection("usuarios")
      .update({quantity});
    },

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
                  newUser.wallet = data.wallet;
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
  },
  modules: {
    criptoInfo: criptoInfoModule,
  },
});
