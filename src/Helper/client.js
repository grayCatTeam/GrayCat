import axios from 'axios';
import config from '../Config/config.json';

const apiClient = axios.create({
  baseURL: config.apiUrl,
});

export { apiClient };
