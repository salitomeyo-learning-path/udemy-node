const { crearMultiplicationFile } = require("./helpers/multiplicate");
const argv = require("./config/yargs");

// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');

// crearMultiplicationFile(base)
//     .then(console.log)
//     .catch(console.warn);

// console.log(process.argv);
// console.log( argv );

// console.log( 'base: yargs ', argv.base );

crearMultiplicationFile(argv.base, argv.list, argv.hasta)
    .then( nombreArchivo => console.log(nombreArchivo.green, 'creado'.green));
    // .then(console.log)
    // .catch(console.warn);


