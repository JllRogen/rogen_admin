<template lang="pug">
  .login-container
    el-form.card-box.login-form( :model="loginForm", :rules="loginRules", ref="loginForm")
      .title-container
        h3.title {{$t('login.title')}}
        lang-select.set-language
      el-form-item(prop="username")
        span.svg-container.svg-container_login
          svg-icon(iconClass="user")
        el-input(name="username", type="text", v-model="loginForm.username", autoComplete="on", :placeholder="$t('login.username')")
      el-form-item(prop="password")
        span.svg-container
          svg-icon(iconClass="password")
        el-input(name="password", :type="pwdType", v-model="loginForm.password", autoComplete="on", :placeholder="$t('login.password')", @keyup.enter.native="handleLogin")
        span.show-pwd(@click="showPwd")
          svg-icon(iconClass="eye")
      el-form-item
        el-button(type="primary", style="width:100%;", :loading="loading", @click.native.prevent="handleLogin") {{$t("login.logIn")}}
</template>

<script>
  import {isvalidUsername} from '@/utils/validate'
  import LangSelect from '@/components/LangSelect'
  
  export default {
    name: 'login',
    components:{LangSelect},
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
        loginRules: {  // 登入校验规则
          username: [{
            required: true,
            trigger: 'blur',
            validator: (rule, value, callback) => {
              if(!isvalidUsername(value)) {
                callback(new Error(this.$t('login.userNameErrorTips')))
              }
              else {
                callback()
              }
            }
          }],
          password: [{
            required: true,
            trigger: 'blur',
            validator: (rule, value, callback) => {
              if(value.length < 5) {
                callback(new Error(this.$t("login.passwordErrorTips")))
              }
              else {
                callback()
              }
            }
          }]
        },
        loading: false,
        pwdType: 'password'
      }
    },
    
    methods: {
      showPwd() {
        if(this.pwdType === 'password') {
          this.pwdType = ''
        }
        else {
          this.pwdType = 'password'
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          // console.log(valid)
          if(valid) {
            this.loading = true
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false
              this.$router.push({path: '/'})
            }).catch(() => {
              this.loading = false
            })
          }
          else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  $bg = #2d3a4b
  $dark_gray = #889aa4
  $light_gray = #eee
  
  .login-container
    position: fixed
    height: 100%
    width: 100%
    background-color: $bg
    input:-webkit-autofill
      -webkit-box-shadow: 0 0 0 1000px #293444 inset !important
      -webkit-text-fill-color: #fff !important
    
    input
      background: transparent
      border: 0
      -webkit-appearance: none
      border-radius: 0
      padding: 12px 5px 12px 15px
      color: $light_gray
      height: 47px
    
    .el-input
      display: inline-block
      height: 47px
      width: 85%
    
    .tips
      font-size: 14px
      color: #fff
      margin-bottom: 10px
    
    .svg-container
      padding: 6px 5px 6px 15px
      color: $dark_gray
      vertical-align: middle
      width: 30px
      display: inline-block
      &_login
        font-size: 20px
    .title-container
      position: relative
      .title
        font-size: 26px
        font-weight: 400
        color: $light_gray
        margin: 0px auto 40px auto
        text-align: center
        font-weight: bold
      .set-language
        color: #fff
        position: absolute
        top: 5px
        right: 0px
      
    
    .login-form
      position: absolute
      left: 0
      right: 0
      width: 400px
      padding: 35px 35px 15px 35px
      margin: 120px auto
    
    .el-form-item
      border: 1px solid rgba(255, 255, 255, 0.1)
      background: rgba(0, 0, 0, 0.1)
      border-radius: 5px
      color: #454545
    
    .show-pwd
      position: absolute
      right: 10px
      top: 7px
      font-size: 16px
      color: $dark_gray
      cursor: pointer
      user-select: none
    
    .thirdparty-button
      position: absolute
      right: 35px
      bottom: 28px


</style>
