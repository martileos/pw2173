

const {BrowserWindow}=require('electron').remote
const app=require('electron').app;
const path=require('path');
const url=require('url');
const $ = require('jquery');
function inicia()
{
	$.ajax({
	  url: 'https://randomuser.me/api/?results=20',
	  dataType: 'json',
	  success: function(data) {
	  	var resultado = "";
	  	var nombre = "";
	  	for(var i=0;i<20;i++)
	  	{
	  		nombre = data.results[i].name.first+" "+data.results[i].name.last;
	  		foto = data.results[i].picture.medium;
	  		resultado="<li><img src="+foto+">"+nombre+"</li>";
	  		$("#lstUsuarios").append(resultado);
	  	}	  	
	  }
	});
}
inicia();






