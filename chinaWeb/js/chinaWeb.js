$(function(){
//6、屏幕滑动至某高度后头部导航显示  jQuery写法
$(window).bind("scroll",function(){
		var sTop = $(window).scrollTop();
		var sTop = parseInt(sTop);
		if(sTop>=600){
			if(!$("#head_position_box").is(":visible")){
				try{
					$("#head_position_box").slideDown();
				}catch(e){
					$("#head_position_box").show();
				}
			}
		}else{
			if($("#head_position_box").is(":visible")){
				try{
					$("#head_position_box").slideUp();
				}catch(e){
					$("#head_position_box").hide();
				}
			}
		}
	});



//7、限时免费倒计时
	var GetTime = Date.parse(new Date('2018/12/25 23:59:59')) - Date.parse(new Date());
	function CountDown(){
		GetTime = GetTime - 1000;
		var t = GetTime;
		var d = 0;
		var h = 0;
		var m = 0;
		var s = 0;
		var str = '';
		if(t>0){
			d = Math.floor(t/1000/60/60/24);
			h = Math.floor(t/1000/60/60%24);
			m = Math.floor(t/1000/60%60);
			s = Math.floor(t/1000%60);
		}else{
			$(".count_down").text("请等下次活动");
			$(".count_down span").hide();
			
		};
		if(d>0){
			str = str + d + '天';
		};
		if(h>0 || d>0){
			if(h<10){
				str = str + 0 + h + ':';
			}else{
				str = str + h + ':';
			}
		};
		if(m>0 || h>0 || d>0){
			if(m<10){
				str = str + 0 + m + ':';
			}else{
				str = str + m + ':';
			}
		};
		if(s>0 || m>0 || h>0 || d>0){
			if(s<10){
				str = str + 0 + s ;
			}else{
				str = str + s ;
			}
		};
		if(s=s-1){
			$(".count_down span").hide();
		}
		var oCountDown = document.getElementById("count_down");
		var oCountSpan = document.createElement("span");
		oCountSpan.innerHTML = str;
		oCountDown.appendChild(oCountSpan);
		console.log(str);
		CountDown=setInterval(CountDown,1000);
	}
	window.onload = function(){
		CountDown=setInterval(CountDown,1000);
	}
})		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
