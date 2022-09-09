import * as dotenv from 'dotenv';
import { printCityToConsole } from './helpers/consoleLogs.js';
import { inquirerMenu, listPlaces, pauseMenu, readInput } from "./helpers/inquirer.js";
import { Searches } from "./models/Searches.js";

dotenv.config()

const main = async() => {
    const searches = new Searches();
    let opt = '';

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const cityName = await readInput('Type the name of a city');
                const cities = await searches.getCity(cityName);
                const cityId = await listPlaces(cities);
                const city = cities.find( c => c.id === cityId );

                const weather = await searches.getWeather( city );
                printCityToConsole( city, weather );
                break;
            case 2:
                break;
        }

        if(opt !== 0) await pauseMenu();
    } while ( opt !== 0)
}

main();