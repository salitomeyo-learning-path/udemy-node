import { readDB, saveDB } from './helpers/fileController.js';
import { confirmDelete, inquirerMenu, listTasksDelete, pauseMenu, readInput } from './helpers/inquirer.js';
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
                tasks.printToConsole();
                break;  
            case '3':
                tasks.listCompleted();
                break; 
            case '4':
                tasks.listPending();
                break;
            case '5':
                break;
            case '6':
                const id = await listTasksDelete( tasks.getList );

                if ( id === '0' ) break;

                const confirmation = confirmDelete('Are you sure you want to delete?');
                if (confirmation) tasks.deleteTask( id );
                break;
                
        }

        saveDB( tasks.getList );

        if(opt !== '0') await pauseMenu();
    } while (opt !== '0');
}

main();
