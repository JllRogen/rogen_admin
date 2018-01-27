const express = require('express'),
	fs = require("fs"),
	path = require("path"),
	router = express.Router(),
	service = require("../../mysql/shoot/service")

//设置跨域访问
router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})



router.post('/user/login', function(req, res, next) {
  console.log(req)
  
  res.send({
    code: 20000,
    data: {
      token: "jdfakngognopegoritj593yhiguh-28942h"
    }
  })
})


module.exports = router
