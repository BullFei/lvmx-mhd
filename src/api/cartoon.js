// 专门处理 漫画相关的 接口请求
// 引入封装好的 axios
import request from '../utils/request'
// 一个接口就暴露一个函数
/**
 * 获取轮播图
*/
export const getBanner = () => {
  // return 的是接口 调用之后, axios 返回的 promise 对象
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    // 需要请求体参数，就提供data
    // 需要查询字符串参数，就提供 params
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: 123
    }
  })
}

/**
 * 获取首页推荐数据
 *
*/
export const getIndexRecommend = () => {
  return request({
    url: '/api/comic_v2/customerview',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      viewtype: 1
    }
  })
}
