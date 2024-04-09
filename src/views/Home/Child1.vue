<template>
  <div>
    <h3>Child1</h3>
    <div>
      <pre>{{ JSON.stringify(info) }}</pre>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeChild1View",
  computed: {
    ...mapState(["info"]),
  },
  mounted() {
    console.log(this.$store.state, this._log(this.info));
  },
};
</script>

<style></style>
