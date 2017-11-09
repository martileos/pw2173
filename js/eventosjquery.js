var inicia = function(){
	var nuevo = function(){
		// JSON = JavaScript Object Notation
		$.ajax({
		  url: 'https://randomuser.me/api/?results=20',
		  dataType: 'json',
		  success: function(data) {
		  	//alert(data.results[0].name.first+" "+data.results[0].name.last);
		    // console.log(data);
		    $("#nombre").html("<marquee>Nombre: "+data.results[0].name.first+" "+
		    	              data.results[0].name.last+"</marquee>");
		    $("#foto").attr("src",data.results[0].picture.large);
		  }
		});
	}
	
	// alert("Lista la página");
	$("#btnNuevo").on("click",nuevo);
}

//Iniciamos JQuery
//Cuando la página está lista
//ejecuta la función inicia.
$(document).ready(inicia);