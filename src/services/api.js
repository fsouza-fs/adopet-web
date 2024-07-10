import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.208.201.181:3001/',
});

export default api;
