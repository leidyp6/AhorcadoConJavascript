// VARIABLES
let conjuntoPalabras = ["caminar", "nadar", "volar", "correr", "saltar", "bailar", "girar", "patinar", "ejercicio"];
//Capturar canvas
let tablero = document.getElementById("horca").getContext("2d");
// HTML donde se pintan letras incorrectas
let conjuntoLetrasMal = [];
//Palabra para adivinar
var palabraSecreta = "";
//Array para almacenar letras
let guionesPalabraSecreta;
let letraIn = [];
let intentos = 6;
let listaLetrasMal = document.getElementById("letraMal");
let aciertos = 0;

function ocultarElementos() {
	document.getElementById("accionesJuego").style.display = "none";
}

ocultarElementos();

//Elegir palabra aleatoria
function elegirPalabraSecreta() {
	var sortearPalabra = conjuntoPalabras[Math.floor(Math.random() * conjuntoPalabras.length)];
	palabraSecreta = sortearPalabra.toUpperCase();
	console.log(palabraSecreta);
}

function comprobarSiEsLetra(key) {
	let estado = false;
	if (key >= 65 && letraIn.indexOf(key) || key <= 90 && letraIn.indexOf(key)) {
		letraIn.push(key);
		console.log(key, estado);
		return estado;
	} else {
		estado = true;
		console.log(key, estado);
		return estado;
	}
}

function letrasPalabraOculta(){
	const guionesPalabraSecreta = palabraSecreta.replace(/./g, "_");
	//document.getElementById("campoGuiones").innerHTML = guionesPalabraSecreta;
	return guionesPalabraSecreta;
}

function iniciarJuego() {
	document.getElementById("comenzar-juego").style.display = "none";
	document.getElementById("accionesJuego").style.display = "flex";
	document.getElementById("horca").style.display = "flex";
	elegirPalabraSecreta();
	dibujarCanvas();
	dibujarHorca();
	
	etiquetaLetras();
	dibujarGuiones();
	
	document.onkeydown = (e) => {
		let letra = e.key.toUpperCase();
		if (comprobarSiEsLetra(letra) && palabraSecreta.includes(letra)) {
			for (let i = 0; i < palabraSecreta.length; i++) {
				if (palabraSecreta[i] === letra) {
					agregaLetrasOk(i);
					letraIn.push(letra);
				} 
				if((letrasPalabraOculta()).length === letraIn.length){
					document.getElementById("ganaste").innerHTML = "Ganaste";
					document.getElementById("labelPalabraOculta").style.display = "none";
					document.getElementById("letraMal").style.display = "none";
					document.getElementById("conteoIntentos").style.display = "none";
					document.getElementById("comenzar-juego").style.display = "flex";
				}
			}
			
		} else {
			intentos--;
			console.log(intentos);
			if (intentos > 0) {
				document.getElementById("conteoIntentos").innerHTML = "Intenta de nuevo, te quedan " + intentos + " intentos";		
				conjuntoLetrasMal.push(letra);
				listaLetrasMal.innerHTML = `<p>${conjuntoLetrasMal}</p>`;
				} else if (intentos <= 0) {
					//document.getElementById("conteoIntentos").innerHTML = "FIN DEL JUEGO";
					alert ("Perdiste");
					}
		
				}
		
		}
	
}