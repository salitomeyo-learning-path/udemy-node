import colors from 'colors';
import { inquirerMenu, pauseMenu, readInput } from './helpers/inquirer.js';
import { Task } from './models/task.js';
import { Tasks } from './models/tasks.js';
// const { mostrarMenu, pause } = require('./helpers/mensajes');

const main = async() => {
    console.clear();

    let opt = '';
    const tasks = new Tasks();

    do {
        // opt = await mostrarMenu();
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const description = await readInput('Descripcion: ');
                tasks.createTask( description );
                break;
            case '2':
                console.log(tasks);
                break;  
            case '1':
                break; 
            
        }

        if(opt !== '0') await pauseMenu();
    } while (opt !== '0');
}

main();
