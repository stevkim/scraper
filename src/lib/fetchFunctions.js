import axios from 'axios';

const convertName = (name) => {
  return name.split(' ').join('').toLowerCase()
}

export const getData = (data) => {
  return axios.get(`/product?name=${convertName(data.name)}`, {
    params: { url: data.url }
  })
};

export const getHistory = (data) => {
  return axios.get(`/product/${convertName(data.name)}/history`)
};

export const addHistory = (input) => {
  return axios.post(`/product/${convertName(input.name)}/history`, input);
}

export const getSession = () => {
  return axios.get('/session');
}

export const updateSession = (input) => {
  return axios.put('/session', input);
}