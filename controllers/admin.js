import { where } from 'sequelize'
import Todo from '../model/todo.js'
import { generateTodoId } from '../utils/todos.js'

export function addTodo(req, res) {
    if (!req.body.todo) return res.redirect('/')
    Todo.create({ text: req.body.todo })
        .then((result) => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log('Failed to save todo! ', err)
        })
}

export function deleteTodo(req, res) {
    const todoId = req.params.id
    if (!todoId) return res.redirect('/')
    Todo.destroy({ where: { id: req.params.id } })
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(`Failed to delete todo id: ${req.params.id}`, err)
        })
}

export function completeTodo(req, res) {
    const todoId = req.params.id
    if (!todoId) return res.redirect('/')
    Todo.findByPk(req.params.id)
        .then((todo) => {
            todo.completed = true
            return todo.save()
        })
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log('Failed to update todo status! ', err)
        })
}

