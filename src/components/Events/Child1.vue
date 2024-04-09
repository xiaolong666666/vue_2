<template>
  <div>
    <h2>Child1</h2>
    <slot name="header"></slot>
    <slot />
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: "EventChild1",
  methods: {
    receiveInfo(info) {
      console.log("child1 receiveInfo: ", info);
    },
  },
  created() {
    this.$on("child1Event", this.receiveInfo);
  },
  mounted() {
    this.$emit("customEvent", "child1 => parent info");
    this.$parent.$emit("child2Event", "child1 => child2 info");
  },
};
</script>

<style></style>
