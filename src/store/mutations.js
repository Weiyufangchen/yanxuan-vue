import Vue from 'vue'

import {
  RECEIVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_TOPICDATA
} from './mutation_type'

export default {
  [RECEIVE_HOMEDATA](state, {homeData}) {
    state.homeData = homeData
  },
  [RECEIVE_NAVDATA](state, {navData}) {
    state.navData = navData
  },
  [RECEIVE_TOPICDATA](state, {topicData}) {
    state.topicData = topicData
  }

}
