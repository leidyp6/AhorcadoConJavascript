// VARIABLES
let conjuntoPalabras =["caminar", "nadar", "volar", "correr", "saltar", "bailar", "girar", "patinar", "ejercicio"];
//Capturar canvas
let tablero = document.getElementById("horca").getContext("2d");
//Palabra para adivinar
var palabraSecreta = "";
//Array para almacenar letras
let letraIn = [];
let letraErronea = [];

function ocultarElementos(){
	
	document.getElementById("espaciodeJuego").style.display = "none";
	document.getElementById("horca").style.display = "none";	
}

//ocultarElementos();

//Elegir palabra aleatoria
function elegirPalabraSecreta(){
	var sortearPalabra = conjuntoPalabras[Math.floor(Math.random()* conjuntoPalabras.length)];
	palabraSecreta = sortearPalabra.toUpperCase();
	console.log(palabraSecreta);
}

function campoParaAdivinar(){
	const guionesPalabraSecreta = palabraSecreta.replace(/./g, " _ ");
	let objetoConGuiones = document.getElementById("campoGuiones").innerHTML = guionesPalabraSecreta;
	console.log(guionesPalabraSecreta);
	//return guionesPalabraSecreta;
}

function esLetra(key){
	let estado = false;
	if (key >= 65 && letraIn.indexOf(key) || key <= 90 && letraIn.indexOf(key)){
		letraIn.push(key);
		console.log(key, estado);
		return estado;
	} else {
		estado = true;
		console.log(key, estado);
		return estado;
	}
}
/*
function capturaLetraMala(){
	let objetoConGuiones = document.getElementById("guionesLetrasMal").innerHTML = letraErronea;
}*/

function evaluarLetras(){
		
	for(i = 0; i < palabraSecreta.length; i++){
		if(palabraSecreta.includes(validaLetra)){
			console.log("FUNCIONA");
			let cambiaGuiones
		} else {
			console.log("no es letra");
		}
	}
	
}

function iniciarJuego() {
	document.getElementById("comenzar-juego").style.display = "none";
	elegirPalabraSecreta();
	campoParaAdivinar();

	dibujarCanvas();
	etiquetaLetras();
	dibujarGuiones();

	document.onkeydown = (e) => {
		let letra = e.key.toUpperCase();
		esLetra(letra);
	}
}