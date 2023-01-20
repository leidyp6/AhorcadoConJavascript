
function dibujarCanvas() {

	tablero.lineWidth = 8;
	tablero.lineCap = "round";
	tablero.lineJoin = "round";
	tablero.fillStyle = "#F3F5F6";
	tablero.strokeStyle = "#8A3871";

	tablero.fillRect(0, 0, 500, 600);
	tablero.beginPath();
	tablero.moveTo(80, 400);
	tablero.lineTo(390, 400);
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

	let anchura = 400/palabraSecreta.length;
	for (let i = 0; i < palabraSecreta.length; i++){

		tablero.moveTo(50 + (anchura*i), 550);
		tablero.lineTo(100 + (anchura*i), 550);
	}
	tablero.stroke();
	tablero.closePath();
}

function etiquetaLetras(){
	tablero.font = " bold 20px Lucida Sans";
	tablero.fillStyle = "black";
	tablero.textAlign = "center";
	tablero.textBaseline = "middle";
	tablero.fillText("PALABRA OCULTA", 250, 450);
}


/*
function dibujarCirculo(){
	tablero.fllStyle = "red";
	tablero.beginPath();
	tablero.arc(200,300,15	,0,Math.PI * 2);
	tablero.fill();
		
}*/ 
