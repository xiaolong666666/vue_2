<template>
  <div>
    <h2>User</h2>
    <v-wait for="my list is to load">
      <template slot="waiting">
        <div class="loadingClass"></div>
      </template>
      <div>
        {{ JSON.stringify(user, ["id", "name", "username", "email"]) }}
      </div>
    </v-wait>
  </div>
</template>

<script>
export default {
  name: "EventUser",
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    async getUser() {
      this.$wait.start("my list is to load");
      await this.$store.dispatch("getUser");
      this.$wait.end("my list is to load");
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style>
.loadingClass {
  width: 20px;
  height: 20px;
  margin: 0 auto;
  line-height: 20px;
  border: 2px dashed #999;
  border-radius: 50%;
  animation: loadingRotate 2s linear infinite;
}

@keyframes loadingRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
