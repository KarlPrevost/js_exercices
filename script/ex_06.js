(function (){
window.onload = function(){
    var Hero = function(prenom, classe, intel, force) {
        this.prenom = prenom[0].toUpperCase() + prenom.slice(1, prenom.length).toLowerCase();
        this.classe = classe;
        this.intel = intel;
        this.force = force;

    Hero.prototype.toString = function(){
        let texte = "Je suis " + this.prenom + "le " + this.classe + ", j'ai " + this.intel + " points d'intelligence et " + this.force + " points de force! <br>";
        document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerHTML += texte;    
        }
    }
        var mage = new Hero("amadeus", "mage", 10, 3);
        var guerrier = new Hero("pontius", "guerrier", 3, 10);
        mage.toString();
        guerrier.toString();
}
})();