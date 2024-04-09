<template>
  <div v-teleport="body" class="dialog-overlay" v-if="visible">
    <div class="dialog-container">
      <div class="dialog-header">
        title
        <button @click="close">close</button>
      </div>
      <div class="dialog-content">
        <slot></slot>
      </div>
      <div class="dialog-footer">
        <button @click="close">cancel</button>
        <button @click="confirm">confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "xl-dialog",
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    confirm() {
      this.$emit("confirm");
      this.close();
    },
  },
};
</script>

<style>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.dialog-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
</style>
