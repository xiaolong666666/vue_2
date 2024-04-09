<template>
  <div>
    <h2>Counter</h2>
    <p>{{ this.$store.state.counter.num }}</p>
    <p>{{ this.$store.getters.getCounterNum }}</p>
    <button @click="add(2)">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: "EventCounter",
  methods: {
    add(count) {
      this.$store.dispatch("add", { count });
    },
    sub() {
      this.$store.dispatch("sub");
    },
  },
};
</script>

<style></style>
