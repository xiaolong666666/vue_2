<template>
  <div>
    <Child1 @customEvent="customEvent" ref="child1" />
    <Child2 @customEvent="customEvent" />
  </div>
</template>

<script>
import Child1 from "./Child1";
import Child2 from "./Child2";
export default {
  name: "EventHome",
  components: {
    Child1,
    Child2,
  },
  methods: {
    customEvent(info) {
      console.log("customEvent: ", info);
    },
  },
};
</script>

<style></style>
