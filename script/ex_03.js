(function(){
	window.onload = init;
	function init(){
		document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].onclick = clickEvent;
		function clickEvent(){
			let message = prompt("Quel est votre nom ?");
			message ? confirmer(message):clickEvent();
		}
		function confirmer(message){
			let val = confirm("Etes vous sûr que " + message + " est votre nom ? ");
			val ? al(message):clickEvent();
		}
		function al(message){
		alert("Bonjour " + message + " !");
		document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerHTML = "Bonjour " + message + " !";
		}
	}
 })()


 