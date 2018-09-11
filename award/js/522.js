$(function(){
	var GetTime=Date.parse(new Date('2018/12/25 23:59:59')) - Date.parse(new Date());
	function CountDown(){
		GetTime -= 1000;
		var t=GetTime;
		var d=0;
		var h=0;
		var m=0;
		var s=0;
		var str='';
		if(t>0){
			d=Math.floor(t/1000/60/60/24);
			h=Math.floor(t/1000/60/60%24);
			m=Math.floor(t/1000/60%60);
			s=Math.floor(t/1000%60);
		}else{
			$('.time').text("活动已结束，谢谢参与！");
			$('.time p').hide();
		};
		if(d>0){
			str += d + "天";
		};
		if(h>0 || d>0){
			if(h<10){
				str += '0' + h + "小时";
			}else{
				str += h + "小时";
			}
		};
		if(m>0 || h>0 || d>0){
			if(m<10){
				str += '0' + m + "分";
			}else{
				str += m + "分";
			}
		};
		if(s>0 || m>0 || h>0 || d>0){
			if(s<10){
				str += '0' + s + "秒";
			}else{
				str += s + "秒";
			}
		};
		if(s=s-1){
			$('.time p').hide();
		}
		
		var oTime=document.getElementById("time");
		var oTimeTxt=document.createElement('p');
		oTimeTxt.innerHTML='活动于' + str + '后结束';
		oTime.appendChild(oTimeTxt);
		console.log(str);
		CountDown=setInterval(CountDown,1000);
	}
	window.onload=function myfun(){
		CountDown=setInterval(CountDown,1000);
	}
	//window.onload=myfun;

})
