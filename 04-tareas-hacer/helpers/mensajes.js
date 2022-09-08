require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('============================='.green);
        console.log('       Select an option'.green);
        console.log('=============================\n'.green);

        console.log(`${ '1.'.cyan } Create task`);
        console.log(`${ '3.'.cyan } List completed tasks`);
        console.log(`${ '2.'.cyan } List tasks`);
        console.log(`${ '4.'.cyan } Listar pending tasks`);
        console.log(`${ '5.'.cyan } Complete task(s)`);
        console.log(`${ '6.'.cyan } Eliminate task`);
        console.log(`${ '0.'.cyan } Exit \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Select an option: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    });

}

const pause = () => {
    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPress ${ 'ENTER'.cyan } to continue\n`, (opt) => {
            readline.close();
            resolve();
        })
    });
}


module.exports = {
    mostrarMenu,
    pause
}

