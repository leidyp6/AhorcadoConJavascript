// VARIABLES
let botonNuevoJuego = document.getElementById("nuevoJuego").style.display = "none";
let botonSalir = document.getElementById("btn-salir").style.display = "none";
let mostrarCanvas = document.getElementById("horca");
let nuevoJuego = document.getElementById("nuevoJuego");

let conjuntoPalabras = ["caminar", "nadar", "volar", "correr", "saltar", "bailar", "girar", "patinar"];
//Capturar canvas
let tablero = document.getElementById("horca").getContext("2d");
// HTML donde se pintan letras incorrectas
let conjuntoLetrasMal = [];
//Palabra para adivinar
var palabraSecreta = "";
//Array para almacenar letras
let guionesPalabraSecreta;
let letraIn = [];
let intentos = 7;
let listaLetrasMal = document.getElementById("letraMal");
let aciertos = 0;

let tecla = document.onkeydown;


function mostrarHome() {
	mostrarCanvas.style.display = "flex";
	document.getElementById("conteoContainer").style.display = "none";
}

mostrarHome();

nuevoJuego.addEventListener("click", function (){ 
	location.reload();
});

//Elegir palabra aleatoria
function elegirPalabraSecreta() {
	var sortearPalabra = conjuntoPalabras[Math.floor(Math.random() * conjuntoPalabras.length)];
	palabraSecreta = sortearPalabra.toUpperCase();
	console.log(palabraSecreta);
}

//Verificar que la tecla pulsada sea letra, codigo ASCII
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

function letrasPalabraOculta() {
	const guionesPalabraSecreta = palabraSecreta.replace(/./g, "_");
	return guionesPalabraSecreta;
}
//revisar empezar nuevo Juego
function empezarNuevo() {
	document.getElementById("letraMal").innerHTML = "";
	document.getElementById("conteoIntentos").innerHTML = "";
	document.getElementById("mostrarLetrasMal").innerHTML = "";
	document.getElementById("aciertos").innerHTML = "";
	iniciarJuego();
}

function iniciarJuego() {
	document.getElementById("comenzar-juego").style.display = "none";
	document.getElementById("conteoContainer").style.display = "flex";
	document.getElementById("nuevoJuego").style.display = "flex";
	document.getElementById("btn-salir").style.display = "flex";

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
				if ((letrasPalabraOculta()).length === letraIn.length) {
					document.getElementById("aciertos").innerHTML = "¡Felicidades, ganaste!";
					document.getElementById("aciertos").className += "ganaste verde";
					document.getElementById("conteoIntentos").innerHTML = "";
				}
			}
		} else {
			intentos--;
			dibujarVictima(intentos);
			document.getElementById("conteoIntentos").innerHTML = "Intenta de nuevo, te quedan " + intentos + " intentos";
			if (intentos > 0) {
				conjuntoLetrasMal.push(letra);
				listaLetrasMal.innerHTML = `<p>${conjuntoLetrasMal}</p>`;
			} else if (intentos <= 0) {
				document.getElementById("aciertos").innerHTML = "Perdiste, la palabra secreta era " + palabraSecreta;
				document.getElementById("aciertos").className += "perdiste rojo";
				document.getElementById("conteoIntentos").innerHTML = "";
			}
			
		} 
	}
}

function reiniciar() {
	location.reload();
}