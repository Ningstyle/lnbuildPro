import request from '@/request/axios'
var ENV =process.env.NODE_ENV
var Tenv;
ENV=='development'?Tenv='/api':Tenv=''
// 接口封装请求示例
export const getArticlePage = (pageId,pageIndex,pageSize) => {
  return request({
    url: Tenv+'/shfp/revision/zspt/columnget/getArticlePage',
    method: 'get',
    params: {
    	pageId:pageId,
    	pageIndex:pageIndex,
    	pageSize:pageSize
    }
  })
}
export default{
	getArticlePage
}