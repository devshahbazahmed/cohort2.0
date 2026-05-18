/* eslint-disable no-useless-catch */
import axios from 'axios';

const api = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:3000/`,
  withCredentials: true,
});

export async function register(username, email, password) {
  try {
    const response = await api.post('/api/auth/register', {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function login(username, password) {
  try {
    const response = await api.post('/api/auth/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUser() {
  try {
    const response = await api.get('/api/auth/get-me');
    return response.data;
  } catch (error) {
    throw error;
  }
}
