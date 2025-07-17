import Todo from '../model/todo.js';
import { getCompletedTodos, getPendingTodos } from '../utils/todos.js';
import { completeTodo } from './admin.js';

export function getIndex(req, res) {
    Todo.count({ where: { completed: true } })
        .then((completedTodos) => {
            Todo.findAll()
                .then((todos) => {
                    res.render('index', {
                        pageTitle: 'کارهای روزمره',
                        todos,
                        completedTodos,
                        pendingTodos: todos.length - completedTodos,
                    });
                })
        })
}
