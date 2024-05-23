<template>
  <div>
    <header>专辑💽</header>
    <ul style="text-align: left">
      <li v-for="item in this.albums" :key="item.id">{{ item.title }}</li>
    </ul>
    <div v-if="loading">Loading...</div>
    <button @click="loadMore">加载更多</button>
    <footer>Footer</footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Albums-Home",
  computed: {
    ...mapGetters(["loading", "albums"]),
  },
  methods: {
    ...mapActions(["getAlbums", "loadMore"]),
  },
  mounted() {
    this.getAlbums();
  },
};
</script>

<style></style>
