import axios from "axios";

const instance = axios.create({
    baseURL: 'https://chowpages.herokuapp.com/'
})

export default instance;
