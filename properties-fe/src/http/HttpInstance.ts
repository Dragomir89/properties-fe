import axios from 'axios';

const httpInstance = axios.create({
  baseURL: 'http://localhost:5117/api/',
  headers: {
    Accept: 'application/json; charset=utf-8',
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});

httpInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('Axios Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default httpInstance;
