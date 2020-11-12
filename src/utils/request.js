// 引入 axios
import axios from 'axios'
// 引入 Notify
import { Notify } from 'vant'

// 创建 axios 实例
const instance = axios.create({
  // options  基准路径
  baseURL: 'http://localhost:8080',
  // 设置超时时间
  timeout: 5000

})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  // 对响应的数据作协什么
  const res = response.data
  if (res.code !== 200) {
    Notify(res.code_msg)
    return Promise.reject(new Error('返回数据有误'))
  }
  return response.data
}, (error) => {
  // 对响应错误做点什么
  Notify({
    message: '网络异常，请稍后重试',
    duration: 500
  })
  return Promise.reject(error)
})

export default instance
