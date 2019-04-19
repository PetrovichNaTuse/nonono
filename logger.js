const db = require('./db')
console.log('\nПисун loggera')
module.exports = (module) => {
    return (/*...*/) => {
        let args = [module.filename].concat([].slice.call(arguments));
        //console.log.apply(console, [args[3]]);
        console.log(args);
    };
};
console.log('\nПисун loggera')
