const counter = {
  state: {
    num: 0,
  },
  getters: {
    getCounterNum(state) {
      return state.num;
    },
  },
  mutations: {
    add(state, { count }) {
      state.num = state.num + count;
    },
    sub(state) {
      state.num--;
    },
  },
  actions: {
    add(context, payload) {
      context.commit("add", payload);
    },
    sub(context) {
      context.commit("sub");
    },
  },
};

export default counter;
