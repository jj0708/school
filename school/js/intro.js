var oIntTab = document.getElementById("intro_number").getElementsByTagName("a");
var oIntDiv = document.getElementById("intro_content_list").getElementsByClassName("intro_content_list_one");
window.onload = function(){
	for(var j=0;j<oIntTab.length;j++){
		addIntTab(j);
	}
}
function addIntTab(n){
	oIntTab.item(n).onclick = function(){
		for(var i=0;i<oIntTab.length;i++){
			oIntTab.item(i).removeAttribute("class");
			oIntDiv.item(i).style.display = "none";
		};
		oIntTab.item(n).setAttribute("class","hover");
		oIntDiv.item(n).style.display = "block";
	}
}