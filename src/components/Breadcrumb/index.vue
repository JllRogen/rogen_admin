<template lang="pug">
  el-breadcrumb.app-breadcrumb(separator="/")
    transition-group(name="breadcrumb")
      el-breadcrumb-item.breadcrumb-item(v-for="(item, index) in levelList", :key="item.path", v-if="item.meta.title")
        span.no-redirect(v-if="item.redirect==='noredirect' || index===levelList.length-1") {{generateTitle(item.meta.title)}}
        router-link(v-else, :to="item.redirect || item.path") {{generateTitle(item.meta.title)}}
  

</template>

<script>
  import {generateTitle} from "@/utils/i18n"
  export default {
    created() {
      this.getBreadcrumb()
    },
    data() {
      return {
        levelList: null
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    methods: {
      generateTitle,
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
//        console.log(matched)
        
        const first = matched[0]
        if(first && first.name !== 'dashboard') {
          matched = [{
            path: '/dashboard',
            meta: {title: 'Dashboard'}
          }].concat(matched)
        }
//        console.log(matched)
        this.levelList = matched
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="stylus" scoped>
  .app-breadcrumb.el-breadcrumb
    display: inline-block
    font-size: 14px
    line-height: 50px
    margin-left: 10px
    .no-redirect
      color: #97a8be
      cursor: text
</style>
