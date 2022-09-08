import { create, get } from "../helpers/httpRequests.js";

export class Searches {
    historial = [];

    constructor() {

    }

    get paramsMapbox() {
        return {
            'limit': 6,
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
            console.log(resp.data);

        } catch (error) {
            return [];
        }
    }



}
