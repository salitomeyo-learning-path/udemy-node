const fs = require('fs');
const colors = require('colors');

console.clear();

let multiplicationTable = '';
let consoleTable = '';
const printMultiplication = ( base, finalNumber ) => {
    for (i=0; i<=finalNumber; i++) {
        multiplicationTable += `${base} x ${i} = ${i*base}\n`;
        consoleTable += `${base}` + " x ".cyan + `${i}` + ' = '.brightYellow + `${i*base}\n`;
    }
}

const crearMultiplicationFile = async(base, printList, finalNumber) => {
    try {
        printMultiplication(base, finalNumber);
        if( printList ) console.log(consoleTable);
        await fs.writeFileSync(`./salida/tabla-${base}.txt`, multiplicationTable);
        return `tabla-${base}.txt`;
    } catch (error) {
        return error.red
    }
}

module.exports = {
    crearMultiplicationFile
}