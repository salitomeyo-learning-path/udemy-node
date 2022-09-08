import fs from 'fs';


const file = './db/data.json';

const saveDB = ( data ) => {
    fs.writeFileSync( file, JSON.stringify(data) );
}

const readDB = () => {
    if( !fs.existsSync( file ) ) {
        return null;
    }

    const info = fs.readFileSync(file, { encoding: 'utf-8' });
    return JSON.parse( info );
}

export {
    saveDB,
    readDB
}

