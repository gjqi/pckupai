//获取cookie字符串--转成数组
function getAll(){
	var listStr=getCookie("datas");
	var listObj=JSON.parse(listStr)
	return listObj
}
//获取购物车总数方法
function getTotal(){
	var listObj=getAll()
	var total=0
	for(var i=0;i<listObj.length;i++){
		total+=listObj[i].pcount
	}
	return total
}
//判断商品是否存在---//根据商品id来判断是否存在
function checkishas(pid){
	var listObj=getAll()
	var com=false
	for(var i=0;i<listObj.length;i++){
		if(listObj[i].id==pid){
			com=true
			break
		}
	}
	return com
}
//存在后 更新数量
function updateNum(pid,num){
	var listObj=getAll()
	for(var i=0;i<listObj.length;i++){
		if(listObj[i].id==pid){
			listObj[i].pcount+=num
		}
	}
	var lisobj=JSON.stringify(listObj)
	setCookie("datas",lisobj,50)
}
//删除函数
function delProduct(pid){
	var listobj=getAll()
	for(var k=0;k<listobj.length;k++){
		if(pid==listobj[k].id){
			listobj.splice(k,1)
		}
	}
	var lisobj=JSON.stringify(listobj)
	setCookie("datas",lisobj,50)
}


