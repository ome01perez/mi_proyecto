"use strict"

var nota = 10;
switch(nota) {
    case 10:
        console.log("excelente!");
        break;
        case 9:
        case 8:
            console.log("muy bueno")    
           break;
           case 7:
           case 6:     
         console.log("bueno");
         break;
         
         case 5:
             console.log("aceptable");
        break;
        
        case 4:
            case 3:
                console.log("malo");
                break;
        case 2:
        case 1:
           console.log("muy malo");
           break;
           default:
               console.log("por favor ingrese su nota valida");
}

var ciudad = "pitalito";

switch(ciudad) {
    case "bogota":
        console.log("2600 m.s.n.m.");
        break;
        case "cali":
        console.log("1018 m.s.n.m.");
        break;
        case "neiva":
            console.log("442 m.s.n.m.");
            break;
        case "pitalito":
                console.log("1318 m.s.n.m.");
                break;
        default:
            console.log("por favor ingreso una cudad valida");        
}