import axios from 'axios';

switch (process.env.NODE_ENV) {
  case 'production':
    axios.defaults.baseURL = 'http://localhost:8888';
    break;
  case 'test':
    axios.defaults.baseURL = 'http://localhost:8888';
    break;
  default:
    axios.defaults.baseURL = 'http://localhost:8888';
}