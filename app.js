// const fs = require('fs')

// const persons = [
//     { id: 1, name: 'John', age: 14 },
//     { id: 2, name: 'Jane', age: 22 },
//     { id: 3, name: 'Doe', age: 30 },
// ]

// // fs.writeFileSync('persons.json', JSON.stringify(persons))

// const data = fs.readFileSync('persons.json')
// const personsFromFile = JSON.parse(data.toString())
// console.log('personsFromFile = ', personsFromFile)


console.log(process.argv)

const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding a new person...')
// } else if (command === 'remove') {
//     console.log('Removing a person...')
// } else {
//     console.log('Unknown command. Please use "add" or "remove".')
// }

switch (command) {
    case 'add':
        console.log('Adding a new person...')
        break
    case 'remove':
        console.log('Removing a person...')
        break
    default:
        console.log('Unknown command. Please use "add" or "remove".')
        break
}

