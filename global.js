const phrases = require('./user/ru');

function User(name) {
    this.name = name;
};

User.prototype.hello = (who) => {
    console.log(phrases.Hello + ', ' + who.name);
};
console.log('global.js is required');

global.User = User;
