export default {
  state: {
    menu: [],
    currentMenu: null,
    tabList: [{ name: 'home', path: '/', label: '首页', icon: 's-home' }],
    isCollapse: false
  },
  mutations: {
    selectMenu: function(state, val) {
      //val.label === '首页' ? (state.currentMenu = null) : (state.currentMenu = val)
      if (val.name === 'home') {
        state.currentMenu = null
      } else {
        state.currentMenu = val
        let result = state.tabList.findIndex(item => item.name === state.currentMenu.name)
        console.log(result)
        result === -1 ? state.tabList.push(val) : ''
      }
    },
    closeTab: function(state, val) {
      let result = state.tabList.findIndex(item => item.name === val.name)
      state.tabList.splice(result, 1)
    },
    collapseMenu: function(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
