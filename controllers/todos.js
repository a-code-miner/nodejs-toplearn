import { Todo } from '../model/todo.js';

export function getIndex(req, res) {
    Todo.getAllTodos((err, todos) => {
        if (err) {
            console.error('Error fetching todos:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.render('index', {
            pageTitle: 'کارهای روزمره',
            todos,
        });
    });
}
