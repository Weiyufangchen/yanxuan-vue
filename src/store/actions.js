// 引入常量名称
import {
  RECEIVE_HOMEDATA
} from './mutation_type'
// 引入接口api
import {
  reqHomeData
} from '../api'

export default {
// 异步获取首页数据
   async getHomeData ({commit}) {
  //  调用接口请求函数，获取数据
    const result = await reqHomeData()
    if (result.code === 0) {  // 成功获取
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
    }
  }
}
