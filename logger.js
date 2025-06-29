const text = 'Hi, how are you?';

const sayHi = (name) => {
    console.log(`Hello, ${name}!`);
}

// module.exports = {
//     text,
//     sayHi
// }

// module.exports.text = text;
// module.exports.greetings = sayHi;

// module.exports = {
//     text,
//     greetings: sayHi
// }

exports.text = text;
exports.greetings = sayHi
