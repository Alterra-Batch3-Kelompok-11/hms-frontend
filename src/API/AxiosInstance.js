import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json',
        // 'Accept-Encoding' : 'gzip, deflate, br'
        //'Authorization' : ''
        // 'Access-Control-Allow-Credentials':true,
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
});

export default instance