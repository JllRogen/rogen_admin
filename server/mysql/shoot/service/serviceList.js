//console.log(params)

let picList = getPicList("service/index")
console.log(picList)

let data = (() => {
	let list = []
	for(let i = 0; i < 10; i++) {
		list.push({
			id: getRandom(10),
			firstbanner: getRandom(picList),
			englishname: getRandom(["ID Photo", "Marriage Photo", "Professional Photo", "Team Photo"]),
			projectname: getRandom(["完美证件照(不含回执)", "结婚登记照", "商务形象照", "团队形象照"]),
			projecttype: getRandom([1, 1, 1, 0])
		})
	}
	return list
	
})()







