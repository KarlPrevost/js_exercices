(function(){
window.onload = function(){
    var canvasArray = [];
    for(i = 1; i < 24; i++) {
       var chemin =  document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[i];
        canvasArray.push(chemin);
        i++;
    };  
    i=0;
    canvasArray.forEach(function(wololo){
    var context = wololo.getContext('2d');
        if(i<4){
            context.fillStyle = "rgb(255, 165, 0)";
        }
        if (i>3  && i<7){
            context.fillStyle = "rgb(128, 0, 128)";
        }
        if (i==7){
            context.fillStyle = "rgb(0, 0, 0)";
        }
        if (i>7){
            context.fillStyle = "rgb(128, 128, 0)";
        }
        context.fillRect(0, 0, 300, 300);
        context.fill();
        i++;
    })
}
})();