const express = require('express'),
	fs = require("fs"),
	path = require("path"),
	router = express.Router(),
	service = require("../../mysql/shoot/service")



// 访问根接口
router.get('/login', function(req, res, next) {
	res.send({
		success: false,
		msg: "该接口无法访问!"
	})
})

router.get('/user', request())


module.exports = router
