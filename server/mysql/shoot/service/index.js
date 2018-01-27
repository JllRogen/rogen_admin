

const path = require("path"),
	fs = require("fs"),
	tool = require("../../tool")

//////////////////////////////////////////////////////////
let map = {}
/**
 * 获取服务列表
 */
map.getList = function() {
	let pathname = path.normalize(`${__dirname}/serviceList.js`)
	return tool.getData(pathname)
}
/**
 *
 * @type {{}}
 */


////////////////////////////////////////////////////////////////////
module.exports = map
/////////////////////////////////////////////////////////////////
