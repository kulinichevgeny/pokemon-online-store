import axios from 'axios';

const domain = 'https://demo-api.it-shatle.by';

const config = {
  baseURL: domain,
  timeout: 100000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Pragma: 'no-cache',
    Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMzNTcwZjhjZDMyZDAwMTE5OGJmZjIiLCJyb2xlcyI6WyJjdXN0b21lciJdLCJpYXQiOjE2MjM1NzA5NTgsImV4cCI6MTYyMzY1NzM1OH0.fD7KPefRLILXhA-ZtxIyKEdjhmctXJkMbst98_Yny_Y'
  },
};

const api = axios.create(config);

export default api;