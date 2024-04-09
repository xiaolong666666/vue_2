import axios from "axios";

const user = {
  state: {
    user: {},
  },
  mutations: {
    getUser(state, { user }) {
      state.user = user;
    },
  },
  actions: {
    async getUser(context) {
      const users = await axios.get("/api/users");
      const user = users.data?.[0];
      context.commit("getUser", { user });
    },
  },
};

export default user;
