import axios from "axios"

export const server = axios.create({
    baseURL: 'https://douglasbackend-g0btbthacnercxch.canadacentral-01.azurewebsites.net',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})