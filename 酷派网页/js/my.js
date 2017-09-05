//设置cookie
function setCookie(name,value,days){
	var mydate=new Date()
	mydate.setMinutes(mydate.getMinutes()+days)
	document.cookie=name+"="+escape(value)+((days==null)?"":";expires="+mydate.toGMTString())
	
}
//获取cookie
function getCookie(name){
	var x=document.cookie
	var y=x.split("; ")
	for(var i=0;i<y.length;i++){
		var z=y[i].split("=")
		if(z[0]==name){
			return unescape(z[1])
			break
		}
	}
}
//第二种get
function mygetCookie(c_name){
		"user=666; dd=888; dss=777"
		//cookie---string--leng---
				//dd=
		var cookies=document.cookie;
		if(cookies.length>0){
			var c_start=cookies.indexOf(c_name+"=");//10
			//是否找到name=
			if(c_start!=-1){
					c_start=c_start+c_name.length+1;
			
				var c_end=cookies.indexOf(";",c_start);//16
				//是否找到;
				if(c_end==-1){
						c_end=cookies.length;
				}
				return unescape(cookies.substring(c_start,c_end));
		}
			
		}
		return "";
		
}
//判断是否存在cookie
function ishasCookie(name){
	var x=document.cookie.indexOf(name+"=")
	if(x!=-1){
		return true
	}else{
		return false
	}
}
//删除cookie
function delCookie(name){
	var myval=getCookie(name)
	var mydate=new Date()
//	mydate.setTime(mydate.getTime()-1)
	mydate.getDate(0)
	if(myval){
		document.cookie=name+"="+escape(myval)+";expires="+mydate.toGMTString()
	}
}
