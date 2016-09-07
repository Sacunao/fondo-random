/*window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {
        intervalo (numeroInicial, segundos);
    });

        function intervalo (numeroInicial, segundos){
        	setInterval(function(){
        	document.getElementById("resultado").innerHTML = numeroInicial++; }, segundos*1000);
        	document.getElementById("segundos").value = "";
			document.getElementById("numeroInicial").value = "";
        }
});*/

window.addEventListener("load", function() {
    var boton = document.getElementById("nuevoFondo");
        boton.addEventListener("click", function(){
            var colorhexa = '#'+Math.floor(Math.random()*16777215).toString(16);
            setInterval(callback);
    });

    function color(colorhexa){
        setTimeout(function(){ 
            document.body.style.backgroundColor = colorhexa;}, 2000);
    }

    
});
