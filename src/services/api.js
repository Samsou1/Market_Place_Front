import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = 'http://localhost:3000';
const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use(({ headers, ...config }) => ({
    ...config,
    headers: {
        ...headers,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${headers.Authorization || Cookies.get('bearerToken')}`
    },
}));

export default class APIManager {
    static async registerUser(payload) {
        try{
            const response = await API.post('/users', payload);
            Cookies.set("bearerToken", response.headers.get("Authorization").slice(7));
            Cookies.set("currentUser", JSON.stringify(response.data.user));
            return response;
        }catch{
            throw new Error('Invalid email or password');
        }
    }
    
    static async loginUser(payload) {
        try{
            const response = await API.post('/users/sign_in', payload);
            Cookies.set("bearerToken", response.headers.get("Authorization").slice(7));
            Cookies.set("currentUser", JSON.stringify(response.data.user));
            return response;
        }catch{
            throw new Error('Invalid email or password');
        }
    }

    static async logoutUser() {
        if(Cookies.get("currentUser")){
            try{
                const response = await API.delete('/users/sign_out', {'headers': {'Authorization': Cookies.get('bearerToken')}});
                Cookies.remove("bearerToken");
                Cookies.remove("currentUser");
                return response;
            }catch{
                throw new Error("Something went wrong");
            }
        }
    }

    static async resetPassword(payload) {
        if(Cookies.get("currentUser")){
            try{
                const response = await API.post('/users/password/new', payload);
                return response;
            }catch{
                throw new Error("Something went wrong");
            }
        }
    }
}