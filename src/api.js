import axios from "axios";
import store from "./store/store";
const api = axios.create({
    baseURL: `${process.env['REACT_APP_API']}`
});

api.interceptors.request.use(config => {
    const token = store.getters['authorization/token'];
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});
