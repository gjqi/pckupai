//获取cookie并动态生成页面
var listObj=getAll()
if(listObj.length==0){
	$('#box').css("display","block")
	$("#table").css("display","none")
//	$('#totalcount').css('display','none')
}else{
	$('#box').css("display","none")
	$("#table").css("display","block")
//	$('#totalcount').css('display','block')
	var trstr=""
	$.each(listObj, function(i,ele) {
		trstr+='<tr><td><input type="checkbox" class="ck"/></td>'
						+'<td><img src="'+listObj[i].imgSrc+'"/></td>'
						+'<td>'+listObj[i].name+'</td>'
						+'<td>'+listObj[i].price+'</td>'
						+'<td><button class="down">-</button><input type="text" class="num" value="'+listObj[i].pcount+'"/><button class="up">+</button></td>'
						+'<td>'+listObj[i].pcount*listObj[i].price+'</td>'
						+'<td><button class="del">删除</button></td></tr>'
		$("#tbody").html(trstr)
		$("#tbody tr").attr("id",listObj[i].id)
	});
}
//计算总价
   var cks=$(".ck")
function xuanzhe(){
    cks=$(".ck")
	var sum=0
	$.each(cks, function(i,ele) {
		if(cks[i].checked==true){
			var tr=$("#tbody tr")
			var temp=tr.children().eq(5).html()
//			var temp=temps.substr(1)
			sum+=Number(temp)
		}
	});
	return sum
}
$.each(cks, function(i,ele) {
	cks.change(function(){
		ischeckall()
		$("#totalcount #aggregate p:eq(0)").find("span").html(xuanzhe())
	})
});

//全选操作
$("#allcheck").change(function(){
	$.each(cks, function(i,ele){
		cks[i].checked=$("#allcheck").prop("checked")
	})
	$("#totalcount #aggregate p:eq(0)").find("span").html(xuanzhe())
})
//判断全选操作
function ischeckall(){
	var flag=true
	$.each(cks, function(i,ele) {
		if(cks[i].checked==false){
			flag=false
		}	
	});
	if(flag==true){
		$("#allcheck").prop("checked",true)
	}else{
		$("#allcheck").prop("checked",false)
	}
}


var add=$("#tbody tr td .up")
var jian=$("#tbody tr td .down")
var num=$("#tbody tr td .num")
var dels=$("#tbody tr td .del")
//增加商品数量
$.each(add, function(i,ele) {	
	add.click(function(){
		var textnum=$(this).prev()
		textnumVal=Number(textnum.val())+1
		textnum.val(textnumVal)
		var tr=$("#tbody tr")
		var id=tr.attr("id")
		updateNum(id,1);
		var prices=tr.children().eq(3).html()
		var price=prices.substr(1)
		tr.children().eq(5).html(Number(textnumVal)*Number(price))
		var myck=$("#tbody tr td:eq(0)").find(".ck")
		if(myck.checked==true){
			$("#totalcount #aggregate p:eq(0)").find("span").html(xuanzhe())
		}
	})
});
//减少商品数量
$.each(jian, function(i,ele) {
	jian.click(function(){
		var textnum=$(this).next()
		textVal=Number(textnum.val())-1
		textnum.val(textVal)
		var tr=$("#tbody tr")
		var id=tr.attr("id")
		if(textVal<1){
			textnum.val(1)
		}else{
			updateNum(id,-1)
		}
		var prices=tr.children().eq(3).html()
		var price=prices.substr(1)
		tr.children().eq(5).html(Number(textVal)*Number(price))
		var mycks=$("#tbody tr td:eq(0)").find(".ck")
		if(mycks.checked==true){
			$("#totalcount #aggregate p:eq(0)").find("span").html(xuanzhe())
		}
	})
});
//手动改数量
$.each(num, function(i,ele) {
	num.blur(function(){
		var txtNum=parseInt($(this).val())
		$(this).val(txtNum)
		if(txtNum<1||isNaN(txtNum)){
			$(this).val(1)
		}
		var tr=$("#tbody tr")
		var id=tr.attr("id")
		var listobj=getAll()
		$.each(listobj, function(i,ele) {
			if(id==listobj[i].id){
				listobj[i].pcount=txtNum
			}
		});
		var lisobj=JSON.stringify(listobj)
		setCookie("datas",lisobj,50)
		var prices=tr.children().eq(3).html()
		var price=prices.substr(1)
		tr.children().eq(5).html(Number(txtNum)*Number(price))
		var myckt=$("#tbody tr td:eq(0)").find(".ck")
		if(myckt.checked==true){
			$("#totalcount #aggregate p:eq(0)").find("span").html(xuanzhe())
		}
	})
});
//删除
$.each(dels, function(i,ele) {
	dels.click(function(){
		var tr=$("#tbody tr")
		var id=tr.attr("id")
		delProduct(id)
		tr.remove()
		if(tr.children().length==0){
			$('#box').css("display","block")
			$("#table").css("display","none")
			window.location.reload()
		}
		$("#totalcount #aggregate p:eq(0)").find("span").html(xuanzhe())
	})
});
//商品总数
var tr=$("#tbody tr")
$.each(tr,function(i,ele){
	$('.totality').html(tr.length)
})
//选择的商品数
var selectNum=0
$(".ck").click(function(){
	var index=$(this).index()
	var props=$(this).eq(index).prop("checked")
	if(props==true){		
		selectNum+=1
		$('.select_sum').html(selectNum)
	}else{
		selectNum-=1
		$('.select_sum').html(selectNum)
	}
})
