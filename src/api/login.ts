import request from '../service/request';

export function login(data: object) {
  return request({
    url: '/login',
    method: 'post',
    data,
  });
}

export function changePassword(data: object) {
  return request({
    url: 'password',
    method: 'post',
    data,
  });
}
