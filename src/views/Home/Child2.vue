<template>
  <div>
    <h3>Child2 !</h3>
    <div v-if="loading" :class="{ loadingClass: loading }"></div>
    <ul v-else>
      <li v-for="user in userList" :key="user.id">
        {{ JSON.stringify(user, ["id", "name", "username", "emial"]) }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeChild2View",
  data() {
    return {
      loading: true,
      userList: [],
    };
  },
  beforeCreate() {
    console.log("Child2 beforeCreate", this.$route.params, this.$route.query);
    const { grade } = this.$route.query;

    axios.get("/mock/user.json", { params: { grade } });
    axios.get(`/api/users`).then((res) => {
      this.userList = res.data;
      this.loading = false;
    });
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
