// axios 二次封装
import axios from "axios";
import config from '@/config'
// import { ElMessage } from "element-plus";
// import { useRouter } from "vue-router";
import router from '@/router'
import storage from "./storage";

// const router = useRouter();
const TOKEN_INVALID = 'Token 认证失败，请重新登录！'
const NETWORK_ERROR = '网络异常'

const instance = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

const userInfo = storage.getItem('userInfo') || ''
const { token = '' } = userInfo.userInfo

// 请求拦截
instance.interceptors.request.use(req => {
  const { headers } = req

  if (!headers.Autoorization) {
    headers.Autoorization = 'Bearer' + ' ' + token
  }
  return req;
})

// 响应拦截
instance.interceptors.response.use(res => {
  const { code, data, msg } = res.data;

  if (code === 200) {
    return data
  } else if (code === 50001) {
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 1000);
    return Promise.reject(TOKEN_INVALID)
  } else {
    ElMessage.error(msg)
    return Promise.reject(msg || NETWORK_ERROR)
  }

})

// 请求核心函数
function request(options) {
  // 封装get请求数据
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data;
  }

  if (typeof options.mock !== 'undefined') {
    config.mock = options.mock
  }

  // prod 生产环境
  if (config.env === 'prod') {
    instance.defaults.baseURL = config.baseApi
  } else {
    instance.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return instance(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})

export default request;