//import [dibujarCanvas]from'./canvas.js';

// VARIABLES
let conjuntoPalabras =["caminar", "nadar", "volar", "correr", "saltar", "bailar", "girar", "patinar", "ejercicio"];
//Capturar canvas
let tablero = document.getElementById("horca").getContext("2d");
//Palabra para adivinar
var palabraSecreta = "";
//Elemento html donde se escribirá la palabra
let respuesta = document.getElementsByClassName("adivinaEsto");
//Variable que pinta lineas de palabra secreta



//Elegir palabra aleatoria
function elegirPalabraSecreta(){
	var sortearPalabra = conjuntoPalabras[Math.floor(Math.random()* conjuntoPalabras.length)];
	palabraSecreta = sortearPalabra.toUpperCase();
	console.log(palabraSecreta);
	const guionesPalabraSecreta = palabraSecreta.replace(/./g, " _ ");
	document.getElementById("campoGuiones").innerHTML=guionesPalabraSecreta;
	//console.log(guionesPalabraSecreta);
	return guionesPalabraSecreta;
	
}

function iniciarJuego() {
	document.getElementById("comenzar-juego").style.display = "none";
	elegirPalabraSecreta();

	dibujarCanvas();
	dibujarGuiones();
}