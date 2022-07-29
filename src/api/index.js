// api 管理
import request from '@/utils/request'

export default {
  // 登录接口
  login(params) {
    return request({
      url: '/users/login',
      method: 'post',
      data: params,
      mock: false
    })
  },

  // 获取未读消息
  noticeCount(params) {
    return request({
      url: '/leave/count',
      method: 'GET',
      data: params,
    })
  },

  // 获取菜单列表
  getMenuList(params) {
    return request({
      url: '/menu/list',
      method: 'GET',
      data: params,
    })
  },
}