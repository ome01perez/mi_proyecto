"use strict"

var nombreEncontrado = false;
var nombreBuscar = "faider";
    var lstNombres = [];
    lstNombres.push("PEDRO");
    lstNombres.push("diana");
    lstNombres.push("andres");

    for(var i=0;i<lstNombres.length;i++){
        if(lstNombres[i] == nombreBuscar){
            nombreEncontrado = true;
           break;
        }
    }if(nombreEncontrado){
        console.log('---NOMBRE ENCONTRADO---');
    }else{
        console.log('---NOMBRE NO ENCONTRADO---');
    }
