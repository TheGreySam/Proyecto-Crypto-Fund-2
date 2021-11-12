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
