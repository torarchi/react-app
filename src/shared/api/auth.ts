import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export const login = (email: string, password: string) =>
  API.post('/auth/login', { email, password });

export const register = (email: string, password: string) =>
  API.post('/auth/register', { email, password });

