import { create, get } from "../helpers/httpRequests.js";

export class Searches {
    historial = [];

    constructor() {

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



}
