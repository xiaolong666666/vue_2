<template>
  <section class="todoapp">
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
    <section class="main">
      <input type="checkbox" v-model="toggleAllFlag" class="toggle-all" />
      <label for="toggle-all" class="toggle-all-label"></label>
      <ul class="todo-list">
        <Item
          v-for="(todo, idx) in this.todoListFilter"
          :key="todo.id"
          :todo="todo"
          :idx="idx"
        />
      </ul>
    </section>
    <Footer />
  </section>
</template>

<script>
import Item from "./Item";
import Footer from "./Footer";
import "./index.css";

export default {
  name: "todo-app",
  components: { Item, Footer },
  data() {
    return {
      newTodo: "",
      todoList: [],
      view: "all",
    };
  },
  computed: {
    todoListFilter() {
      switch (this.view) {
        case "all":
          return this.todoList;
        case "active":
          return this.todoList.filter((t) => !t.done);
        case "completed":
          return this.todoList.filter((t) => t.done);
        default:
          return this.todoList;
      }
    },
    toggleAllFlag: {
      get() {
        return false;
      },
      set(v) {
        this.todoList.forEach((t) => {
          t.done = v;
        });
      },
    },
  },
  methods: {
    addTodo() {
      if (!this.newTodo) return;
      const todo = Object.create(null);

      todo.id = Date.now();
      todo.value = this.newTodo;
      todo.done = false;

      this.todoList.unshift(todo);
      this.newTodo = "";
    },
  },
};
</script>
