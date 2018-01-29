const getters = {
  sidebar: state => state.app.sidebar,   // 侧边栏
  language: state => state.app.language,   // 语言
  visitedViews: state => state.tagsView.visitedViews,   // tagsView的列表
  cachedViews: state => state.tagsView.cachedViews,   // 缓存的view
  token: state => state.user.token,      // 用户的token
  avatar: state => state.user.avatar,    // 用户的头像
  name: state => state.user.name,     // 用户的昵称
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  errorLogs: state => state.errorLog.logs
}
export default getters
