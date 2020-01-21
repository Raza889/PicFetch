import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 26c032ac2708bcab4ff754dac0fb5b5a5410fb9bcc5e7c9f895e387cb62d8dc2',

    }
})