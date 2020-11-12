// 专门处理城市相关的 接口请求
// 注意，城市相关的接口是 找卖座网借鉴过来的，不能去使用 request.js
// 直接使用 axios 实例
import axios from 'axios'

/**
 * https://m.maizuo.com/gateway?k=1229859
 * X-Client-Info: {"a":"3000","ch":"1002","v":"5.0.4","e":"1597154744253317171118081"}
 * X-Host: mall.film-ticket.city.list
*/
export const getCityList = () => {
  return axios({
    url: '/maizuo/gateway?k=1229859',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1597154744253317171118081"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
}
