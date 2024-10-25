import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api', // Địa chỉ của backend Spring Boot
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
