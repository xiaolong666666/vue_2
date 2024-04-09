<template>
  <div>
    <h2>Child2</h2>
    <slot name="main" :slotMessage="slotMessage" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "EventChild2",
  inject: ["name"],
  data() {
    return {
      slotMessage: "child2_slotMessage",
    };
  },
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
