console.log('Starting app')

/* access modules: */
// file system
const fs = require('fs');

// operating system
const os = require('os');
// console.log('os', os);

const notes = require('./notes.js')

let user = os.userInfo();
// console.log('user', user)

let res = notes.addNote();
// console.log('res', res);
console.log('Result:', notes.add(9, -2));

// create a file and append a message to it with template strings
fs.appendFileSync('data/greetings.txt', `Hello ${user.username}! You are ${notes.age}`)