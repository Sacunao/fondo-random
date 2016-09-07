window.addEventListener("load", function() {
    var boton = document.getElementById("nuevoFondo");
        boton.addEventListener("click", function(){
            var segundos = (parseInt(document.getElementById("segundos").value))*1000;
            setInterval(callback, segundos);
    });

    function callback(){
            var colorhexa = '#'+Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = colorhexa;
    }

    
});
