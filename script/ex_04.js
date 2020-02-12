(function(){
    let text = "";
document.onkeypress = function() {
    // console.log(event)
    text += String.fromCharCode(event.charCode);
    let text42 = text.slice(-42);
    // console.log(text);
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerHTML = text42;
    // console.log(document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].textContent.length)
}
})()
