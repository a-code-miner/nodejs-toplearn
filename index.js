

const { default: chalk } = require('chalk');
// const logger = require('./logger')
const { text, greetings } = require('./logger')



console.log(module)

// logger.text
// logger.sayHi('Mortaza')

console.log(chalk.blue(text));
console.log(greetings(chalk.red('Mortaza')))

