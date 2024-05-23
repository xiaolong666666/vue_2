import axios from "axios";
import { LOADING, GET_ALBUMS, LOAD_MORE } from "./constants";

export default {
  getAlbums({ commit }) {
    commit(LOADING);
    axios
      .get("/mock/albums.json")
      .then((res) => {
        commit(GET_ALBUMS, res.data);
      })
      .catch(() => {
        commit(GET_ALBUMS, []);
      });
  },
  loadMore({ commit }) {
    commit(LOADING);
    axios
      .get("/mock/albums.json")
      .then((res) => {
        commit(LOAD_MORE, res.data);
      })
      .catch(() => {
        commit(LOAD_MORE, []);
      });
  },
};
