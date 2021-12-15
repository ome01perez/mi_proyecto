"use strict"

/*funcion sin parametros y sin retorno*/
function mostrarhora() {
    var fechaactual = new Date();
    var horaactual = fechaactual.getHours();
    var minutoactual = fechaactual.getMinutes();
    var minutosactualstr = minutoactual.toString(); 


if (horaactual > 12){
    horaactual = horaactual -12;
}
if (minutoactual < 10) {
  minutosactualstr = "0" + minutosactualstr;
}
alert("hora actual: "+ horaactual + ":" + minutosactualstr);
}
/*funcion con parametros y sin retorno */
function saludo(strhtml){
    alert(strhtml);
}

function presentacion(nombre, titulado){
 alert("mi nombre es: " + nombre + " del titulado: "+titulado);
}

/* funcion con retorno*/

function validardescuento(valorproducto){
    var total = 0;
    /*si la compra es igual o mayor a 10000 tiene un descuento del 10% */
    if(valorproducto >= 10000){
 total = valorproducto * .9;
    }
    else if(valorproducto >= 5000 &&  valorproducto <= 9999) {
        total = valorproducto * .95;
    }
    return total;
}
function calculardescuento(valorproducto){
    alert("costo total con descuento: "+ validardescuento(valorproducto));
}