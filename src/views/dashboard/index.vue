<template lang="pug">
  .dashboard-container
    .dashboard-text name:  {{name}}
    .dashboard-text
      span roles:
      span(v-for="role in roles", :key="role") {{role}}
  
</template>



<script>
import { mapGetters } from 'vuex'
export default {
  name: 'dashboard',
  components: {
    
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="stylus"  scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
