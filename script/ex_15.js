window.onload = function() {
    (function() {
        var body = document.body;
        var content = document.body.children[0];
        var child = content.children[0];
        var div = child.children[2];
        var footer = div.children[0];
        footer.addEventListener("pangolin", function(event) {
         timer();
        });
        function timer()
        {
          setInterval(function() {     
              footer.style.background = rainbowWarrior();
            }, 1000);
        }
        function rainbowWarrior() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }
    })();
}