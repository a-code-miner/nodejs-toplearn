const fs = require('fs')
const os = require('os')



// Uncomment the following lines to test file operations
// fs.writeFile('text.txt', 'Hello, this is a test file written by Node.JS!', (err) => {
//     if (err) throw err
//     console.log('File has been saved!')
// })

// fs.readFile('text.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// fs.appendFile('text.txt', '\nThis is an appended text by Node.JS!', (err) => {
//     if (err) throw err
//     console.log('Text has been appended!')
// })

// fs.rename('text.txt', 'RenamedTextFile.txt', (err) => {
//     if (err) throw err
//     console.log('File has been renamed!')
// })

// fs.writeFileSync('text.txt', 'Hello, this is a test file written by Node.JS!')

// fs.readFileSync('text.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// fs.unlink('RenamedTextFile.txt', (err) => {
//     if (err) throw err
//     console.log('File has been deleted!')
// })


// Uncomment the following lines to test OS operations
console.log(os.arch())
console.log(os.platform())
console.log(os.userInfo())
console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.uptime())
console.log(os.type())


console.log('first')
console.log('second')


