import request from '../service/request';

export function contentList(params: object) {
  return request({
    url: 'contents',
    method: 'get',
    params,
  });
}

export function contentAdd(data: object) {
  return request({
    url: 'contents',
    method: 'post',
    data,
  });
}

export function contentEdit(ID: string, data: object) {
  return request({
    url: 'contents/' + ID,
    method: 'put',
    data,
  });
}

export function contentDelete(ID: number) {
  return request({
    url: 'contents/' + ID,
    method: 'delete',
  });
}
