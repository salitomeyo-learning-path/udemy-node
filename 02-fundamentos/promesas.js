const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Salome'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = ( id ) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id )?.nombre;
        
        ( empleado ) 
            ? resolve( empleado )
            : reject(`Empleado con id ${id} no existe`);
    });
}

const getSalario = ( id ) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id )?.salario;
        
        ( salario ) 
            ? resolve( salario )
            : reject(`El salario con id ${id} no existe`);
    });
}


const id = 1;

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(console.log);

getSalario(id)
    .then(salario => console.log(salario))
    .catch(console.log);


