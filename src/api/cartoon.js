// 专门处理 漫画相关的 接口请求
// 引入封装好的 axios
import request from '../utils/request'

/**
 * 获取分类的数据
 * https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
*/

import { format } from '@/utils/apiHeader.js'
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

/**
 * 获取分类类型
 * https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=125
*/
export const getTypes = () => {
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 125
    }
  })
}

// https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
export const getTypesList = (subject, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    // 注意这里有请求体, 这里的参数需要解码查看一下
    // xKN0pYL6M22yUj6FOQT74hVyjxFcMmtfESOqVr+v0/qL6sKcwCKIfRGywZe3s8Zg:
    // {
    //   subject: ex,
    //   pageno: 1,
    //   pageSize: 20
    // }
    data: format({
      subject,
      pageno,
      pagesize
    })
  })
}
