// 引入常量名称
import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA
} from './mutation_type'
// 引入接口api
import {
  reqHomeData,
  reqNavData,
  reqTopicData
} from '../api'

export default {
// 异步获取首页数据
  async getHomeData({commit}, cb) {
    //  调用接口请求函数，获取数据
    const result = await reqHomeData()
    if (result.code === 0) {  // 成功获取
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
      cb && cb()
    }
  },
  async getNavData({commit}, cb) {
    const result = await reqNavData()
    if (result.code === 0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
      cb && cb()
    }
  },
  async getTopicData({commit}, cb) {
    const result = await reqTopicData()
    if (result.code === 0) {
      const topicData = result.data
      commit(RECEIVE_TOPICDATA, {topicData})
      cb && cb()
    }
  }
}
