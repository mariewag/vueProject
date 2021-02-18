const todoApp = new Vue({
    el: '#todoApp',
    data: {
        title: 'Todo List',
        newTodo: '',
        todos: [],
    },
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';
        },
        deleteTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        }
    }
});