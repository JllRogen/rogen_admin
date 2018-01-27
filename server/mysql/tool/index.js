

const path = require("path"),
	url= require("url"),
	fs = require("fs")

let map = {}
//////////////////////////////////////////////////////////
/**
 * 获取数据
 * @param pathname
 * @param callback
 * @param params
 */
let funPathname = path.normalize(`${__dirname}/toolFun.js`)
let toolFunContent = fs.readFileSync(funPathname, "utf-8")

//console.log(toolFunContent)

map.getData = function( pathname, callback, params ) {
	console.log(pathname)
	try {
		let dataContext = fs.readFileSync(pathname,'utf-8')
		let context = toolFunContent + dataContext + ";return data"
		
		//console.log(context)
		let fn = new Function(["params", "tool"], context)
		// 工具参数
		let tool ={
			fs,
			url,
			path,
			__dirname,
			__root: process.cwd()
		}
		return  fn(params, tool )  // 调用函数
	} catch(err) {
		console.log(err)
		return null
	}
}
/////////////////////////////////////////////////////////
module.exports = map
