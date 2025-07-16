import { getTodos, saveTodos, generateTodoId } from "../utils/todos.js"

export class Todo {
    constructor(id, text, completed = false) {
        this.id = id
        this.text = text
        this.completed = completed
    }

    save(callback) {
        getTodos((err, todos) => {
            if (err) return callback(err)
            todos.push(this)
            saveTodos(todos, (err) => {
                if (err) callback(err)
                else callback(null)
            })
        })
    }

    static getAllTodos(callback) {
        getTodos((err, todos) => {
            if (err) callback(err, [])
            else callback(null, todos)
        })
    }

    static deleteTodoById(id, callback) {
        getTodos((err, todos) => {
            if (err) return callback(err)
            saveTodos(todos.filter(todo => todo.id !== Number(id)), err => {
                if (err) callback(err)
                else callback(null)
            })
        })
    }

    static completeTodoById(id, callback) {
        getTodos((err, todos) => {
            if (err) return callback(err)
            const todoIndex = todos.findIndex(todo => todo.id === Number(id))
            if (todoIndex === -1) {
                return callback(new Error('Todo not found'))
            } else {
                const todo = todos[todoIndex]
                todo.completed = true
                todos[todoIndex] = todo
                saveTodos(todos, (err) => {
                    if (err) callback(err)
                    else callback(null)
                })
            }
        })
    }
}



