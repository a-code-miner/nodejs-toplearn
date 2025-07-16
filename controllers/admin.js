import { Todo } from '../model/todo.js'
import { generateTodoId } from '../utils/todos.js'

export function addTodo(req, res) {
    if (!req.body.todo) return res.redirect('/')
    const todo = new Todo(
        generateTodoId(),
        req.body.todo
    )
    todo.save((err) => {
        if (!err) {
            console.log('Todo saved successfully!')
            res.redirect('/')
        } else {
            console.error('Error saving todo:', err)
            res.status(500).send('Internal Server Error')
        }
    })
}

export function deleteTodo(req, res) {
    const todoId = req.params.id
    if (!todoId) return res.redirect('/')

    Todo.deleteTodoById(todoId, (err) => {
        if (!err) {
            console.log('Todo deleted successfully!')
            res.redirect('/')
        } else {
            console.error('Error deleting todo:', err)
            res.status(500).send('Internal Server Error')
        }
    })
}

export function completeTodo(req, res) {
    const todoId = req.params.id
    if (!todoId) return res.redirect('/')

    Todo.completeTodoById(todoId, (err) => {
        if (!err) {
            console.log('Todo marked as completed successfully!')
            res.redirect('/')
        } else {
            console.error('Error completing todo:', err)
            res.status(500).send('Internal Server Error')
        }
    })
}

