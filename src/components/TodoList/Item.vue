<template>
  <li :class="{ completed: todo.done, editing: todo === this.editedTodo }">
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
  name: "todo-item",
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
    };
  },
  methods: {
    toEdit() {
      this.editedTodo = this.todo;
      this.temp = this.todo.value;
    },
    onEditOk() {
      this.editedTodo = {};
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
};
</script>
