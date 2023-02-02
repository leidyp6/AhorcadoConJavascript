
function dibujarCanvas() {

	tablero.lineWidth = 8;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "#F3F5F6";
	tablero.strokeStyle = "#4F7E48";

	tablero.fillRect(0, 0, 1080, 780);
	tablero.beginPath();
	tablero.moveTo(100, 500);
	tablero.lineTo(700, 500);
	tablero.stroke();
	tablero.closePath();
}	

//base disenio lineas canvas
function disenoLineas(){
	tablero.lineWidth = 6;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "#393534";
	tablero.strokeStyle = "#4F7E48";
}

//Pintar guiones segun palabrasecreta-modo live coding
function dibujarGuiones(){
	disenoLineas();

	tablero.beginPath();

	let anchura = 750/palabraSecreta.length;
	for (let i = 0; i < palabraSecreta.length; i++){
		tablero.moveTo(100 + (anchura*i), 650);
		tablero.lineTo(150 + (anchura*i), 650);
	}
	tablero.stroke();
	tablero.closePath();
}

function etiquetaLetras(){
	tablero.font = " bold 40px Lucida Sans";
	tablero.fillStyle = "black";
	tablero.textAlign = "center";
	tablero.textBaseline = "middle";
	tablero.fillText("PALABRA OCULTA", 250, 550);
}

function agregaLetrasOk(indice){
	tablero.font = " bold 40px Lucida Sans";
	tablero.lineWidth = "5";
	tablero.lineCap="round";
    tablero.lineJoin="round";
	tablero.fillStyle = "black";
	tablero.textBaseline = "middle";
	let ancho = 750/palabraSecreta.length;
	tablero.fillText(palabraSecreta[indice], 120 +(ancho * indice), 630);
	tablero.stroke();
}	

function dibujarHorca(){
	disenoLineas();

	tablero.beginPath();
	tablero.moveTo(300, 30);
	tablero.lineTo(300, 500);
	tablero.stroke();
	tablero.closePath();

	tablero.beginPath();
	tablero.moveTo(300, 30);
	tablero.lineTo(550, 30);
	tablero.stroke();
	tablero.closePath();

	tablero.beginPath();
	tablero.moveTo(300, 80);
	tablero.lineTo(400, 30);
	tablero.stroke();
	tablero.closePath();
}

//pintar cuerda - 6
function cuerda(){
	disenoLineas();

	tablero.beginPath();
	tablero.moveTo(550, 30);
	tablero.lineTo(550, 60);
	tablero.stroke();
	tablero.closePath();
}

//pintar cabeza - 5
function cabeza(){
	disenoLineas();

	tablero.beginPath();
	tablero.arc(550, 100, 40, Math.PI*2,false);
	tablero.stroke();
	//ojo Izq
	tablero.beginPath();
	tablero.arc(535, 90, 5, Math.PI*2,false);
	tablero.stroke();
	//ojo der
	tablero.beginPath();
	tablero.arc(560, 90, 5, Math.PI*2,false);
	tablero.stroke();
	// boca
	tablero.beginPath();
	tablero.moveTo(540, 110);
	tablero.lineTo(560, 120);
	tablero.moveTo(560, 110);
	tablero.lineTo(540, 120);
	tablero.stroke();
	tablero.closePath();
}

//pintar tronco - 4
function tronco(){
	disenoLineas();

	tablero.beginPath();
	tablero.moveTo(550, 140);
	tablero.lineTo(550, 280);
	tablero.stroke();
	tablero.closePath();
}

//brazo izquierdo - 3
function brazoIzq(){
	disenoLineas();

	tablero.beginPath();
	tablero.moveTo(550, 170);
	tablero.lineTo(500, 250);
	tablero.stroke();
	tablero.closePath();
}

//brazo derecho - 2
function brazoDer(){
	disenoLineas();

	tablero.beginPath();
	tablero.moveTo(550, 170);
	tablero.lineTo(600, 250);
	tablero.stroke();
	tablero.closePath();
}

//pierna izquierda - 1
function piernaIzq(){
	disenoLineas();

	tablero.beginPath();
	tablero.moveTo(550, 280);
	tablero.lineTo(500, 350);
	tablero.stroke();
	tablero.closePath();	
}

//pierna derecha - 0
function piernaDer(){
	disenoLineas();

	tablero.beginPath();
	tablero.moveTo(550, 280);
	tablero.lineTo(600, 350);
	tablero.stroke();
	tablero.closePath();
}

function dibujarVictima(){
	if(intentos == 6){
		cuerda();
	} else if (intentos == 5){
		cabeza();
	} else if (intentos == 4){
		tronco();
	} else if (intentos == 3){
		brazoIzq();
	} else if (intentos == 2){
		brazoDer();
	} else if (intentos == 1){
		piernaIzq();
	} else if (intentos == 0){
		piernaDer();
	}
}