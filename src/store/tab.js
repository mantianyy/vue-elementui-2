export default {
  state: {
    menu: [],
    currentMenu: null
  },
  mutations: {
    selectMenu: function(state, val) {
      //val.label === 'home' ? (state.currentMenu = val) : (state.currentMenu = null)
      val.label === '首页' ? (state.currentMenu = null) : (state.currentMenu = val)
    }
  },
  actions: {}
}
