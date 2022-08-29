const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Es el ultimo numero que alcanzara la multiplicacion'
    })
    .check((argv, options) => {
        console.log(typeof argv.base);
        console.log(isNaN( argv.b ))
        if( isNaN( argv.b ) ) {
            throw 'La base debe ser un numero';
        } 
        return true;
    })
    .argv;

module.exports = argv;