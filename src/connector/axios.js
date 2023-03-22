import  Axios  from "axios";
import { useAuthStore } from "../stores";
import Router from "../router";

let options = {
    headers: {
        Accept: "application/json",
    },
};

const axios = Axios.create(options);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const authUser = useAuthStore();
        if(error.response && error.response.status === 401)
        {
            if(Router.currentRoute.value.name !== "login"){
                authUser.$reset();
                Router.push({name: 'unauthorized'})
            }
        }
        if(error?.response && error.response.status === 403){
            Router.push({name: 'forbidden'})
        }
        if(error?.response && error?.response?.status === 404){
            Router.push({name: 'not-found'})
        }

        // Notifier here

        return Promise.reject(error);
    }
);

axios.interceptors.request.use(
    (config) => {
        const authUser = useAuthStore();
        if(authUser.isLoggedIn){
            config.headers.common.Authorization = authUser.getToken
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

let api = {...axios}

api.defaults.baseURL = import.meta.env.VITE_APP_SERVER;

export {api, axios}