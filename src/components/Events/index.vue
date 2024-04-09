<template>
  <div>
    <Child1 @customEvent="customEvent" ref="child1">
      <template>
        <div>main</div>
      </template>
      <template v-slot:header>
        <header>HEADER</header>
      </template>
      <template v-slot:footer>
        <footer>FOOTER</footer>
      </template>
    </Child1>
    <hr />
    <Child2 @customEvent="customEvent">
      <template v-slot:main="{ slotMessage }">
        <main>{{ slotMessage }}</main>
      </template>
    </Child2>
    <hr />
    <!-- 监听子组件的生命周期 -->
    <Counter @hook:mounted="getCounterMounted"></Counter>
    <hr />
    <User></User>
  </div>
</template>

<script>
import Child1 from "./Child1";
import Child2 from "./Child2";
import Counter from "./Counter";
import User from "./User";
export default {
  name: "EventHome",
  components: {
    Child1,
    Child2,
    Counter,
    User,
  },
  provide: {
    name: "xl",
  },
  data() {
    return {
      view: null,
    };
  },
  methods: {
    customEvent(info) {
      console.log("customEvent: ", info);
    },
    getCounterMounted() {
      console.log("Counter mounted");
    },
  },
};
</script>

<style></style>
import { component } from "vue/types/umd";
