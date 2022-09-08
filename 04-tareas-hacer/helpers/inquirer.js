import inquirer from 'inquirer';

import colors from 'colors';


const menuOpts = [
    {
        type: 'list',
        name:'option',
        message: 'What do you wish to do?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.cyan } Create task`,
            },
            {
                value: '2',
                name: `${ '2.'.cyan } List tasks`,
            },
            {
                value: '3',
                name: `${ '3.'.cyan } List completed tasks`,
            },
            {
                value: '4',
                name: `${ '4.'.cyan } Listar pending tasks`,
            },
            {
                value: '5',
                name: `${ '5.'.cyan } Complete task(s)`,
            },
            {
                value: '6',
                name: `${ '6.'.cyan } Eliminate task`,
            },
            {
                value: '0',
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

export{
    inquirerMenu,
    pauseMenu,
    readInput
}
