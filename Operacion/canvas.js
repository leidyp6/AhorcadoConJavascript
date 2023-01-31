
function dibujarCanvas() {

	tablero.lineWidth = 8;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "#F3F5F6";
	tablero.strokeStyle = "#8A3871";

	tablero.fillRect(0, 0, 1080, 780);
	tablero.beginPath();
	tablero.moveTo(100, 500);
	tablero.lineTo(700, 500);
	tablero.stroke();
	tablero.closePath();
}	

//Pintar guiones segun palabrasecreta-modo live coding
function dibujarGuiones(){
	
	tablero.lineWidth = 6;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "red";// "#F3F5F6";
	tablero.strokeStyle = "red"; //"#8A3871";

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