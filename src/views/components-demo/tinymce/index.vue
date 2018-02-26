<template lang="pug">
  .components-container
    div
      tinymce(v-model="content", :height="300" )
    .editor-content(v-html="content")
    
  
</template>

<script>
  import Tinymce from '@/components/Tinymce'
  
  export default {
    name: 'tinymce-demo',
    components: {Tinymce},
    data() {
      return {
        content:  ``
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .components-container
    padding: 15px
  
  .editor-content
    margin-top: 20px
</style>


