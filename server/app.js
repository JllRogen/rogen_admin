const express = require('express'),
	path = require('path'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	app = express()
	
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


app.use("/", require("./routes/index"))

//app.use('/wxapi/yuyue', require('./routes/shoot'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found')
	err.status = 404
	next(err)
})

app.use(function(err, req, res, next) {
	
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}
	
	res.status(err.status || 500)
	res.send("资源访问错误")
})

module.exports = app
