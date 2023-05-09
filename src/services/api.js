import axios from 'axios';

export const key = "de2048664fb3949e927e5bdaba5700744eca7973"; 
// minha chave: de2048664fb3949e927e5bdaba5700744eca7973

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;