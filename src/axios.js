import axios from 'axios'

const instance = axios.create({
    baseURL: "http://www.json-generator.com/api/json/get/cfhVSwuKxu?indent=2",
});

export default instance;