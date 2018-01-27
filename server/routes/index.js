const express = require('express'),
  router = express.Router()   //使用 express.Router 类创建模块化、可挂载的路由句柄

// 访问根接口
router.get('/', function(req, res, next) {
  
  res.send({
    success: false,
    msg: "该接口无法访问!"
  })
})


router.use("/user",  require("./user/index"))


module.exports = router
