import axios from "axios";

const api = axios.create({
    baseURL:'https://695c8dc479f2f34749d489b9.mockapi.io/expenses',
    timeout:5000,
})

export default api