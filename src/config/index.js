// 环境配置封装
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  development: {
    baseApi: '/',
    mockApi:''
  },
  test: {
    baseApi: '',
    mockApi:''
  },
  prod: {
    baseApi: '',
    mockApi:''
  }
}

export default {
  env,
  mock: true,
  ...EnvConfig[env]
}