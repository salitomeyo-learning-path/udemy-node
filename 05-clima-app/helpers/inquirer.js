import inquirer from 'inquirer';

import colors from 'colors';


const menuOpts = [
    {
        type: 'list',
        name:'option',
        message: 'What do you wish to do?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.cyan } Search city`,
            },
            {
                value: 2,
                name: `${ '2.'.cyan } Historial`,
            },
            {
                value: 0,
                name: `${ '0.'.cyan } Exit \n`,
            }
        ]
    }
]

const pauseOpt = [
    {
        type: 'input',
        name:'pause',
        message: `\nPress ${ 'ENTER'.cyan } to continue\n`,
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('============================='.cyan);
    console.log('       Select an option'.cyan);
    console.log('=============================\n'.cyan);

    const { option } = await inquirer.prompt(menuOpts);

    return option;
}

const pauseMenu = async() => {
    
    const { pause } = await inquirer.prompt(pauseOpt);

    return pause;
}

const readInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate( value ){
                if ( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]

    const { description } = await inquirer.prompt(question);

    return description;
}

const listTasksDelete = async( tasks = [] ) => {
    const choices = tasks.map( (task, i) => {
        
        const index = `${ i + 1 }`.cyan;
        
        return {
            value: task.id,
            name: `${ index } ${ task.description } `,
        }
    })

    choices.unshift({
        value: '0',
        name: `0. Cancel`.red
    })

    const deleteMenu = [
        {
            type: 'list',
            name:'option',
            message: 'Which task would you like to eliminate?',
            choices
        }
    ]

    const { option } = await inquirer.prompt(deleteMenu);

    return option;
}

const confirmDelete = async( message ) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);

    return ok;
}

const listTasksChecklist = async( tasks = [] ) => {
    const choices = tasks.map( (task, i) => {
        
        const index = `${ i + 1 }`.cyan;
        
        return {
            value: task.id,
            name: `${ index } ${ task.description } `,
            checked: ( task.completedDate ) ? true : false
        }
    })

    const question = [
        {
            type: 'checkbox',
            name:'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(question);

    return ids;
}


export{
    inquirerMenu,
    pauseMenu,
    readInput,
    listTasksDelete,
    confirmDelete,
    listTasksChecklist
}
