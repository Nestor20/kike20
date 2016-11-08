//contar cadenas
function contadorA(cadena){
	var contA=0;//inicializacion
	var i=0;
	while(i<cadena.length){//permanencia
		//if(cadena [i]==="a"){//accion
			//if(cadena[i].toUpperCase()=="A"){
				if(cadena[i].toLowerCase()=="a"){//funciona con los tres
			contA++;

		}
		i++;//incremento

	}
	return contA;
}
var cad="Anastacia";
console.log("la cantidad de letras a, es:"+contadorA(cad));