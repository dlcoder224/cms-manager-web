// vuex 状态管理
import { createStore } from 'vue'
import state from './state'
import mutations from './mutations'

export default createStore({
  state,
  mutations
})