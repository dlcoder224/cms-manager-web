// api 管理
import request from '@/utils/request'

export default {
  login(params) {
    request({
      url: '/user/login',
      method: 'get',
      data: params,
    })
  }
}