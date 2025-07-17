import Todo from '../model/todo.js';
import { getCompletedTodos, getPendingTodos } from '../utils/todos.js';
import { completeTodo } from './admin.js';

export function getIndex(req, res) {
    getCompletedTodos((err1, completedTodos) => {
        if (err1) completedTodos = 0;

        getPendingTodos((err2, pendingTodos) => {
            if (err2) pendingTodos = 0;

            Todo.getAllTodos((err3, todos) => {
                if (err3) {
                    console.error('Error fetching todos:', err3);
                    return res.status(500).send('Internal Server Error');
                }

                res.render('index', {
                    pageTitle: 'کارهای روزمره',
                    todos,
                    completedTodos,
                    pendingTodos,
                });
            });
        });
    });
}
