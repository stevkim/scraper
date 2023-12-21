import axios from 'axios';
import { convertName } from './utilityFunctions.js';

export const getData = (data) => {
  return axios.get(`/product?name=${convertName(data.name)}`, {
    params: { url: data.url }
  })
};

export const addProduct = (data) => {
  return axios.post(`/product`, data);
}

export const getHistory = (data) => {
  return axios.get(`/product/${convertName(data.name)}/history`);
};

export const getSession = () => {
  return axios.get('/session');
}