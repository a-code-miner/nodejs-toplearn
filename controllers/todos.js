import Todo from '../model/todo.js';
import { getCompletedTodos, getPendingTodos } from '../utils/todos.js';
import { completeTodo } from './admin.js';

export async function getIndex(req, res) {
    const completedTodos = await Todo.count({ where: { completed: true } })
    const todos = await Todo.findAll()

    res.render('index', {
        pageTitle: 'کارهای روزمره',
        todos,
        completedTodos,
        pendingTodos: todos.length - completedTodos,
    });
}
