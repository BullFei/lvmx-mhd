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

/*
  获取排行榜的数据
  https://mhd.zhuishushenqi.com/comic_v2/comicsrank?apptype=8&appversion=1.0&channel=web-app
*/
export const getRankList = (ranktype, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsrank',
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
      ranktype,
      pageno,
      pagesize
    })
  })
}

/*
* 获取Vip专区的数据
* https://mhd.zhuishushenqi.com/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
*/
export const getVipList = (special = 892, pageno = 1, pagesize = 15) => {
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
      special,
      pageno,
      pagesize
    })
  })
}

/**
 * 热门搜索
 * https://mhd.zhuishushenqi.com/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8
*/
export const getHotSearch = () => {
  return request({
    url: '/api/comic/hotsearch',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      appType: 8
    }
  })
}

/**
 * 搜索关键字
 * https://mhd.zhuishushenqi.com/comic_v2/searchindex?apptype=8&appversion=1.0&channel=web-app&name=12&type=2
*/

export const searchIndex = (name = 1) => {
  return request({
    url: '/api/comic_v2/searchindex',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      name,
      type: 2
    }
  })
}
/**
 * 搜索结果页
 * https://mhd.zhuishushenqi.com/comic_v2/searchbookauthor?apptype=8&appversion=1.0&channel=web-app&name=%E6%A1%83%E8%8A%B1%E5%AE%9D%E5%85%B8&type=2&pageno=1&pagesize=100
*/
export const searchSearchResult = (name = 1) => {
  return request({
    url: '/api/comic_v2/searchbookauthor',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      name,
      type: 2,
      pageno: 1,
      pagesize: 100
    }
  })
}
