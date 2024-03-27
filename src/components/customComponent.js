import Vue from 'vue'

Vue.component('todo-item', {
    template: `
        <div class="todo-item">
            <input type="checkbox" v-model="completed">
            <label>{{ text }}</label>
            <button @click="remove">删除</button>
        </div>
    `,
    props: {
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        remove() {
            this.$emit('remove')
        }
    }
})