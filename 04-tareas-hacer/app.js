import colors from 'colors';
import { readDB, saveDB } from './helpers/fileController.js';
import { inquirerMenu, pauseMenu, readInput } from './helpers/inquirer.js';
import { Task } from './models/task.js';
import { Tasks } from './models/tasks.js';
// const { mostrarMenu, pause } = require('./helpers/mensajes');

const main = async() => {
    console.clear();

    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();
    if ( tasksDB ) tasks.createTasksFromList( tasksDB );

    do {
        // opt = await mostrarMenu();
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const description = await readInput('Descripcion: ');
                tasks.createTask( description );
                break;
            case '2':
                console.log( tasks.getList );
                break;  
            case '1':
                break; 
            
        }

        saveDB( tasks.getList );

        if(opt !== '0') await pauseMenu();
    } while (opt !== '0');
}

main();
