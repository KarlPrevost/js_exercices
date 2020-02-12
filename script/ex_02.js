(function (){
	window.onload = function() {
		function incr() {
			x.innerHTML = i;
			i++;
		}
        var i = 1;
		var x = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];
		x.onclick = incr;
	};
})()
