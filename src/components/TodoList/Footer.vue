<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ todoNum }}</strong>
      <span>{{ todoNum | itemLeftFilter }}</span>
    </span>
    <ul class="filters">
      <li v-for="view in this.viewList" :key="view.label">
        <a
          href="javascript:void(0)"
          @click="onChangeView(view.value)"
          v-text="view.label"
          :class="{
            selected:
              view.value === 'all'
                ? isAllView
                : view.value === 'active'
                ? isActiveView
                : isCompletedView,
          }"
        ></a>
      </li>
    </ul>
    <button @click="onClearCompleted" class="clear-completed">
      Clear Completed
    </button>
  </footer>
</template>

<script>
export default {
  name: "todo-list-footer",
  data() {
    return {
      viewList: [
        { value: "all", label: "All" },
        { value: "active", label: "Active" },
        { value: "completed", label: "Completed" },
      ],
    };
  },
  computed: {
    todoNum() {
      return this.$parent.todoList.filter((t) => !t.done).length;
    },
    isAllView() {
      return this.$parent.view === "all";
    },
    isActiveView() {
      return this.$parent.view === "active";
    },
    isCompletedView() {
      return this.$parent.view === "completed";
    },
  },
  filters: {
    itemLeftFilter(v) {
      return ` item${v > 1 ? "s" : ""} left`;
    },
  },
  methods: {
    onChangeView(v) {
      this.$parent.view = v;
    },
    onClearCompleted() {
      this.$parent.todoList = this.$parent.todoList.filter((t) => !t.done);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/components/TodoList/index.less";
</style>
