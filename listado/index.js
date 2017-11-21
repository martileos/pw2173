

const {BrowserWindow}=require('electron').remote
const app=require('electron').app;
const path=require('path');
const url=require('url');
const $ = require('jquery');

function datos(nombre,genero,foto,direccion,telefono)
{
	this.nombre    = nombre;
	this.genero    = genero;
	this.foto      = foto;
	this.direccion = direccion;
	this.telefono  = telefono;
}

var usuarios = new Array(20);
function inicia()
{
	$.ajax({
	  url: 'https://randomuser.me/api/?results=20',
	  dataType: 'json',
	  success: function(data) {
	  	var resultado = "";
	  	var nombre    = "";
	  	var genero    = "";
	  	var direccion = "";
	  	var telefono  = "";
	  	var foto      = "";
	  	for(var i=0;i<20;i++)
	  	{
	  		nombre = data.results[i].name.first+" "+data.results[i].name.last;
	  		genero = data.results[i].gender;
	  		direccion = data.results[i].location.street;
	  		telefono = data.results[i].phone;	  		
	  		foto = data.results[i].picture.medium;
	  		resultado="<li><img src="+foto+">"+nombre+"<button id='"+i+"'>Detalle</button></li>";
	  		$("#lstUsuarios").append(resultado);
	  		usuarios[i] = new datos(nombre,genero,foto,direccion,telefono);
	  	}	  	
	  }
	});
}

function botonDetalle(){
	alert(usuarios[this.id].nombre);
	alert(usuarios[this.id].genero);
	alert(usuarios[this.id].foto);
}

$("body").on("click","li > button",botonDetalle);
inicia();










