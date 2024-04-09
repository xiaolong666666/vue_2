<template>
  <div>
    <h3>Child1 组件</h3>
    <div v-permission="1">哈哈哈🤣</div>
    <div v-permission="2">呜呜呜😭</div>
  </div>
</template>

<script>
export default {
  name: "ComponentHighChild1",
  mounted() {
    console.log("ComponentHighChild1 mounted");
  },
};
</script>

<style></style>
