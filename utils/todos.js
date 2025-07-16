import fs from 'fs'
import path from 'path'

import { v4 as uuidv4 } from 'uuid'

import { rootDir } from './path.js'

const filePath = path.join(rootDir(), 'data', 'todos.json')

export function getTodos(callback) {
    fs.readFile(filePath, 'utf-8', (err, fileContent) => {
        if (err) {
            console.log('Error reading todos file:', err)
            return callback(err, [])
        } else {
            try {
                const todos = JSON.parse(fileContent)
                if (!Array.isArray(todos)) {
                    console.log('Todos file is not an array, returning empty array')
                    return callback(null, [])
                }
                return callback(null, todos)
            } catch (parseError) {
                console.log('Error parsing todos file:', parseError)
                return callback(parseError, [])
            }
        }
    })
}

export function saveTodos(todos, callback) {
    fs.writeFile(filePath, JSON.stringify(todos, null, 2), (err) => {
        if (err) {
            console.log('Error saving todos file:', err)
            return callback(err)
        } else {
            console.log('Todos saved successfully!')
            return callback(null)
        }
    })
}

export function generateTodoId() {
    // return Math.floor(Math.random() * 100000000);
    return uuidv4()
}

export function getCompletedTodos(callback) {
    getTodos((err, todos) => {
        if (err) return callback(err, [])
        return callback(null, todos.filter(todo => todo.completed === true).length)
    })
}

export function getPendingTodos(callback) {
    getTodos((err, todos) => {
        if (err) return callback(err, [])
        return callback(null, todos.filter(todo => todo.completed === false).length)
    })
}
