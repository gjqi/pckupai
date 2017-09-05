//判断是否存在cookie
	function ishasCookie(name){
		//	返回第一次出现的位置  name=  hh=
		var x=document.cookie.indexOf(name+"=");
		if(x!=-1){
			return true;
		}else{
			return false;
		}
	}
//删除cookie
function delCookie(name){
		var myval=getCookie(name);
		var mydate=new Date();
		mydate.setTime(mydate.getTime()-1);
		if(myval){
			//设置时间-1  --删除
			document.cookie=name+"="+escape(myval)+";expires="+mydate.toGMTString();
		}
}

//设置cookie  ---name --value ---days
	function setCookie(name,value,days){
		var mydate=new Date();
//		escape ---字符串编码
		mydate.setMinutes(mydate.getMinutes()+days);
		document.cookie=name+"="+escape(value)+
		
		((days==null)?"":";expires="+mydate.toGMTString());
		
		//document.cookie="user=666;expires="+mydate.toGMTString()
		
	}
//获取cookie
	function getCookie(name){
			//获取所有cookie
		var x=document.cookie;
		console.log(x);
		//分割cookie
		var y=x.split("; ");
		
			//字符串解码unescape
			console.log(y);
			//循环数组  =分割  name=value
			for(var i=0;i<y.length;i++){
				var z=y[i].split("=");
				//cookie有没有用户传的name
				if(z[0]==name){
					return unescape(z[1]);
					break;
				}
			}
			
		}
//获取元素外部样式
function getStyle(obj,attr){    //获取非行间样式，obj是对象，attr是值
			   if(obj.currentStyle){   //针对ie获取非行间样式
			        return obj.currentStyle[attr];
			   }else{
			        return getComputedStyle(obj,false)[attr];   //针对非ie
				};	
};	
//获取参数---search
function GetQueryString(name){
	//?name=bmw&color=red&age=20
		//name=bmw&--//"name=bmw&"
		//&name=bmw--//--""
		//bmw---//---bmw
		//&--&----//&
						
						///(^|&)name=[^&*](&|$)/
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     
     var r = window.location.search.substr(1).match(reg);
     console.log(r);
     if(r!=null){
     	 return   decodeURI(r[2]);
     } 
     return null;
}
//轮播js
window.onload=function(){
			var uls=document.getElementById("pic")
			var lis=document.getElementsByTagName("li")
			var onewidth=lis[0].offsetWidth
			var inow=0
			//点击切换
			var listage=document.getElementById("nav").children
			for(var i=0;i<listage.length;i++){
				listage[i].num=i
				listage[i].onclick=function(){
					move(this.num)
				}
			}
			//按钮
			var leftbtn=document.getElementById("left_btn")
			var rightbtn=document.getElementById("right_btn")
			leftbtn.onclick=function(){
				inow--
				move(inow)
			}
			rightbtn.onclick=function(){
				inow++
				move(inow)
			}
			//轮播
			function change(){
				inow++
				move(inow)
			}
			var timer=setInterval(change,3000)
			//带参函数
			function move(index){
				
				if(inow>3){
					inow=0
					index=0
				}
				if(inow<0){
					inow=3
					index=3
				}
				uls.style.left=-index*onewidth+"px"
				for(var j=0;j<listage.length;j++){
						listage[j].className=""
					}
					listage[index].className="active"
			}
			
		}

//tab切换
window.onload=function(){
			var boxs=document.getElementById("box")
			var divs=boxs.children
			var lis=document.getElementsByTagName("li")
			for(var i=0;i<lis.length;i++){
				lis[i].index=i
				lis[i].onclick=function(){
				for(j=0;j<divs.length;j++){
					divs[j].style.display="none"
                    lis[j].className=""
				}
				divs[this.index].style.display="block"
				this.className="active"
			}
		}
		}
//拖拽的构造函数
function drag(ele){
	this.ele=ele;
	this.down()
}
drag.prototype.down=function(){
	var that=this;
	that.ele.onmousedown=function(e){
		var e=e||event;
		var divx=e.offsetX;
		var divy=e.offsetY;
		that.move(divx,divy);
	}
}
drag.prototype.move=function(x,y){
	var that=this;
	document.onmousemove=function(e){
		var e=e||event;
		that.ele.style.left=e.clientX-x+"px"
		that.ele.style.top=e.clientY-y+"px"
		that.up()
	}
}
drag.prototype.up=function(){
	this.ele.onmouseup=function(){
		document.onmousemove=null
	}
}
	

