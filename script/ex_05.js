(function (){
    window.onload = init;
    function init(){
        i = 16;
        function increaseFont(){
            i++
            document.body.style.fontSize = i + "px";
        }
        function decreaseFont(){
            i--
            document.body.style.fontSize = i + "px";
        }
        function changeBackground(){
            document.body.style.background = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[5].value;
        }
        let cheminNodes = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];
        let boutonPlus = cheminNodes.childNodes[1];
        let boutonMoins = cheminNodes.childNodes[3];
        let barDef = cheminNodes.childNodes[5]; 
        boutonPlus.onclick = increaseFont;
        boutonMoins.onclick = decreaseFont;
        barDef.onclick = changeBackground;
    }
})()

