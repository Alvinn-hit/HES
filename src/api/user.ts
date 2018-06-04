import request from '../service/request';

export function userList(params: object) {
  return request({
    url: 'users',
    method: 'get',
    params,
  });
}

export function userAdd(data: object) {
  return request({
    url: 'users',
    method: 'post',
    data,
  });
}

export function userUpdate(userID: string, data: object) {
  return request({
    url: 'users/' + userID,
    method: 'put',
    data,
  });
}
