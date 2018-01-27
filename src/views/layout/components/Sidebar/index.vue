<template lang="pug">
  scroll-bar
    el-menu(mode="vertical", unique-opened, :defaultActive="$route.path", :collapse="isCollapse", backgroundColor="#304156", textColor="#fff", activeTextColor="#409eff")
      sidebar-item(:routes="routes")
  
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {   //获取当前的路由
//      console.log(this.$router.options.routes)
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
