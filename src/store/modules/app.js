import Cookies from 'js-cookie'

const app = {
  state: {
    // 侧边栏
    sidebar: {
      opened: ! + Cookies.get('sidebarStatus')
    },
    language: Cookies.get('language') || 'en'    // 设置语言
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {  // 切换侧边栏
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    SET_LANGUAGE: (state, language) => {   // 设置侧边栏
      state.language = language
      Cookies.set('language', language)
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    }
  }
}

export default app
