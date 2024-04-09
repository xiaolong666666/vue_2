<template>
  <header class="header">
    <h1>todos</h1>
    <input
      type="text"
      placeholder="What need to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
      class="new-todo"
    />
  </header>
</template>

<script>
export default {
  name: "todo-list-header",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (!this.newTodo) return;
      const todo = Object.create(null);

      todo.id = Date.now();
      todo.value = this.newTodo;
      todo.done = false;

      this.$parent.todoList.unshift(todo);
      this.newTodo = "";
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/components/TodoList/index.less";
</style>
