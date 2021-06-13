import axios from 'axios';

const domain = 'https://demo-api.it-shatle.by';

const config = {
  baseURL: domain,
  timeout: 100000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Pragma: 'no-cache',
  },
};

const api = axios.create(config);

export default api;