<template>
  <div>
    <h2>Child2</h2>
  </div>
</template>

<script>
export default {
  name: "EventChild2",
  methods: {
    receiveInfo(info) {
      console.log("child2 receiveInfo: ", info);
    },
  },
  created() {
    this.$parent.$on("child2Event", this.receiveInfo);
  },
  mounted() {
    this.$emit("customEvent", "child2 => parent info");
    this.$parent.$refs.child1.$emit("child1Event", "child2 => child1 info");
  },
};
</script>

<style></style>
