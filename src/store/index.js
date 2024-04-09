import Vue from "vue";
import Vuex from "vuex";
import info from "./info";
import counter from "./counter";
import user from "./user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { info, counter, user },
});

export default store;
