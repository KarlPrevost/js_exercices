(function (){
    window.onload = function() {
        var canvasElement = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
        var audio =  new Audio("https://parcomil.jimdo.com/app/download/2767480209/music+indou1.wav?t=1253917350");
        var buttonPause = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[1];
        var buttonStop = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[3];
        var buttonMute = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[5];
        var context = canvasElement.getContext('2d');
        
        // triangle
        context.beginPath();
        context.moveTo(6, 6);
        context.lineTo(14, 10);
        context.lineTo(6, 14);
        context.closePath();
        
        // the outline
        context.lineWidth = 1;
        context.strokeStyle = '#fff';
        context.stroke();
        
        // the fill color
        // context.fillStyle = "#FFCC00";
        // context.fill();

        canvasElement.onclick = function(){
            audio.play();
        };
        buttonPause.onclick = function(){
            audio.pause();
        };
        buttonStop.onclick = function(){
            audio.pause();
            audio.currentTime = 0;
        };
        buttonMute.onclick = function() {
            if(audio.muted != true) {
                    audio.muted = true;
            }
            else {
                audio.muted = false;
            }
        }
    };
})()