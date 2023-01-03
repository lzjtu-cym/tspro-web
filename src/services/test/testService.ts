import { GET_TABLE_LIST } from 'src/api/test/indexApi';
import request from 'src/utils/request';
export const getTableLIst = async (params = {}) => {
  const res: any = await request.get(GET_TABLE_LIST, params);
  if (res.data?.code !== '200') {
    console.error(res.data?.error, '请求数据错误，请刷新页面重试！');
  }
  return res;
};
