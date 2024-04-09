<template>
  <div>
    <h2>动态组件</h2>
    <button @click="onSwitch">switch</button>
    <keep-alive>
      <component :is="view" :key="view"></component>
    </keep-alive>
    <xl-dialog />
  </div>
</template>

<script>
import Child1 from "./Child1";
import Child2 from "./Child2";

export default {
  name: "ComponentHigh",
  components: {
    Child1,
    Child2,
  },
  data() {
    return {
      view: null,
    };
  },
  methods: {
    onSwitch() {
      this.view = this.view === "Child1" ? "Child2" : "Child1";
    },
  },
};
</script>

<style></style>
