import request from '../service/request';

export function categoryList(params: object) {
  return request({
    url: 'categories',
    method: 'get',
    params,
  });
}

export function categoryAdd(data: object) {
  return request({
    url: 'categories',
    method: 'post',
    data,
  });
}

export function categoryEdit(id: string, data: object) {
  return request({
    url: 'categories/' + id,
    method: 'put',
    data,
  });
}

export function categoryDelete(id: string) {
  return request({
    url: 'categories/' + id,
    method: 'delete',
  });
}
