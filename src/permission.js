import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import {Message} from 'element-ui'
import {getToken} from '@/utils/auth' // 验权

NProgress.configure({showSpinner: false})// NProgress Configuration

// permissiom judge function
function hasPermission(roles, permissionRoles) {
  if(roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if(!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  let token = getToken()
  if(token) {
    if(to.path === '/login') {
      next({path: '/'})
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    }
    else {
      if(store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(res => { // 拉取用户信息
          const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
          //console.log(roles)
          // 根据roles权限生成可访问的路由表
          store.dispatch("GenerateRoutes", {roles}).then(() => {
            //console.log(store.getters.addRouters);
            let addRouters = store.getters.addRouters
            //console.log(addRouters)
            router.options.routes = router.options.routes.concat(addRouters)  // 动态添加路由必须有这一句, 我也不知道为什么
            router.addRoutes(addRouters) // 动态添加可访问路由表
            
            next({  // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
              ...to,
              replace: true
            })
          })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('Verification failed, please login again')
            next({path: '/login'})
          })
        })
      }
      else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if(hasPermission(store.getters.roles, to.meta.roles)) {
          next()//
        }
        else {
          next({
            path: '/401',
            replace: true,
            query: {noGoBack: true}
          })
        }
        // 可删 ↑
      }
    }
  }
  else {
    if(whiteList.indexOf(to.path) !== -1) {
      next()
    }
    else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
