import axios from 'axios';
import { StorageProps } from '~/@types/storage/storage-props';

const authUrls = ['/api/auth/token', '/api/auth/register','/api/auth/auth'];

axios.interceptors.request.use(
    (config) => {
        const relativeUrl = new URL(config.url!, config.baseURL).pathname;

        if (!authUrls.includes(relativeUrl)) {
            const token = localStorage.getItem(StorageProps.ACCESS_TOKEN);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;