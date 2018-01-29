<template lang="pug">
  .menu-wrapper
    template(v-for="item in routes", v-if="!item.hidden&&item.children")
      //只有一个子项目的路由
      router-link(v-if="item.children.length===1 && !item.children[0].children && !item.alwaysShow",
      :to="item.path+'/'+item.children[0].path", :key="item.children[0].name")
        el-menu-item(:index="item.path+'/'+item.children[0].path", :class="{'submenu-title-noDropdown':!isNest}")
          svg-icon(v-if="item.children[0].meta&&item.children[0].meta.icon", :icon-class="item.children[0].meta.icon")
          span( v-if="item.children[0].meta&&item.children[0].meta.title") {{generateTitle(item.children[0].meta.title)}}
      // 有多个子项
      el-submenu(v-else, :index="item.name||item.path", :key="item.name")
        template(slot="title")
          svg-icon(v-if="item.meta&&item.meta.icon", :icon-class="item.meta.icon")
          span(v-if="item.meta&&item.meta.title") {{generateTitle(item.meta.title)}}
        template(v-for="child in item.children" v-if="!child.hidden")
          sidebar-item.nest-menu(:is-nest="true", v-if="child.children&&child.children.length>0", :routes="[child]", :key="child.path")
          router-link( v-else, :to="item.path+'/'+child.path", :key="child.name")
            el-menu-item(:index="item.path+'/'+child.path")
              svg-icon(v-if="child.meta&&child.meta.icon", :icon-class="child.meta.icon")
              span(v-if="child.meta&&child.meta.title") {{generateTitle(child.meta.title)}}


</template>

<script>
  
  import {generateTitle} from '@/utils/i18n'
  
  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      },
      isNest: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      generateTitle
    }
  }
</script>
