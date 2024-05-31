<template>
  <div>
    <h3>Child1</h3>
    <input type="text" v-focus />
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
