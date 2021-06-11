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
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMzNTcwZjhjZDMyZDAwMTE5OGJmZjIiLCJyb2xlcyI6WyJjdXN0b21lciJdLCJpYXQiOjE2MjM0MTc1MzMsImV4cCI6MTYyMzUwMzkzM30.20L6wcHI3kBkICKLVPXsZzrh2vqvzQAvcuqgFwSMi3g'
  },
}

const api = axios.create(config);

export default api;