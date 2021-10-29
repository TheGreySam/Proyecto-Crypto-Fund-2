import Vue from "vue";
import Vuex from "vuex";
import { criptoInfoModule } from "./modules/criptoInfo.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  mutations: {
    SET_CURRENT_USER(state, newUser) {
      state.currentUser = newUser;
    },
    UNLOG_CURRENT_USER(state) {
      state.currentUser = null;
    },
  },
  actions: {
    defineCurrentUser(context, user) {
      context.commit("SET_CURRENT_USER", user);
    },
    unlogCurrentUser(context, user) {
      context.commit("UNLOG_CURRENT_USER", user);
    },
  },
  modules: 
  { 
    criptoInfo: criptoInfoModule
  },
});
