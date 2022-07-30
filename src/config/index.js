// 环境配置封装
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/f5d7d3c98bcd9f6bcc94ce5bc2b3cf91/api'
  },
  test: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/f5d7d3c98bcd9f6bcc94ce5bc2b3cf91/api'
  },
  prod: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/f5d7d3c98bcd9f6bcc94ce5bc2b3cf91/api'
  }
}

export default {
  env,
  mock: false,
  namespace: 'manager',
  ...EnvConfig[env]
}