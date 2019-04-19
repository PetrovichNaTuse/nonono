const db = require('../db');
const log = require('../logger')(module);
//db.connect(); // доступен из кэша в server.js

function User(name) {
    this.name = name;
};

User.prototype.Hello = (who) => {
    log(db.getPhrase('Hello') + ', ' + who.name);
 //   log('Hello Name')
};

console.log('user.js is required');

module.exports = User;
exports.name = () => {
    return name;
};
