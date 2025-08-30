import axios from "axios"

export const server = axios.create({
    baseURL: 'https://localhost:3001',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})