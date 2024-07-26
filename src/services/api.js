import axios from 'axios';

const api = axios.create({
  baseURL: '/adoptservice/',
});

export default api;
