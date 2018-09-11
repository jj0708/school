//var shool = function(){
////校内资讯轮播图
//	oTabImga = document.getElementById("school_message_right_imgs").getElementsByTagName("a");
//	oTabImg = document.getElementById("school_message_right_imgs").getElementsByTagName("img");
//	oTabTxt = document.getElementById("school_message_right_txt").getElementsByTagName("h5");
//	oTabBtn = document.getElementById("school_message_right_mark").getElementsByTagName("a");
//	oTabNum = 0;
//	oTabStop = null;
////小图标上一页下一页	
//	oPrev = document.getElementById("prev");
//	oNext = document.getElementById("next");
//	oInformImg = document.getElementById("inform_img").getElementsByTagName("li");
//	oInformTxt = document.getElementById("inform_txt").getElementsByTagName("a");
//	oInformArrow = document.getElementById("inform_arrow").getElementsByTagName("a");
////社团活动下三角的隐藏显示	
//	oNav = document.getElementById("club_top_nav").getElementsByTagName("li");
//	oNavArrow = document.getElementById("club_top_nav_arrow").getElementsByTagName("span");
////通知公告向上循环滚动	
//	oScrollBox = document.getElementById("scroll_box");
//	oScrollUl = document.getElementById("ul_scroll");
//	oScrollUl2 = document.getElementById("ul_scroll2");
//}
window.onload = function(){
//校内资讯轮播图
	var oTabImga = document.getElementById("school_message_right_imgs").getElementsByTagName("a");
	var oTabImg = document.getElementById("school_message_right_imgs").getElementsByTagName("img");
	var oTabTxt = document.getElementById("school_message_right_txt").getElementsByTagName("h5");
	var oTabBtn = document.getElementById("school_message_right_mark").getElementsByTagName("a");
	var oTabNum = 0;
	var oTabStop = null;
//小图标上一页下一页	
	var oPrev = document.getElementById("prev");
	var oNext = document.getElementById("next");
	var oInformImg = document.getElementById("inform_img").getElementsByTagName("li");
	var oInformTxt = document.getElementById("inform_txt").getElementsByTagName("a");
	var oInformArrow = document.getElementById("inform_arrow").getElementsByTagName("a");
//社团活动下三角的隐藏显示	
	var oNav = document.getElementById("club_top_nav").getElementsByTagName("li");
	var oNavArrow = document.getElementById("club_top_nav_arrow").getElementsByTagName("span");
//通知公告向上循环滚动	
	var oScrollBox = document.getElementById("scroll_box");
	var oScrollUl = document.getElementById("ul_scroll");
	var oScrollUl2 = document.getElementById("ul_scroll2");
	document.querySelector('#inform_img li');
//校内资讯轮播图
	for(var k=0;k<oTabBtn.length;k++){
		schoolTab(k);
	}
	function schoolTab(n){
		oTabBtn.item(n).onclick = function(){
			oThis = this;
			oTabNum = n;
			tabslide(oThis);
		}
	}
	function setTimeTab(){
		oTabNum ++;
		if(oTabNum>=oTabBtn.length ){
			oTabNum=0;
		}
		tabslide(oTabBtn[oTabNum]);	
	}
	function tabslide(obj){
		for(var i=0;i<oTabBtn.length;i++)oTabBtn[i].removeAttribute('class');
		obj.className = 'hover';
//		oTabImga[0].setAttribute('href',obj.getAttribute('ahref'));
//		oTabImg[0].setAttribute('src',obj.getAttribute('imgsrc'));
//		oTabTxt[0].innerHTML = obj.getAttribute('tit');
		oTabImga[0].setAttribute('href',obj.dataset.ahref);
		oTabImg[0].setAttribute('src',obj.dataset.imgsrc);
		oTabTxt[0].innerHTML = obj.dataset.tit;
	}
	
	Object.prototype.data = function(str){
		if(this.dataset[str])
		return this.dataset[str];
		
		return this.getAttribute('data-'+str);
		
	}
	
	
	document.getElementById("school_message_right").onmouseover = function(){
		clearInterval(oTabStop);
	}
	document.getElementById("school_message_right").onmouseout = function(){
		clearInterval(oTabStop);
		oTabStop = window.setInterval(setTimeTab,2000);
	}
	oTabStop = window.setInterval(setTimeTab,2000);
//小图标上一页下一页
//
//
//
//社团活动下三角的隐藏显示	
	for(var l=0;l<oNav.length;l++){
		oNavAdd(l);
	}
	function oNavAdd(m){
		oNav.item(m).onclick = function(){
			for(var j=0;j<oNav.length;j++){
				oNavArrow.item(j).style.display = "none";
			}
			oNavArrow.item(m).style.display = "block";
		}
	}

//通知公告向上循环滚动
	oScrollUl2.innerHTML = oScrollUl.innerHTML;
	function scrollUp(){
		if(oScrollBox.scrollTop>=oScrollUl.offsetHeight){
			oScrollBox.scrollTop = 0;
		}else{
			oScrollBox.scrollTop++;
		}
	}
	var time=100;
	var myTimeStop=null;
	oScrollBox.onmouseover = function(){
		clearInterval(myTimeStop);
	}
	oScrollBox.onmouseout = function(){
		clearInterval(myTimeStop);
		myTimeStop = setInterval(scrollUp,time);
	}
	myTimeStop = setInterval(scrollUp,time);



















}