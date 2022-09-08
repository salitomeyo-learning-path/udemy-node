import { inquirerMenu, pauseMenu, readInput } from "./helpers/inquirer.js";
import { Searches } from "./models/Searches.js";

const main = async() => {
    const searches = new Searches();
    let opt = '';

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const city = await readInput('Type the name of a city');
                searches.getCity(city);
                break;
            case 2:
                break;
        }

        if(opt !== 0) await pauseMenu();
    } while ( opt !== 0)
}

main();