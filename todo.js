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

      if (!isNaN(this.editNumber)) {
        this.todos[this.editNumber] = this.newTodo
        this.editNumber = 'editNumber'
      }
      else {
        this.todos.push(this.newTodo)
      }
      this.saveTodo()
      this.newTodo = ''
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
      const saveJson = JSON.stringify(this.todos)
      localStorage.setItem('todos', saveJson)
    }
  }
})
