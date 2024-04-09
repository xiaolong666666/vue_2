<template>
  <section class="todoapp">
    <Header></Header>
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
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "@/components/TodoList/Header";
import Item from "@/components/TodoList/Item";
import Footer from "@/components/TodoList/Footer";

export default {
  name: "TodoList",
  components: {
    Header,
    Item,
    Footer,
  },
  data() {
    return {
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
};
</script>

<style lang="less" scoped>
@import "~@/components/TodoList/index.less";
</style>
