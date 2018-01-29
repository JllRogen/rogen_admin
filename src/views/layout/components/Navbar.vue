<template lang="pug">
  el-menu.navbar(mode="horizontal")
    .hamburger-container.navbar-item
      hamburger(:toggleClick="toggleSideBar", :isActive="sidebar.opened")
    .breadcrumb-container.navbar-item
      breadcrumb
    .right-menu
      //全屏
      
      el-tooltip.navbar-item.screenfull-container(effect="dark", :content="$t('navbar.screenfull')", placement="bottom")
        screen-full
      // 语言选择
      .navbar-item.international
        lang-select
      // 头像区域
      .navbar-item.avatar-container
        el-dropdown(trigger="click")
          .avatar-wrapper
            img.user-avatar(:src="avatar + '?imageView2/1/w/80/h80'")
            i.el-icon-caret-bottom
          el-dropdown-menu.user-dropdown(slot="dropdown")
            router-link.inlineBlock(to="/")
              el-dropdown-item {{$t('navbar.dashboard')}}
            el-dropdown-item(divided)
              span(@click="logout" style="display:block") {{$t('navbar.logOut')}}

</template>

<script>
  import {mapGetters} from 'vuex'
  import Breadcrumb from '@/components/Breadcrumb'
  import Hamburger from '@/components/Hamburger'
  import LangSelect from "@/components/LangSelect"
  import ScreenFull from "@/components/Screenfull"
  
  export default {
    components: {
      Breadcrumb,
      Hamburger,
      LangSelect,
      ScreenFull,
    },
    computed: {
      ...mapGetters(['sidebar', 'avatar'])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      },
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()    // 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="stylus" scoped>
  $navbar-height = 50px
  
  .navbar
    height: $navbar-height
    border-radius: 0 !important
    .navbar-item
      height: 100%
      display: flex
      justify-content: center
      flex-flow: column nowrap
      padding: 0 8px
      float: left
    /*.hamburger-container*/
    /*float: left*/
    /*.breadcrumb-container*/
    /*float: left*/
    .right-menu
      float: right
      height: 100%
      &:focus
        outline: none
      .international
        vertical-align: top
      .avatar-container
        height: $navbar-height
        margin-right: 30px
        .avatar-wrapper
          cursor: pointer
          margin-top: 5px
          position: relative
          .user-avatar
            width: 40px
            height: 40px
            border-radius: 10px
          
          .el-icon-caret-bottom
            position: absolute
            right: -20px
            top: 25px
            font-size: 12px


</style>

