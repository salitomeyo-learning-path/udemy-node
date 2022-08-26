// setTimeout(() => {
//     console.log('Hola mundo')
// },300)

const getUsuarioByID = ( id, callback ) => {
    const usuario = {
        id,
        nombre: 'Salome'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500)
}

getUsuarioByID(10, ( usuario ) => {
    console.log(usuario);
})

