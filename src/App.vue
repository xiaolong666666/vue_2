<template>
  <error-boundary>
    <div id="app">
      <ul class="nav-wrapper">
        <li class="nav-item">
          <router-link :to="{ name: '首页' }">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/todo-list">TodoList</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/events">Events</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/component-high">组件高阶</router-link>
        </li>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </error-boundary>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  text-align: center;
}
.nav-wrapper {
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  .nav-item {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    line-height: 4rem;
  }
}
</style>
