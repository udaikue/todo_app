new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodo: null,
    editNumber: 'editNumber'
  },

  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'))
      } catch(e) {
        localStorage.removeItem('todos')
      }
    }
  },

  methods: {
    addTodo() {
      if (!this.newTodo) {
        return
      }
      this.todos.push(this.newTodo)
      this.newTodo = ''

      if (!isNaN(this.editNumber)) {
        this.removeTodo(this.editNumber)
        this.editNumber = 'editNumber'
        location.reload()
      }
      else {
        this.saveTodo()
      }
    },

    removeTodo(x) {
      this.todos.splice(x, 1)
      this.saveTodo()
    },

    editTodo(x) {
      this.editNumber = x
      document.getElementById('target').value = this.todos[x]
    },

    saveTodo() {
      const parsed = JSON.stringify(this.todos)
      localStorage.setItem('todos', parsed)
    }
  }
})
