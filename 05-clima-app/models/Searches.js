import { readDB, saveDB } from "../helpers/fileController.js";
import { create, get } from "../helpers/httpRequests.js";

export class Searches {
    history = [];

    constructor() {
        this.history = readDB()
    }

    get paramsMapbox() {
        return {
            'limit': 5,
            'language':'en',
            'access_token':`${process.env.MAPBOX_KEY}`
        }
    }

    async getCity( cityName = '') {
        try {
            const instance = create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json`,
                params: this.paramsMapbox
            })

            const resp = await instance.get();
            return resp.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1]
            }))

        } catch (error) {
            return [];
        }
    }

    get capitalizedHistory() {
        return this.history.map( place => {
            let words = place.split(' ');
            words = words.map( word => word[0].toUpperCase() + word.substring(1) );

            return words.join(' ')
        })
    }

    async getWeather( city = [] ) {
        try {
            const instance = create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    'lat': city.lat,
                    'lon': city.lng,
                    'appid': `${process.env.OPENWEATHER_KEY}`,
                    'units': 'metric'
                }
            })

            const resp = await instance.get();

            const { weather, main } = resp.data;
            
            return {
                temp: main.temp,
                temp_min: main.temp_min,
                temp_max: main.temp_max,
                description: weather[0].description,
            }
        } catch (error) {
            return [];
        }
    }

    addHistory( place = '' ) {
        if( this.history.includes( place.toLocaleLowerCase() )){
            return;
        }

        this.history = this.history.splice(0, 5);
        
        this.history.unshift( place.toLocaleLowerCase() );
        saveDB( this.history );
    }


}
