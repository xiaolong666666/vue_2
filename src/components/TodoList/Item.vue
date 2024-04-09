<template>
  <li :class="{ completed: todo.done, editing: isEditing }">
    <div class="view">
      <input type="checkbox" v-model="editedTodo.done" class="toggle" />
      <label @dblclick="toEdit">{{ todo.value }}</label>
      <button @click="remove" class="destroy"></button>
    </div>
    <input
      type="text"
      v-model="editedTodo.value"
      v-focus
      @blur="onEditOk"
      @keyup.enter="onEditOk"
      @keyup.esc="onEditEsc"
      class="edit"
    />
  </li>
</template>

<script>
export default {
  name: "todo-list-item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    idx: Number,
  },
  data() {
    return {
      editedTodo: {},
      temp: "",
      isEditing: false,
    };
  },
  methods: {
    toEdit() {
      this.isEditing = true;
      this.temp = this.todo.value;
    },
    onEditOk() {
      this.isEditing = false;
      this.temp = "";
    },
    onEditEsc() {
      this.$parent.todoList[this.idx].value = this.temp; // 改变元素对象对应的堆地址内容，如果元素为基本类型则不可使用此方法
      this.onEditOk();
    },
    remove() {
      this.$parent.todoList.splice(this.idx, 1);
    },
  },
  directives: {
    focus(el) {
      el.focus();
    },
  },
  created() {
    this.editedTodo = this.todo;
  },
  beforeDestroy() {
    this.editedTodo = {};
  },
};
</script>

<style lang="less" scoped>
@import "~@/components/TodoList/index.less";
</style>
