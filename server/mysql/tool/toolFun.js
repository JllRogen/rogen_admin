



const {path, fs, url, __dirname, __root} = tool   // 初始化工具函数
///////////////////////////////////////////////////////////////////////////
/**
 * 获取随机数
 */
function getRandom() {
	let arg1 = arguments[0],
		arg2 = arguments[1]
	if(arg1 instanceof Array) {
		let len = arg1.length
		return arg1[getRandom(0, len - 1)]
	}
	let max = arg2,
		min = arg1
	if(max === undefined) {
		max = min
		min = 0
	}
	return min + Math.round(Math.random() * (max - min ))
}

function getNumberStr(len) {
	let tempStr = ""
	for(let i = 0; i< len; i++ ){
		tempStr += getRandom(9)
	}
	return tempStr
}

/*
 * 获取指定路径下面的所有图片路径列表
 */
function getPicList(pathname) {
	if(!pathname) return
	let absolutePath = path.normalize(`${__root}/public/imgs/${pathname}`)
	console.log(absolutePath)
	return fs.readdirSync(absolutePath).map(item => {
		return path.normalize(`imgs/${pathname}/${item}`)
	})
}






