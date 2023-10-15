var pics=document.getElementById("pics")
var n=1;

setInterval(function(){if(n > 5) n = 1
pics.innerHTML="<img src='images/fm_"+n+".jpg' />";
	n++;},2000);

