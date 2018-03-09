let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"];


$("document").ready(function(){
    $("#anuncio").text("¡Haz Click para cambiar de color!")
    .width("500px")
    .height("500px")
    .hide()
    .fadeIn(3000)
});

$("#anuncio").on("click", function(){
    let color = colores[Math.floor(Math.random() * colores.length) ];
    $("#anuncio").css("background-color", color);

})


