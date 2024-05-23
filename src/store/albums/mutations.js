import { LOADING, GET_ALBUMS, LOAD_MORE } from "./constants";

export default {
  [LOADING](state) {
    state.loading = true;
  },
  [GET_ALBUMS](state, payload) {
    state.albums = payload;
    state.loading = false;
  },
  [LOAD_MORE](state, payload) {
    state.albums = [...state.albums, ...payload];
    state.loading = false;
  },
};
