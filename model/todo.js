import fs from 'fs'
import path from 'path'

import { rootDir } from '../utils/path.js'

const filePath = path.join(rootDir(), 'data', 'todos.json')

export class Todo {
    constructor(id, text, completed = false) {
        this.id = id
        this.text = text
        this.completed = completed
    }

    save(callback) {
        fs.readFile(filePath, 'utf8', (err, fileContent) => {
            let todos = []

            if (!err && fileContent) {
                try {
                    todos = JSON.parse(fileContent)
                    if (!Array.isArray(todos)) {
                        todos = [] // اگر JSON یک آرایه نبود، از اول آرایه بساز
                    }
                } catch (e) {
                    // اگر JSON خراب بود
                    todos = []
                }
            }

            todos.push(this)

            fs.writeFile(filePath, JSON.stringify(todos, null, 2), (err) => {
                if (err) callback(err)
                else callback(null)
            });
        })
    }

    static getAllTodos(callback) {
        fs.readFile(filePath, 'utf8', (err, fileContent) => {
            if (err) {
                callback(err, null)
            } else {
                try {
                    const todos = JSON.parse(fileContent)
                    if (!Array.isArray(todos)) {
                        callback(null, []) // اگر JSON یک آرایه نبود، آرایه خالی برگردان
                    } else {
                        callback(null, todos)
                    }
                } catch (e) {
                    callback(e, null) // اگر JSON خراب بود
                }
            }
        })
    }

}

