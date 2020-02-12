//getElementById()
//getElementsByClassName()
//getElementsByTagName()
//querySelector()
//querySelectorAll()

/* (function(window,document){
    window.onload = init; // execute la fonction init , une fois la page chargée
    function init(){
        var text = "Hello World";
        document.getElementById('bonjour').innerHTML = text;
        let element = document.getElementById('bonjour'); // Récupération de l'élément
        element.innerHTML = "Hello world"; //modification du code HTML de l'élément
    }
})(window,document) */

/* (function(window,document){
    window.onload = init; // execute la fonction init , une fois la page chargée
    function init(){
        var textBase = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        var text = "Hello World";
        document.body.innerHTML = document.body.innerHTML.replace(textBase, text);        
    }
})(window,document) */

(function(window, document){
    window.onload = init;
    function init(){
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerHTML = "Hello World";
    }

})(window, document)


/* window.addEventListener('load',function() {
let treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT 
);
let nodeList = []
while(treeWalker,nextNode()){
    nodeList.push(treeWalker.currentNode)
}
nodeList[6].textContent = "Hello World"
}) */
