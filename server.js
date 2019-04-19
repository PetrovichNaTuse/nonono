const log = require('./logger') (module);
const db = require('./db');
db.connect();  //кэшируется и становится доступен в user

console.log('\nПисун servera')
const user = require('./user');
//  require('./global');

function run() {
    const vasya = new user('Вася');
    const petya = new user('Петя');
    //const petya = new User('Петя');

    petya.Hello(vasya);
    log('Run succesful');
};

if(module.parent) {
    exports.run = run;
    console.log('exports.run');
} else {
    run();
    console.log('run()');
};
console.log('\nПисун servera')
