<template lang="pug">
  .app-wrapper(:class="{hideSidebar:!sidebar.opened}")
    sidebar.sidebar-container
    .main-container
      navbar
      tags-view
      app-main
      
</template>

<script>
  import {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
  } from '@/views/layout/components'
  
  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      AppMain,
      TagsView,
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      }
    }
  }
</script>

<style rel="stylesheet/scss" scoped>
  @import "../../styles/mixin.styl";
  
  .app-wrapper {
  clearfix() position: relative;
    height: 100%;
    width: 100%;
  }
</style>
