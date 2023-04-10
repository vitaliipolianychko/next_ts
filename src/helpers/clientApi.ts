import axios, {AxiosRequestConfig} from 'axios'

const API_URL = 'http://localhost:5000/api';

const clientApi = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

clientApi.interceptors.request.use((config: AxiosRequestConfig) => {
    return {
        ...config,
        headers: {
            ...config?.headers,
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
});

clientApi.interceptors.response.use(config => {
    return config
}, error => {
    const originalRequest = {
        ...error.config,
        headers: error?.config?.headers.toJSON()
    };
    if (error?.response?.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        axios.get(`http://localhost:5000/api/refresh`, {withCredentials: true})
            .then(res => {
                const {accessToken} = res.data;
                localStorage.setItem('token', accessToken);
                return clientApi.request(originalRequest)
            })
            .catch(er => console.log(er))
    }
    throw error;
});

export default clientApi
