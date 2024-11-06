import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import toast from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

// Default configuration for all request
axios.defaults.baseURL = 'http://localhost:9090'


// Global Interceptor
axios.interceptors.request.use((req) => {
  if (sessionStorage.getItem('token')) {
    req.headers.set({ Authorization: `Bearer ${sessionStorage.getItem('token')}` })
  }

  return req;
})

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err.response) {
      // The request was made and the server responded with a status code
      // console.error('Response error:', err.response.status, err.response.data);
      toast.error(err.response.data.message)
    } else if (err.request) {
      // The request was made but no response was received
      // console.error('Request error:', err.request);
      toast.error(err.request.data.message)
    } else {
      // Something happened in setting up the request that triggered an error
      // console.error('Error:', err.message);
      toast.error(err.message)
    }

    return Promise.reject(err)
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
