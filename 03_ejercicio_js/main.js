//elemento 1
$("#elem1").on("mouseover", function(){
    $("img").attr("src", "img/arbol.jpg");
    $("#elem1").addClass("destacar");
});

$("#elem1").on("mouseout", function(){
    $("img").attr("src", "img/blanco.jpg");
    $("#elem1").removeClass("destacar");
});


//elemento 2
$("#elem2").on("mouseover", function(){
    $("img").attr("src", "img/lago.jpg");
    $("#elem2").addClass("destacar");
});

$("#elem2").on("mouseout", function(){
    $("img").attr("src", "img/blanco.jpg");
    $("#elem2").removeClass("destacar");
});



//elemento 3
$("#elem3").on("mouseover", function(){
    $("img").attr("src", "img/rio.jpg");
    $("#elem3").addClass("destacar");
});

$("#elem3").on("mouseout", function(){
    $("img").attr("src", "img/blanco.jpg");
    $("#elem3").removeClass("destacar");
});



//elemento 4
$("#elem4").on("mouseover", function(){
    $("img").attr("src", "img/sol.jpg");
    $("#elem4").addClass("destacar");
});

$("#elem4").on("mouseout", function(){
    $("img").attr("src", "img/blanco.jpg");
    $("#elem4").removeClass("destacar");
});

