import Vue from 'vue'

import {
  RECEIVE_HOMEDATA
} from './mutation_type'

export default {
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  }
}
