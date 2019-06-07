<template lang="pug">
  .app-container
    el-form(:model="form", labelWidth="80px")
      el-form-item(label="姓名")
        el-col(:span="2")
          el-input(v-model="form.name", placeholder="请输入昵称")
        
      el-form-item(label="地区")
        el-select(v-model="form.region", placeholder="请选择地区")
          el-option(label="上海" value="上海")
          el-option(label="北京" value="北京")
          el-option(label="广州" value="广州")
          el-option(label="深圳" value="深圳")
          
      el-form-item(label="时间间隙")
        el-col(:span="5")
          el-date-picker(type="date", placeholder="Pick a date", v-model="form.date1", style="width: 100%;")
        el-col.line(:span="1") -
        el-col(:span="5")
          el-time-picker(type="time", placeholder="Pick a time", v-model="form.date2", style="width:100%")
          
      el-form-item(label="开关")
        el-switch(v-model="form.delivery")
        
      el-form-item(label="活动项")
        el-checkbox-group(v-model="form.type")
          el-checkbox(label="线上活动" name="type")
          el-checkbox(label="提示活动" name="type")
          el-checkbox(label="离线活动" name="type")
          el-checkbox(label="简单活动" name="type")
      el-form-item(label="资源")
        el-radio-group(v-model="form.resource")
          el-radio(label="Sponsor")
          el-radio(label="Venue")
          el-radio(label="Test")
          
      el-form-item(label="文本区")
        el-input(type="textarea" v-model="form.desc")
        
      el-form-item
        el-button(type="primary", @click="onSubmit") Create
        el-button( @click="onCancel") Cancel
</template>

<script>


export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: true,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  created(){
    console.log("form created")
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.line
  text-align: center

</style>

