<template>
  <div>
    <div>Welcome to Vue!</div>
    <ul>
      <li>
        <router-link to="/home/child1">Child1</router-link>
      </li>
      <li>
        <router-link to="/home/child2/10001/edit?grade=6">Child2</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  // 在进入路由之前执行
  beforeRouteEnter(to, from, next) {
    // 不可访问 this
    next();
  },
  // 在路由更新之前执行
  beforeRouteUpdate(to, from, next) {
    next();
  },
  // 在路由离开之前执行
  beforeRouteLeave(to, from, next) {
    const answer = confirm("当前页面尚未保存，确认离开？");
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style></style>
