import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const news = {
  state: {
    loading: true,
    albums: [],
  },
  getters,
  mutations,
  actions,
};

export default news;
