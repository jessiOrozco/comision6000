let catalogo = "Seleccione alguno de los siguientes productos:\n 1. Cafe \n2. Cafe con leche \n 3. te"; 
let requiereFactura = false
let seguirComprando = true


let subtotal = 0;

let total = 0;

do{
    let opcion = prompt(catalogo);
    subtotal = validacionSeleccion(opcion)
    if(subtotal === 0){
        break;
    }
    requiereFactura = confirm("¿Requiere Factura?")
    if(requiereFactura){
        total += calculoConImpuesto(subtotal)
    }else{
        total += subtotal
    }

    seguirComprando = confirm("¿Quieres seguir comprando?")
    
}while(seguirComprando)

alert("El total de tus bebidas es: \n "+ total)

function validacionSeleccion(opcion){
    opcion = parseInt(opcion)
    if( isNaN(opcion) || opcion < 1  || opcion > 4){
        opcion = alert("No elegiste algo correcto \n")
    }
    
    subtotal = 0

    switch(opcion){
        case 1: 
            subtotal = 10;
            break;
        case 2: 
            subtotal = 20;
            break;
        case 3: 
            subtotal = 40;
            break;
        default: subtotal = 0;
    } 
    return subtotal
}

function calculoConImpuesto(subtotal){
    return subtotal * 1.16
}

