import { Todo } from '../model/todo.js'

export function addTodo(req, res) {
    if (!req.body.todo) return res.redirect('/')
    const todo = new Todo(
        Math.floor(Math.random() * 100000000),
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
