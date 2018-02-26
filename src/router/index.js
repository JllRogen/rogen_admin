import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout.vue'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    noCache: true                if fasle ,the page will no be cached(default is false)
  }
 **/
export const constantRouterMap = [
  {
    path: '/login',
    component: _import('login/index'),
    hidden: true
  },
  //{ path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  {
    path: '/404',
    component: _import('errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: _import('errorPage/401'),
    hidden: true
  },
  {   // 首页
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: {
        title: 'dashboard',
        icon: 'dashboard',
        noCache: true
      }
    }]
  },
  {  // 文档
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [{
      path: 'index',
      component: _import('documentation/index'),
      name: 'documentation',
      meta: {
        title: 'documentation',
        icon: 'documentation',
        noCache: true
      }
    }]
  },

]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  
  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'component-demo',
    alwaysShow: true,
    meta: {
      title: 'components',
      icon: 'component'
    },
    children: [
      {
        path: "form",
        name: "Form",
        component: _import("components-demo/form/index"),
        meta: {
          title: "Form",
          //icon: "form",
          roles: ["developer", "editer"]
        }
        
      },
      {
        path: 'tree',
        name: 'Tree',
        component: _import('components-demo/tree/index'),
        meta: {
          title: 'Tree',
          //icon: 'tree',
          roles: ["developer", "editer"]
        }
      },
      {
        path: 'tinymce',
        component: _import('components-demo/tinymce/index'),
        name: 'tinymce-demo',
        meta: {title: 'tinymce'}
      },
    
    ]
  },
  // 找不到路由的直接跳到404页面
  {
    path: '*',
    redirect: '/404',
    hidden: true
  },

]





