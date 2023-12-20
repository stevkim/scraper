import axios from 'axios';

const convertName = (name) => {
  return name.split(' ').join('').toLowerCase()
}

export const getData = (data) => {
  return axios.get(`/product?name=${convertName(data.name)}`, {
    params: { url: data.url }
  })
};

export const addProduct = (data) => {
  return axios.post(`/product`, data);
}

export const getHistory = (data) => {
  return axios.get(`/product/${convertName(data.name)}/history`)
};

export const getSession = () => {
  return axios.get('/session');
}

export const updateSession = (input) => {
  return axios.put('/session', input);
}