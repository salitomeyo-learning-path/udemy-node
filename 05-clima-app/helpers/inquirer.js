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
                name: `${ '2.'.cyan } History`,
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

const listPlaces = async( places = [] ) => {
    // console.log(places)
    const choices = places.map( (place, i) => {
        
        const index = `${ i + 1 }`.cyan;
        
        return {
            value: place.id,
            name: `${ index } ${ place.name } `,
        }
    })

    choices.unshift({
        value: '0',
        name: `0. Cancel`.red
    })

    const deleteMenu = [
        {
            type: 'list',
            name:'idCity',
            message: 'Please select a place: ',
            choices
        }
    ]

    const { idCity } = await inquirer.prompt(deleteMenu);

    return idCity;
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
    listPlaces,
    confirmDelete,
    listTasksChecklist
}
