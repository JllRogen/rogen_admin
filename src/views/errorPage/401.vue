<template lang="pug">
  .errPage-container
    el-button.pan-back-btn(@click="back", icon="arrow-left") 返回
    el-row
      el-col(:span="12")
        h1.text-jumbo.text-ginormous Oops!
        span gif来源<a href='https://zh.airbnb.com/' target='_blank'>airbnb</a> 页面
        h2 你没有权限去该页面
        h6 如有不满意请联系你领导
        ul.list-unstyled
          li 或者你可以去:
          li.link-type
            router-link(to="/dashboard") 回首页
          li.link-type
            a(href="https://www.taobao.com/", target="_Blank") 随便看看
          li
            a(@click.prevent="dialogVisible=true", href="javascript:void(0);") 点我看图
      el-col(:span="12")
        img(:src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.")
      el-dialog(title="随便看", :visible.sync="dialogVisible"): img.pan-img(:src="ewizardClap")
  
</template>

<script>
import errGif from '@/assets/401_images/401.gif'

export default {
  name: 'page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .errPage-container
    width: 800px
    margin: 100px auto
    .pan-back-btn
      background: #008489
      color: #fff
    
    .pan-gif
      margin: 0 auto
      display: block
    
    .pan-img
      display: block
      margin: 0 auto
    
    .text-jumbo
      font-size: 60px
      font-weight: 700
      color: #484848
    
    .list-unstyled
      font-size: 14px
      li
        padding-bottom: 5px
      
      a
        color: #008489
        text-decoration: none
        &:hover
          text-decoration: underline
        
      
    
  
</style>
