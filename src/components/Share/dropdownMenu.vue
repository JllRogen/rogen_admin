<template lang="pug">
  .share-dropdown-menu(:class="{active:isActive}")
    .share-dropdown-menu-wrapper
      span.share-dropdown-menu-title(@click.self="clickTitle") {{title}}
      .share-dropdown-menu-item(v-for="item,index of items", :key="index")
        a(v-if="item.href", :href="item.href", target="_blank") {{item.title}}
        span(v-else) {{item.title}}

</template>

<script>
  
  export default {
    props: {
      items: {
        type: Array
      },
      title: {
        type: String,
        default: 'vue'
      }
    },
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      clickTitle() {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="stylus">
  $n = 6 //和items.length 相同
  $t = .1s
  .share-dropdown-menu
    width: 250px
    position: relative
    z-index: 1
    &-title
      width: 100%
      display: block
      cursor: pointer
      background: black
      color: white
      height: 60px
      line-height: 60px
      font-size: 20px
      text-align: center
      z-index: 2
      transform: translate3d(0, 0, 0)
    
    &-wrapper
      position: relative
    
    &-item
      text-align: center
      position: absolute
      width: 100%
      background: #e0e0e0
      line-height: 60px
      height: 60px
      cursor: pointer
      font-size: 20px
      opacity: 1
      transition: transform 0.28s ease
      &:hover
        background: black
        color: white
      
      for i in (1..$n)
        &:nth-of-type()
          z-index: -1
          transition-delay: (i *$t)
          transform: translate3d(0, -60px, 0)
    
    &.active
      .share-dropdown-menu-wrapper
        z-index: 1
      .share-dropdown-menu-item
        for i in (1..$n)
          &:nth-of-type(i)
            transition-delay: ($n - i) *$t
            transform: translate3d(0, (i - 1) * 60px, 0)
</style>
