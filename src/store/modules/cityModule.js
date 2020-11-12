
const city = window.sessionStorage.getItem('city')
// 拆分出来的 城市相关的 仓库子模块
const state = {
  curCity: city ? JSON.parse(city) : null // 当前选择的城市
}
const mutations = {
  // 设置当前城市
  SET_CURCITY (state, payload) {
    // 修改仓库中的 curCity 数据
    state.curCity = payload
    // 做一下本地的存储
    window.sessionStorage.setItem('city', JSON.stringify(state.curCity))
  }
}
// 在页面上显示的应该是当前城市的名字
const getters = {
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}

export default {
  namespaced: true, // 注意记得添加命名空间
  state,
  getters,
  mutations
}
