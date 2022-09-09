
const printCityToConsole = ( city, weather ) => {
    console.log('Selected place information'.green);
    console.log(`${ 'City'.green }: ${ city.name }`);
    console.log(`${ 'Lat'.green }: ${ city.lat }`);
    console.log(`${ 'Lng'.green }: ${ city.lng }`);
    console.log(`${ 'Temperature'.green }: ${ weather.temp }`);
    console.log(`${ 'Temperature Min'.green }: ${ weather.temp_min }`);
    console.log(`${ 'Temperature Max'.green }: ${ weather.temp_max }`);
    console.log(`${ 'How is the weather'.green }: ${ weather.description }`);
    return [];
}

export {
    printCityToConsole
}

