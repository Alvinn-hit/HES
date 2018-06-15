import Axios from 'axios';
import QS from 'qs';
import { Message } from 'element-ui';

const service = Axios.create({
  baseURL: 'http://danger.test/api/v1/',
  timeout: 5000,
  paramsSerializer(params) {
    return QS.stringify(params, { skipNulls: true })
  }
});

service.interceptors.request.use((config) => {
  if (sessionStorage.getItem('token')) {
    config.headers = {
      Authorization: 'Bearer ' + sessionStorage.getItem('token')};
  }
  return config;
}, (errors) => {
  return Promise.reject(errors);
});

service.interceptors.response.use((response) => {
  const res = response.data;

  if (!res.success) {
    return Promise.reject(res);
  }
  return Promise.resolve(res.data);
}, (errors) => {
  let error = errors.response.data.message;
  if (errors.response.data.errors) {
    error = errors.response.data.errors[0] ? errors.response.data.errors[0] : errors.response.data.errors;
  }

  Message.error(error);
  return Promise.reject(errors);
});

export default service;
