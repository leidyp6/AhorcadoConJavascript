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
let intentos = 8;
let listaLetrasMal = document.getElementById("letraMal");

function ocultarElementos() {
	document.getElementById("adivinaContainer").style.display = "none";
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

function iniciarJuego() {
	document.getElementById("comenzar-juego").style.display = "flex"; //"none";
	document.getElementById("adivinaContainer").style.display = "flex";
	document.getElementById("horca").style.display = "flex";
	elegirPalabraSecreta();
	dibujarCanvas();
	etiquetaLetras();
	dibujarGuiones();

	document.onkeydown = (e) => {
		let letra = e.key.toUpperCase();
		if (comprobarSiEsLetra(letra) && palabraSecreta.includes(letra)) {
			for (let i = 0; i < palabraSecreta.length; i++) {
				if (palabraSecreta[i] === letra) {
					agregaLetrasOk(i);
				}
			}
		} else {
			intentos--;
			if (intentos > 0) {
				document.getElementById("conteoIntentos").innerHTML = "Intenta de nuevo, te quedan " + intentos + " intentos";		
				conjuntoLetrasMal.push(letra);
				listaLetrasMal.innerHTML = `<p>${conjuntoLetrasMal}</p>`;
				} else if (intentos <= 0) {
					document.getElementById("conteoIntentos").innerHTML = "FIN DEL JUEGO";
					
					}
		
				}
		}

}