<template lang="pug">
  el-dropdown.international(trigger="click", @command="handleSetLanguage")
    div
      svg-icon(className="international-icon", iconClass="language")
    el-dropdown-menu(slot="dropdown")
      el-dropdown-item(command="zh", :disabled="language==='zh'") 中文
      el-dropdown-item(command="en", :disabled="language==='en'") English
</template>

<script>
export default {
  
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: 'switch language success',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px!important;
}
</style>


