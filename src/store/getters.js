export default {
  getZhuantiData(state) {
    return state.homeData.newItemNewUserList.slice(0, 3)
  },

  getJujiaData(state) {
    return state.homeData.tagList.slice(0, 5)
  }
};
