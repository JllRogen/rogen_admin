<template lang="pug">
  section.app-main( style="min-height: 100%")
    transition(name="fade", mode="out-in")
      keep-alive(:include="cachedViews")
        router-view
      //- router-view(:key="key")
      // 缓存页面
      //-keep-alive
          router-view

</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      cachedViews() {
        return this.$store.state.tagsView.cachedViews
      }
      //     key() {
      //       return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      //     }
    }
  }
</script>
