const deadpool= {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre } ${this.apellido}`;
    }
}

// const nombre = 'Wade';
// const apellido = 'Winston';
// const poder = 'Regeneracion';

const { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);


function imprimeHeroe( { nombre, apellido, poder }  ) {
    console.log(nombre, apellido, poder);
}

const heroes = ['deadpool', 'superman', 'batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];


const [h1, h2, h3] = heroes;
const [, , p3] = heroes;


console.log(h1, h2, h3);
console.log(p3);


