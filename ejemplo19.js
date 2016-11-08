 //sentencia for 
 function contadorA(cadena,letra){
 	for(var i =0, contA=0;i<cadena.length;i++){//permanencia
if (cadena[i].toLowerCase()===letra){//accion
contA++;

}
 	}
 	return contA;
 }
 var cad="Romero";
 var letra="r";
 console.log("la cantidad de  letras" + letra +" es : "+ contadorA(cad,letra));
