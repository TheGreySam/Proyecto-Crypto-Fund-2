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
    GET_COINS(state, walletOne) {
      state.walletOne = walletOne;
    },
  },

  actions: {
    addCoin(state, walletOne) {
      const { name, value, quantity } = walletOne
      walletOne.value = Number(walletOne.value);
      walletOne.quantity = Number(walletOne.quantity);
      Firebase
      .firestore()
      .collection("usuarios")
      .add(walletOne);
    },

    get_Coins({commit}) {
      Firebase
      .firestore()
      .collection("usuarios")
      .onSnapshot((docs) => {
        const walletOne = [];
        docs.forEach((doc) => {
          walletOne.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        commit("GET_COINS", walletOne)
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
  },
  modules: {
    criptoInfo: criptoInfoModule,
  },
});
