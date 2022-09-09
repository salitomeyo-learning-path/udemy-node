import axios from 'axios';

const get = async( url ) => {
    const { data, status } = await axios.get(url);

    return { data, status }
}

const create = ( requestObject ) => {
    const instance = axios.create( requestObject );
    return instance;
}

export {
    get,
    create
}