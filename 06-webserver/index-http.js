
const http = require('http');

http.createServer((req, res) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    const person = {
        name: 'Salome',
        lastname: 'Aristizabal'
    }
    
    res.write( JSON.stringify(person) );
    res.end();
}).listen( 8080 );

console.log('Listening port 8080');


