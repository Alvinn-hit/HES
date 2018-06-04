import request from '../service/request';

export function contentList(params: object) {
  return request({
    url: 'contents',
    method: 'get',
    params,
  });
}
